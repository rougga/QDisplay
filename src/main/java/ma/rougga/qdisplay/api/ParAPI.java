
package ma.rougga.qdisplay.api;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import ma.rougga.qdisplay.controller.ParController;


public class ParAPI extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        ParController pc = new ParController();
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        Map<String,String> pars = pc.getAllParsAsMap();
        if(pars == null){
            pars = new HashMap<>();
        }
        String json = objectMapper.writeValueAsString(pars);
        resp.getWriter().println(json);
    }

    
}

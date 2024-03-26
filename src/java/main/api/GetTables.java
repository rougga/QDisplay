package main.api;

import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import main.JsonGenerator;
import main.TableGenerator;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class GetTables extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse response) {

        try {
            response.setCharacterEncoding("UTF-8");
            response.setContentType("application/json");
            PrintWriter out = response.getWriter();
            req.setCharacterEncoding("UTF-8");
            out.print(new JsonGenerator().generateSimpleGblTable(null, null));
            
        } catch (Exception ex) {

        }

    }

}

package ma.rougga.qdisplay.api;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import main.JsonGenerator;

public class GetTables extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse response) {

        try {
            response.setCharacterEncoding("UTF-8");
            response.setContentType("application/json");
            PrintWriter out = response.getWriter();
            req.setCharacterEncoding("UTF-8");
            String[] selectedZonesIds = req.getParameterValues("selectedZonesIds[]");
            if (selectedZonesIds != null) {
                out.print(new JsonGenerator().generateSimpleGblTable(null, null, selectedZonesIds));
            } else {
                out.print("selectedZonesIds = null");
            }

        } catch (IOException ex) {
            System.err.println(ex.getMessage());
        }

    }

}

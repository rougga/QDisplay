package main.api;

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
            String[] selectedZonesIds = req.getParameterValues("selectedZonesIds");
            System.err.println("selectedZonesIds=" + selectedZonesIds);
            if (selectedZonesIds != null) {
                out.print(new JsonGenerator().generateSimpleGblTable(null, null, selectedZonesIds));
            } else {
                out.print(new JsonGenerator().generateSimpleGblTable(null, null, null));
            }

        } catch (Exception ex) {

        }

    }

}

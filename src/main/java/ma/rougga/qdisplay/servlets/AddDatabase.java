package ma.rougga.qdisplay.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLEncoder;
import java.util.Objects;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import main.controller.AgenceController;
import main.modal.Agence;
import org.apache.commons.lang3.StringUtils;

public class AddDatabase extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html;charset=UTF-8");
        request.setCharacterEncoding("UTF-8");
        String name = request.getParameter("name");
        String host = request.getParameter("host");
        String port = request.getParameter("port");
        String database = request.getParameter("database");
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        int defaultStatus = 1;
        if (StringUtils.isNoneBlank(name, host, port, database, username, password)) {
            Agence a = new Agence(name, host, Integer.parseInt(port), database, username.trim(), password, defaultStatus);
            if (new AgenceController().addAgence(a) == 1) {
                Logger.getLogger(AddDatabase.class.getName()).log(Level.SEVERE, "la base de données " + name + " est ajoutée ", "");
                response.sendRedirect("./setting/agences.jsp?err=" + URLEncoder.encode("la base de données " + name + " est ajoutée", "UTF-8"));
            } else {
                Logger.getLogger(AddDatabase.class.getName()).log(Level.SEVERE, "la base de données n'est pas ajoutée", "");
                response.sendRedirect("./setting/agences.jsp?err=" + URLEncoder.encode("la base de données n'est pas ajoutée", "UTF-8"));
            }
        } else {
            Logger.getLogger(AddDatabase.class.getName()).log(Level.SEVERE, "un champ est vide ", "");
            response.sendRedirect("./setting/agences.jsp?err=" + URLEncoder.encode("un champ est vide", "UTF-8"));
        }

    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}

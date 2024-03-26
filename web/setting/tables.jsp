<%@page import="java.text.SimpleDateFormat"%>
<%@page import="main.modal.Agence"%>
<%@page import="java.util.List"%>
<%@page import="main.controller.AgenceController"%>
<%@page import="main.CfgHandler"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>Settings - <%= CfgHandler.APP%></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" type="image/png" href="/<%= CfgHandler.APP%>/img/favicon-32x32.png">
        <script src="/<%= CfgHandler.APP%>/js/jquery.js"></script>
        <link href="/<%= CfgHandler.APP%>/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <link href="/<%= CfgHandler.APP%>/css/default.css" rel="stylesheet" type="text/css"/>
        <script src="/<%= CfgHandler.APP%>/js/bootstrap.bundle.min.js"></script>
        <script src="/<%= CfgHandler.APP%>/js/settings.js"></script>
        <script src="/<%= CfgHandler.APP%>/js/setting/affichage.js"></script>
    </head>
    <body>
        <div class="container-fluid bg-black vh-full">

            <div class="p-3">
                <h1 class="text-white text-center w-100">Paramertres:</h1>
                <h3 class="text-white text-center w-100">Générale</h3>
            </div>
            <div class="container font-weight-bold text-eco">
                <nav>
                    <ul class="nav nav-tabs justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link" href="/<%= CfgHandler.APP%>/setting/agences.jsp">Agences</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link  " href="/<%= CfgHandler.APP%>/setting/affichage.jsp">Générale</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active font-weight-bold" href="/<%= CfgHandler.APP%>/setting/tables.jsp">Tables</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/<%= CfgHandler.APP%>/setting/maj.jsp">M.A.J</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="/<%= CfgHandler.APP%>/">Aller à l'ecran</a>
                        </li>
                    </ul>
                </nav>
                <div class="bg-dark">
                    <form>
                        <div class="modal-body">
                           
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success" id="save">Enregistrer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>

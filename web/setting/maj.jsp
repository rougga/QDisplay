<%@page import="main.CfgHandler"%>
<%@page import="main.modal.Agence"%>
<%@page import="java.util.List"%>
<%@page import="main.controller.AgenceController"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>QData</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" type="image/png" href="../img/favicon-32x32.png">
        <script src="../js/jquery.js"></script>
        <link href="../css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <link href="/<%= CfgHandler.APP%>/css/default.css" rel="stylesheet" type="text/css"/>
        <script src="../js/bootstrap.bundle.min.js"></script>
        <script src="../js/settings.js"></script>
    </head>
    <body class="">
        <div class="container-fluid bg-black vh-100">
            <div class="p-3">
                <h1 class="text-white text-center w-100">Paramertres:</h1>
                <h3 class="text-white text-center w-100">Mise à jour</h3>
            </div>
            <div class="container">

                <nav>
                    <ul class="nav nav-tabs justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link" href="/<%= CfgHandler.APP%>/setting/agences.jsp">Agences</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/<%= CfgHandler.APP%>/setting/affichage.jsp">Générale</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/<%= CfgHandler.APP%>/setting/tables.jsp">Tables</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active  font-weight-bold" href="/<%= CfgHandler.APP%>/setting/maj.jsp">M.A.J</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="/<%= CfgHandler.APP%>/">Aller à l'ecran</a>
                        </li>
                    </ul>
                </nav>
                <div class="mt-4 pt-4">
                    <%
                        String err = request.getParameter("err");
                        if (err != "" && err != null) {

                    %>
                    <%= "<div class='alert alert-danger alert-dismissible fade show' role='alert'><b>"
                            + err
                            + "</b><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>"%>
                    <%
                        }
                    %>

                    <div class="w-100" id="dbTbl">
                        <div class="w-50 mx-auto ">
                            <form action="" class="d-flex justify-content-center flex-column">
                                <a class="btn btn-secondary m-1" id="majNowBtn"><img src="/<%= CfgHandler.APP%>/img/icon/maj.png"> Mise à jour (aujourd'hui)</a>
                                <a class="btn btn-secondary m-1" id="majTBtn" ><img src="/<%= CfgHandler.APP%>/img/icon/maj.png"> Mise à jour tous les tickets</a>

                                <!--
                                <a class="btn btn-secondary m-1" id="majLBtn"><img src="/<%= CfgHandler.APP%>/img/icon/maj.png"> Mise à jour tout le journal de connexion</a>
                                -->
                            </form>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <script>
                        $(document).ready(function () {
                            $("#majTBtn").on('click', function () {
                                $("form").attr("action", "/<%= CfgHandler.APP%>/api/updatealltickets");
                                $("form").submit();
                            });
                            $("#majLBtn").on('click', function () {
                                $("form").attr("action", "/<%= CfgHandler.APP%>/api/updateallloginlog");
                                $("form").submit();
                            });
                            $("#majNowBtn").on('click', function () {
                                $("form").attr("action", "/<%= CfgHandler.APP%>/api/updatenow");
                                $("form").submit();
                            });
                        });

                    </script>
                </div>
            </div>
                                
            <%@include file="../addon/footer.jsp" %>
        </div>
    </body>
</html>

<%@page import="java.text.SimpleDateFormat"%>
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
        <script src="/<%= CfgHandler.APP%>/js/display/functions.js"></script>
        <script src="/<%= CfgHandler.APP%>/js/setting/tables.js"></script>
         <style>
            .nav-item:hover{
                opacity: 0.9;
            }
            .nav-link{
                    color: black;
            }
            .nav-item{
                background-color: #ECDBBA;
            }
            .nav-item-active{
                background-color: #C84B31;
                .nav-link{
                    color: white;
                }
            }
            .nav-item-active.nav-link{
                    color: #ECDBBA;
            }
            .main{
                background-color: #2D4263;
            }
            .bg-dark2{
                background-color: #191919;
            }
            
        </style>
    </head>
    <body class="bg-black">
        <div class="container-fluid bg-black vh-full">

            <div class="p-3">
                <h1 class="text-white text-center w-100">Paramertres:</h1>
                <h3 class="text-white text-center w-100">Tables</h3>
            </div>
            <div class="container font-weight-bold text-eco">
                <nav>
                    <ul class="nav nav-pills nav-fill">
                        <li class="nav-item border border-dark  rounded-top">
                            <a class="nav-link  font-weight-bold" href="/<%= CfgHandler.APP%>/setting/affichage.jsp">
                                <img src="../img/icon/settings-24-black.png" class="float-left"/> GÉNÉRALE
                            </a>
                        </li>
                        <li class="nav-item border nav-item-active border-dark rounded-top">
                            <a class="nav-link" href="/<%= CfgHandler.APP%>/setting/tables.jsp">
                                <img src="../img/icon/rename-24-black.png" class="float-left"/> TABLES
                            </a>
                        </li>
                        <li class="nav-item border border-dark rounded-top">
                           <a class="nav-link " href="/<%= CfgHandler.APP%>/">
                                ALLER À L'ECRAN <img src="../img/icon/arrow-right-24.png" class="float-right"/>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="main">
                    <form>
                        <div class="modal-body">
                            <!<!-- Modify colmn names -->
                            <h3 class="text-white text-center mb-3">Modifier les titre des colonne:</h3>
                            <hr/>
                            <div class="form-group row">
                                <label for="siteName" class="col-sm-4 col-form-label">1- Colonne de Site: </label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control border " id="siteName" name="siteName" required>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="serviceName" class="col-sm-4 col-form-label">2- Colonne de Service:</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control border " id="serviceName" name="serviceName" required>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="nbeName" class="col-sm-4 col-form-label">3- Nombre des Tickets édité: </label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control border " id="nbeName" name="nbeName" required>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="nbattName" class="col-sm-4 col-form-label">4- Nombre des Tickets en attente:</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control border " id="nbattName" name="nbattName" required>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="nbtName" class="col-sm-4 col-form-label">5- Nombre des Tickets traité:</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control border " id="nbtName" name="nbtName" required>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="nbaName" class="col-sm-4 col-form-label">6- Nombre des Tickets Absent:</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control border " id="nbaName" name="nbaName" required>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="moyattName" class="col-sm-4 col-form-label">7- Temp Moyenne d'attente:</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control border " id="moyattName" name="moyattName" required>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="moytName" class="col-sm-4 col-form-label">8- Temp Moyenne de traitement:</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control border " id="moytName" name="moytName" required>
                                </div>
                            </div>
                            <hr/>
                            <!<!-- Modify colmn size en Percentage (le totale doit etre 100%)-->
                            <h3 class="text-white text-center mb-3">Modifier les tailles des colonne:</h3>
                            <hr/>
                            <div class="form-group row">
                                <label for="siteSize" class="col-sm-8 col-form-label">9- Colonne de Site: </label>
                                <div class="col-sm-4">
                                    <input type="number" class="form-control border " id="siteSize" name="siteSize" min="1" max="99">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="serviceSize" class="col-sm-8 col-form-label">10- Colonne de Service:</label>
                                <div class="col-sm-4">
                                    <input type="number" class="form-control border " id="serviceSize" name="serviceSize" min="1" max="99">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="nbeSize" class="col-sm-8 col-form-label">11- Nombre des Tickets édité: </label>
                                <div class="col-sm-4">
                                    <input type="number" class="form-control border " id="nbeSize" name="nbeSize" min="1" max="99">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="nbattSize" class="col-sm-8 col-form-label">12- Nombre des Tickets en attente:</label>
                                <div class="col-sm-4">
                                    <input type="number" class="form-control border " id="nbattSize" name="nbattSize" min="1" max="99">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="nbtSize" class="col-sm-8 col-form-label">13- Nombre des Tickets traité:</label>
                                <div class="col-sm-4">
                                    <input type="number" class="form-control border " id="nbtSize" name="nbtSize" min="1" max="99">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="nbaSize" class="col-sm-8 col-form-label">14- Nombre des Tickets Absent:</label>
                                <div class="col-sm-4">
                                    <input type="number" class="form-control border " id="nbaSize" name="nbaSize" min="1" max="99">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="moyattSize" class="col-sm-8 col-form-label">15- Temp Moyenne d'attente:</label>
                                <div class="col-sm-4">
                                    <input type="number" class="form-control border " id="moyattSize" name="moyattSize" min="1" max="99">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="moytSize" class="col-sm-8 col-form-label">16- Temp Moyenne de traitement:</label>
                                <div class="col-sm-4">
                                    <input type="number" class="form-control border " id="moytSize" name="moytSize" min="1" max="99">
                                </div>
                            </div>
                            <hr/>

                            <div class="form-check my-3 mx-1">
                                <input class="form-check-input " style="height:  20px;width: 20px;" type="checkbox" id="tableResposiveStatus">
                                <label class="form-check-label ml-3" for="tableResposiveStatus">
                                    Table Resposible ?
                                </label>
                            </div>
                            <hr />
                            <div class="form-check my-3 mx-1">
                                <input class="form-check-input " style="height:  20px;width: 20px;" type="checkbox" id="tableBorderStatus">
                                <label class="form-check-label ml-3" for="tableBorderStatus">
                                    Bordure de les colones ?
                                </label>
                            </div>
                            <hr />
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success" id="save">Enregistrer</button>
                </div>
                </form>
            </div>
        </div>
        </div>
                        <%@include file="../addon/footer.jsp" %>
    </div>

</body>
</html>

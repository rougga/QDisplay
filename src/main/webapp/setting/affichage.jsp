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
        <script src="/<%= CfgHandler.APP%>/js/setting/affichage.js"></script>
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
    <body class="bg-dark2">
        <div class="container-fluid bg-black vh-full">

            <div class="p-3">
                <h1 class="text-white text-center w-100">Paramertres:</h1>
                <h3 class="text-white text-center w-100">Générale</h3>
            </div>
            <div class="container font-weight-bold text-eco">
                <nav>
                    <ul class="nav nav-pills nav-fill">
                        <li class="nav-item border border-dark  nav-item-active rounded-top">
                            <a class="nav-link  font-weight-bold" href="/<%= CfgHandler.APP%>/setting/affichage.jsp">
                                <img src="../img/icon/settings-24-black.png" class="float-left"/> GÉNÉRALE
                            </a>
                        </li>
                        <li class="nav-item border border-dark rounded-top">
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
                            <div class="form-group">
                                <label class="mr-4">1 - Theme:</label>
                                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                    <label class="btn btn-secondary">
                                        <input type="radio" name="theme" id="option1" autocomplete="off" value="eco" > 
                                        <img src="../img/icon/battery-16.png" alt=""/>
                                        Économique
                                    </label>
                                    <label class="btn btn-secondary">
                                        <input type="radio" name="theme" id="option2" autocomplete="off" value="normal"> 
                                        Normale
                                    </label>
                                </div>
                            </div>
                            <hr />
                            <div class="form-group">
                                <label for="size">2 - Tailles d'entéte: <span id="titleSizeInfo">0</span> Pixel</label>
                                <input type="range" class="form-control-range" id="titleSize" min="1" max="100">
                            </div>
                            <hr />
                            <div class="form-group">
                                <label for="size">3 - Tailles d'element: <span id="sizeInfo">0</span> Pixel</label>
                                <input type="range" class="form-control-range" id="size" min="1" max="100">
                            </div>
                            <hr />
                            <div class="form-group">
                                <label for="ville">4 - Ville:</label>
                                <select class="form-control" id="ville">
                                    <option selected disabled value="0">Sélectionnez une ville</option>
                                    <option value="Casablanca,Morocco">Casablanca</option>
                                    <option value="Agadir,Morocco">Agadir</option>
                                    <option value="Al Hoceima,Morocco">Al Hoceima</option>
                                    <option value="Béni Mellal,Morocco">Béni Mellal</option>
                                    <option value="El Jadida,Morocco">El Jadida</option>
                                    <option value="Errachidia,Morocco">Errachidia</option>
                                    <option value="Fès,Morocco">Fès</option>
                                    <option value="Kénitra,Morocco">Kénitra</option>
                                    <option value="Khénifra,Morocco">Khénifra</option>
                                    <option value="Khouribga,Morocco">Khouribga</option>
                                    <option value="Larache,Morocco">Larache</option>
                                    <option value="Marrakech,Morocco">Marrakech</option>
                                    <option value="Meknès,Morocco">Meknès</option>
                                    <option value="Nador,Morocco">Nador</option>
                                    <option value="Ouarzazate,Morocco">Ouarzazate</option>
                                    <option value="Oujda,Morocco">Oujda</option>
                                    <option value="Rabat,Morocco">Rabat</option>
                                    <option value="Safi,Morocco">Safi</option>
                                    <option value="Settat,Morocco">Settat</option>
                                    <option value="Salé,Morocco">Salé</option>
                                    <option value="Tanger,Morocco">Tanger</option>
                                    <option value="Taza,Morocco">Taza</option>
                                    <option value="Tétouan,Morocco">Tétouan</option>
                                </select>
                            </div>
                            <div class="form-check my-3 mx-1">
                                <input class="form-check-input " style="height:  20px;width: 20px;" type="checkbox" id="weather">
                                <label class="form-check-label ml-3" for="weather">
                                    Activer la météo?
                                </label>
                            </div>
                            <hr />
                            <div class="form-check my-3 mx-1">
                                <input class="form-check-input " style="height:  20px;width: 20px;" type="checkbox" id="margin" value="">
                                <label class="form-check-label ml-3" for="margin">
                                    La marge des elements?
                                </label>
                            </div>
                            <hr />
                            <div class="form-group">
                                <label for="text">5 - Text roulant:</label>
                                <textarea class="form-control"  rows="3" id="text"></textarea>
                            </div>
                            <hr />
                            <div class="form-group">
                                <label for="textColor">6 - Couleur de Text roulant:</label>
                                <input class="form-control"  type="color" id="textColor">
                            </div>
                            <hr />
                            <div class="form-check" >
                                <input type="checkbox" class="form-check-input " id="hideEmptyTables" style="height:  20px;width: 20px;">
                                <label for="hideEmptyTables" class="form-check-label ml-3">Masquer les tables vides? </label>
                            </div>
                            <hr />
                            <div class="form-group mt-4">
                                <label for="refreshTime">7 - Temps de rafraîchissement (seconde):</label>
                                <input type="number" class="form-control" id="refreshTime" min="0" max="300">
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success" id="save">Enregistrer</button>
                        </div>
                    </form>
                </div>
            </div>
<%@include file="../addon/footer.jsp" %>
        </div>
    </body>
</html>

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
                            <a class="nav-link active font-weight-bold" href="/<%= CfgHandler.APP%>/setting/affichage.jsp">Générale</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/<%= CfgHandler.APP%>/setting/tables.jsp">Tables</a>
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
                                <label for="ville">2 - Ville:</label>
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
                                <input class="form-check-input " style="height:  20px;width: 20px;" type="checkbox" id="weather" checked>
                                <label class="form-check-label ml-3" for="weather">
                                    Activer la météo?
                                </label>
                            </div>
                            <hr />
                            <div class="form-group">
                                <label for="size">3 - Tailles d'element: <span id="sizeInfo">0</span> Pixel</label>
                                <input type="range" class="form-control-range" id="size" min="1" max="100">
                            </div>
                            <div class="form-check my-3 mx-1">
                                <input class="form-check-input " style="height:  20px;width: 20px;" type="checkbox" id="margin" value="">
                                <label class="form-check-label ml-3" for="margin">
                                    La marge?
                                </label>
                            </div>
                            <hr />
                            <div class="form-group">
                                <label for="text">4 - Text roulant:</label>
                                <textarea class="form-control"  rows="3" id="text"></textarea>
                            </div>
                            <hr />
                            <div class="form-check" >
                                <input type="checkbox" class="form-check-input " id="hideEmpty" style="height:  20px;width: 20px;">
                                <label for="hideEmpty" class="form-check-label ml-3">Masquer les tables vides? </label>
                            </div>
                            <hr />
                            <div class="form-group mt-4">
                                <label for="refreshTime">6 - Temps de rafraîchissement:</label>
                                <input type="number" class="form-control" id="refreshTime" min="0" max="300">
                            </div>
                            <hr />
                            
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

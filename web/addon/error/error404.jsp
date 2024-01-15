<%@page import="main.CfgHandler"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title><%= CfgHandler.APP %></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" type="image/png" href="../img/favicon-32x32.png">
        <script src="/<%= CfgHandler.APP %>/js/jquery.js"></script>
        <link href="/<%= CfgHandler.APP %>/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <script src="/<%= CfgHandler.APP %>/js/bootstrap.bundle.min.js"></script>
        <script src="/<%= CfgHandler.APP %>/js/Chart.min.js"></script>
        <link href="/<%= CfgHandler.APP %>/css/Chart.min.css" rel="stylesheet" type="text/css"/>
        <link href="/<%= CfgHandler.APP %>/css/body.css" rel="stylesheet" type="text/css"/>
        <link href="/<%= CfgHandler.APP %>/css/navbar.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <div class="container-lg">
            <div>
                <div class="jumbotron mt-4">
                    <h1 class="display-4">404</h1>
                    <p class="lead">OUPS Y A RIEN À VOIR ICI !

                    </p>
                    <hr class="my-4">
                    <p>La page que vous demandez n’existe pas.</p>
                    <p class="lead">
                        <a class="btn btn-primary btn-lg" href="/<%= CfgHandler.APP %>/" role="button">ALLER A LA PAGE D'ACCUEIL</a>
                    </p>
                </div>
            </div>
    </body>
</html>

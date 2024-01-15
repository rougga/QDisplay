<%@page import="main.CfgHandler"%>
<nav>
    <ul class="nav nav-tabs justify-content-center">
        <li class="nav-item">
            <a class="nav-link" href="/<%= CfgHandler.APP%>/setting/agences.jsp">Agences</a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" href="/<%= CfgHandler.APP%>/setting/affichage.jsp">Affichage</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/<%= CfgHandler.APP%>/setting/maj.jsp">M.A.J</a>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="/<%= CfgHandler.APP%>/">Aller à l'ecran</a>
        </li>
    </ul>
</nav>
<%@page import="main.CfgHandler"%>
<nav>
                    <ul class="nav nav-tabs justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link active font-weight-bold" href="/<%= CfgHandler.APP%>/setting/affichage.jsp">Générale</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/<%= CfgHandler.APP%>/setting/tables.jsp">Tables</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="/<%= CfgHandler.APP%>/">Aller à l'ecran</a>
                        </li>
                    </ul>
                </nav>
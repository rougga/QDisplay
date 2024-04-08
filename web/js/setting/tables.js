$(document).ready(function () {
    let names = {};
    $("#save").on('click', function () {

        names.siteName = $("#siteName").val();
        names.serviceName = $("#serviceName").val();
        names.nbeName = $("#nbeName").val();
        names.nbattName = $("#nbattName").val();
        names.nbtName = $("#nbtName").val();
        names.nbaName = $("#nbaName").val();
        names.moyattName = $("#moyattName").val();
        names.moytName = $("#moytName").val();

        names.siteSize = $("#siteSize").val();
        names.serviceSize = $("#serviceSize").val();
        names.nbeSize = $("#nbeSize").val();
        names.nbattSize = $("#nbattSize").val();
        names.nbtSize = $("#nbtSize").val();
        names.nbaSize = $("#nbaSize").val();
        names.moyattSize = $("#moyattSize").val();
        names.moytSize = $("#moytSize").val();

        names.tableBorderStatus = document.getElementById('tableBorderStatus').checked ? "table-bordred" : "table-borderless";
        names.tableResposiveStatus = document.getElementById('tableResposiveStatus').checked ? "table-resp" : "";

        //save data to browser local storage
        localStorage.setItem('siteName', names.siteName);
        localStorage.setItem('serviceName', names.serviceName);
        localStorage.setItem('nbeName', names.nbeName);
        localStorage.setItem('nbattName', names.nbattName);
        localStorage.setItem('nbtName', names.nbtName);
        localStorage.setItem('nbaName', names.nbaName);
        localStorage.setItem('moyattName', names.moyattName);
        localStorage.setItem('moytName', names.moytName);

        localStorage.setItem('siteSize', names.siteSize);
        localStorage.setItem('serviceSize', names.serviceSize);
        localStorage.setItem('nbeSize', names.nbeSize);
        localStorage.setItem('nbattSize', names.nbattSize);
        localStorage.setItem('nbtSize', names.nbtSize);
        localStorage.setItem('nbaSize', names.nbaSize);
        localStorage.setItem('moyattSize', names.moyattSize);
        localStorage.setItem('moytSize', names.moytSize);

        localStorage.setItem('tableBorderStatus', names.tableBorderStatus);
        localStorage.setItem('tableResposiveStatus', names.tableResposiveStatus);

        console.log(names);
        alert("Changement sauvgardé !!");
    });


    names.siteName = localStorage.getItem('siteName');
    names.serviceName = localStorage.getItem('serviceName');
    names.nbeName = localStorage.getItem('nbeName');
    names.nbattName = localStorage.getItem('nbattName');
    names.nbtName = localStorage.getItem('nbtName');
    names.nbaName = localStorage.getItem('nbaName');
    names.moyattName = localStorage.getItem('moyattName');
    names.moytName = localStorage.getItem('moytName');

    names.siteSize = localStorage.getItem('siteSize');
    names.serviceSize = localStorage.getItem('serviceSize');
    names.nbeSize = localStorage.getItem('nbeSize');
    names.nbattSize = localStorage.getItem('nbattSize');
    names.nbtSize = localStorage.getItem('nbtSize');
    names.nbaSize = localStorage.getItem('nbaSize');
    names.moyattSize = localStorage.getItem('moyattSize');
    names.moytSize = localStorage.getItem('moytSize');

    names.tableBorderStatus = localStorage.getItem('tableBorderStatus');
    names.tableResposiveStatus = localStorage.getItem('tableResposiveStatus');

    $("#siteName").val(names.siteName);
    $("#serviceName").val(names.serviceName);
    $("#nbeName").val(names.nbeName);
    $("#nbattName").val(names.nbattName);
    $("#nbtName").val(names.nbtName);
    $("#nbaName").val(names.nbaName);
    $("#moyattName").val(names.moyattName);
    $("#moytName").val(names.moytName);

    $("#siteSize").val(names.siteSize);
    $("#serviceSize").val(names.serviceSize);
    $("#nbeSize").val(names.nbeSize);
    $("#nbattSize").val(names.nbattSize);
    $("#nbtSize").val(names.nbtSize);
    $("#nbaSize").val(names.nbaSize);
    $("#moyattSize").val(names.moyattSize);
    $("#moytSize").val(names.moytSize);
    
    
    $('#tableBorderStatus').attr("checked", (names.tableBorderStatus === "table-bordred"));
    $('#tableResposiveStatus').attr("checked", (names.tableResposiveStatus === "table-resp"));
});
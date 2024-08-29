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

    //page load
    
    $("#siteName").val(getSiteName());
    $("#serviceName").val(getServiceName());
    $("#nbeName").val(getNbeName());
    $("#nbattName").val(getNbattName);
    $("#nbtName").val(getNbtName());
    $("#nbaName").val(getNbaName());
    $("#moyattName").val(getMoyattName());
    $("#moytName").val(getMoytName());

    $("#siteSize").val(getSiteSize());
    $("#serviceSize").val(getServiceSize());
    $("#nbeSize").val(getNbeSize());
    $("#nbattSize").val(getNbattSize());
    $("#nbtSize").val(getNbtSize());
    $("#nbaSize").val(getNbaSize());
    $("#moyattSize").val(getMoyattSize());
    $("#moytSize").val(getMoytSize());
    
    
    $('#tableBorderStatus').attr("checked", (getTableBorderStatus() === "table-bordred"));
    $('#tableResposiveStatus').attr("checked", (getTableResposiveStatus() === "table-resp"));
});
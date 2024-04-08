$(document).ready(function () {
    $("#size").on('change', function () {
        $('#sizeInfo').html($("#size").val());
        $("#main").css("font-size", $("#size").val() + "px");
    });
    $("#titleSize").on('change', function () {
        $('#titleSizeInfo').html($("#titleSize").val());
        $("#main").css("font-size", $("#titleSize").val() + "px");
    });
    $("#margin").on('change', function () {
        //$("#main td").toggleClass("p-0");
    });
    $("#save").on('click', function () {
        let pars = {};
        var ville = $("#ville").val();
        var size = $("#size").val();
        let titleSize = $("#titleSize").val();
        var text = $("#text").val();
        var mode = $('input[name="theme"]:checked').val();
        let isWeatherEnabled = document.getElementById('weather').checked;
        let isMarginEnabled = document.getElementById('margin').checked;
        let tableRefreshTime = $("#refreshTime").val();
        let hideEmptyTables = document.getElementById('hideEmptyTables').checked;
        let textColor = $("#textColor").val();
        if (ville !== null) {

            //save data to browser local storage
            localStorage.setItem('location', ville);
            localStorage.setItem('titleSize', titleSize);
            localStorage.setItem('size', size);
            localStorage.setItem('margin', isMarginEnabled);
            localStorage.setItem('text', text);
            localStorage.setItem('mode', mode);
            localStorage.setItem('isWeatherEnabled', isWeatherEnabled);
            localStorage.setItem('tableRefreshTime', tableRefreshTime);
            localStorage.setItem('hideEmptyTables', hideEmptyTables);
            localStorage.setItem('textColor', textColor);
            

            //sent params to api for db save
            pars.isWeatherEnabled = isWeatherEnabled;
            pars.location = ville;
            pars.titleSize = titleSize;
            pars.elementSize = size;
            pars.margin = isMarginEnabled;
            pars.text = text;
            pars.bgcolor = "";
            pars.textColor = textColor;
            pars.mode = mode;
            pars.tableRefreshTime = tableRefreshTime;
            pars.hideEmptyTables = hideEmptyTables;
            
            console.log(pars);
            alert("Changement sauvgardé !!");
        } else {
            alert("epmty parameter !!");
        }

    });

    var location = localStorage.getItem('location');
    var size = localStorage.getItem('size');
    var isMarginEnabled = (localStorage.getItem('margin').toLowerCase() === 'true');;
    var mode = localStorage.getItem('mode');
    var titleSize = localStorage.getItem('titleSize');
    var isWeatherEnabled = (localStorage.getItem('isWeatherEnabled').toLowerCase() === 'true');
    var tableRefreshTime = localStorage.getItem('tableRefreshTime');
    var hideEmptyTables = (localStorage.getItem('hideEmptyTables').toLowerCase() === 'true');
    var textColor = localStorage.getItem('textColor');
    
    console.log(isWeatherEnabled);
    $('#staticBackdrop').modal({});
    $('input[value="' + mode + '"]').attr("checked", "true");
    $("#ville").val(location);
    $("#size").val(size);
    $("#titleSize").val(titleSize);
    $('#sizeInfo').html($("#size").val());
    $('#titleSizeInfo').html($("#titleSize").val());
    $("#text").val(localStorage.getItem('text'));
    $('#staticBackdrop').modal('toggle');
    $('#margin').attr("checked", isMarginEnabled);
    $('#weather').attr("checked", isWeatherEnabled);
    $('#hideEmptyTables').attr("checked", hideEmptyTables);
    $("#refreshTime").val(tableRefreshTime);
    $("#textColor").val(textColor);
});
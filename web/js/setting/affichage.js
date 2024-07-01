$(document).ready(function () {
    let pars = {};
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

    var location = localStorage.getItem('location') ? localStorage.getItem('location') : "Casablanca,Morocco";
    var size = localStorage.getItem('size') ? localStorage.getItem('size') : "20";
    var isMarginEnabled = localStorage.getItem('margin') ? (localStorage.getItem('margin').toLowerCase() == 'true') : false;
    var mode = localStorage.getItem('mode') ? localStorage.getItem('mode') : "normal";
    var titleSize = localStorage.getItem('titleSize') ? localStorage.getItem('titleSize') : "36";
    var isWeatherEnabled = localStorage.getItem('isWeatherEnabled') ? (localStorage.getItem('isWeatherEnabled').toLowerCase() == 'true') : true;
    var tableRefreshTime = localStorage.getItem('tableRefreshTime') ? localStorage.getItem('tableRefreshTime') : "30";
    var hideEmptyTables = localStorage.getItem('hideEmptyTables') ? (localStorage.getItem('hideEmptyTables').toLowerCase() == 'true') : false;
    var textColor = localStorage.getItem('textColor') ? localStorage.getItem('textColor') : "#ffffff";
    var text = localStorage.getItem('text') ? localStorage.getItem('text') : "Bonjour";
    
    console.log("weather info is: " + isWeatherEnabled);
    $('#staticBackdrop').modal({});
    $('input[value="' + mode + '"]').attr("checked", "true");
    $("#ville").val(location);
    $("#size").val(size);
    $("#titleSize").val(titleSize);
    $('#sizeInfo').html($("#size").val());
    $('#titleSizeInfo').html($("#titleSize").val());
    $("#text").val(text);
    $('#staticBackdrop').modal('toggle');
    $('#margin').attr("checked", isMarginEnabled);
    $('#weather').attr("checked", isWeatherEnabled);
    $('#hideEmptyTables').attr("checked", hideEmptyTables);
    $("#refreshTime").val(tableRefreshTime);
    $("#textColor").val(textColor);
});
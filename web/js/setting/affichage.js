$(document).ready(function () {
    $("#size").on('change', function () {
        $('#sizeInfo').html($("#size").val());
        $("#main").css("font-size", $("#size").val() + "px");
    });
    $("#margin").on('change', function () {
        //$("#main td").toggleClass("p-0");
    });
    $("#save").on('click', function () {
        let pars = {};
        var ville = $("#ville").val();
        var size = $("#size").val();
        var text = $("#text").val();
        var mode = $('input[name="theme"]:checked').val();
        if (ville !== null) {
            localStorage.setItem('location', ville);
            localStorage.setItem('size', size);
            localStorage.setItem('margin', document.getElementById('margin').checked);
            localStorage.setItem('text', text);
            localStorage.setItem('mode', mode);

            //sent params to api for db save
            pars.location = ville;
            pars.size = size;
            pars.margin = document.getElementById('margin').checked;
            pars.text = text;
            pars.bgcolor = "";
            pars.textcolor = "";
            pars.mode = mode;

            console.log(document.getElementById('margin').checked);
            console.log(text);
            alert("Changement sauvgardé !!");
        } else {
            alert("epmty parameter !!");
        }

    });

    var obj = localStorage.getItem('location');
    var obj2 = localStorage.getItem('size');
    var obj3 = localStorage.getItem('margin');
    var obj4 = localStorage.getItem('margin');
    var obj5 = localStorage.getItem('mode');
    $('#staticBackdrop').modal({});
    $("#ville").val(obj);
    $("#size").val(obj2);
    $('#sizeInfo').html($("#size").val());
    document.getElementById('margin').checked = (obj3 === 'true');
    $("#text").val(localStorage.getItem('text'));
    $('#staticBackdrop').modal('toggle');
    $('input[value="' + obj5 + '"]').attr("checked", "true");
});
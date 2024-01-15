$(document).ready(function () {
$("#size").on('change', function () {
    $('#sizeInfo').html($("#size").val());
    $("#main").css("font-size", $("#size").val() + "px");
});
$("#margin").on('change', function () {
    //$("#main td").toggleClass("p-0");
});
$("#save").on('click', function () {
    var ville = $("#ville").val();
    var size = $("#size").val();
    var text = $("#text").val();
    if (ville !== null) {
        localStorage.setItem('location', ville);
        localStorage.setItem('size', size);
        localStorage.setItem('margin', document.getElementById('margin').checked);
        localStorage.setItem('text', text);
        console.log(document.getElementById('margin').checked);
        console.log(text);
    }

});
var obj = localStorage.getItem('location');
var obj2 = localStorage.getItem('size');
var obj3 = localStorage.getItem('margin');
$('#staticBackdrop').modal({});
$("#ville").val(obj);
$("#size").val(obj2);
$('#sizeInfo').html($("#size").val());
document.getElementById('margin').checked = (obj3 === 'true');
$("#text").val(localStorage.getItem('text'));
$('#staticBackdrop').modal('toggle');
});
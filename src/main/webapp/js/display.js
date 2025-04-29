
$(document).ready(function () {
   
    var marquee = $('div.marquee');
    marquee.each(function () {
        var mar = $(this), indent = mar.width();
        mar.marquee = function () {
            indent--;
            mar.css('text-indent', indent);
            if (indent < -1 * mar.width()) {
                indent = mar.width();
            }

        };
        mar.data('interval', setInterval(function () {
            mar.marquee();
            updateTime();
        }, 1000 / 60));
    });
     $grid = $('#main').masonry({
        // options
        itemSelector: '.site',
        transitionDuration: 0
    });






//listners
    $("#main").on('click', function () {
        toggleFullScreen(document.body);
    });
    $("#zones").on('change', ".check", function () {
        updateZones();
    });
    $("#zones").on('click', ".textSelect", function () {
        var id = $(this).attr("data-id");
        var check = $("input[value=" + id + "]");
        if ($(check).prop("checked")) {
            $(check).prop("checked", false);
        } else {
            $(check).prop("checked", true);
        }
        updateZones();
    });
    $("#selectAll").on('change', function () {
        if ($(this).prop("checked")) {
            $(".check").prop("checked", true);
        } else {
            $(".check").prop("checked", false);
        }
        updateZones();
    });



    //updaters
    updateWeather();
    updateTables(getCheckedZonesFromLocalStorage());
    updateTicker();
    updateTheme();
    updateZoneDropdown();
    checkZoneCheckBoxes();
    setInterval(function () {
        updateWeather();
        updateTables(getCheckedZonesFromLocalStorage());
        updateTicker();
        updateTheme();
        updateZoneDropdown();
        checkZoneCheckBoxes();
        console.log("(" + moment().format('HH:mm:ss dddd DD/MM/YYYY') + ") - Updated");
    }, getTableRefreshTime() * 1000);
});
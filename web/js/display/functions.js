let config = {};
let names = {};
var $grid;
const capitalize = (s) => {
    if (typeof s !== 'string')
        return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
};
function toggleFullScreen(elem) {
    if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
        if (elem.requestFullScreen) {
            elem.requestFullScreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}


// GETTERS
function getLocation() {
    config.location = localStorage.getItem('location');
    if (config.location == undefined) {
        config.location = "Casablanca,Morocco";
    }
    return config.location;
}
function isWeatherEnabled() {
    config.isWeatherEnabled = localStorage.getItem('isWeatherEnabled');
    if (config.isWeatherEnabled == undefined) {
        config.isWeatherEnabled = "true";
    }
    return  (config.isWeatherEnabled.toLowerCase() === 'true');
}
function getRollingTextColor() {
    config.textColor = localStorage.getItem('textColor');
    ;
    if (config.textColor == undefined) {
        config.textColor = "#ffffff";
    }
    return  config.textColor;
}
function getRollingText() {
    config.text = localStorage.getItem('text');
    if (config.text == undefined) {
        config.text = "Bonjour";
    }
    return config.text;
}
function getTitleSize() {
    config.titleSize = localStorage.getItem('titleSize');
    if (config.titleSize == undefined) {
        config.titleSize = "36";
    }
    return config.titleSize;
}
function getTableRefreshTime() {
    config.tableRefreshTime = localStorage.getItem('tableRefreshTime');
    if (config.tableRefreshTime == undefined) {
        config.tableRefreshTime = "30";
    }
    return config.tableRefreshTime;
}
let getOnlineIcon = function (isOnline) {
    if (isOnline) {
        return "<img src='./img/icon/online.png' class='pr-1' />";
    } else {
        return "<img src='./img/icon/offline.png' class='pr-1' />";
    }
};
function getElementSize() {
    config.size = localStorage.getItem('size');
    if (config.size == undefined) {
        config.size = "20";
    }
    return config.size;
}
function getMarginStatus() {
    config.margin = localStorage.getItem('margin');
    if (config.margin == undefined) {
        config.margin = "false";
    }
    return config.margin;
}
function getHideEmptyTablesStatus() {
    config.hideEmptyTables = localStorage.getItem('hideEmptyTables');
    if (config.hideEmptyTables == undefined) {
        config.hideEmptyTables = "false";
    }
    return (config.hideEmptyTables.toLowerCase() === 'true');
}
function getTheme() {
    config.mode = localStorage.getItem('mode');
    if (config.mode == undefined) {
        config.mode = "normal";
    }
    return config.mode;
}
function getSiteName() {
    names.siteName = localStorage.getItem('siteName');
    if (names.siteName == undefined) {
        names.siteName = "Site";
    }
    return names.siteName;
}
function getServiceName() {
    names.serviceName = localStorage.getItem('serviceName');
    if (names.serviceName == undefined) {
        names.serviceName = "Service";
    }
    return names.serviceName;
}
function getNbeName() {
    names.nbeName = localStorage.getItem('nbeName');
    if (names.nbeName == undefined) {
        names.nbeName = "Nb. É";
    }
    return names.nbeName;
}
function getNbattName() {
    names.nbattName = localStorage.getItem('nbattName');
    if (names.nbattName == undefined) {
        names.nbattName = "Nb. Att";
    }
    return names.nbattName;
}
function getNbtName() {
    names.nbtName = localStorage.getItem('nbtName');
    if (names.nbtName == undefined) {
        names.nbtName = "Nb. T";
    }
    return names.nbtName;
}
function getNbaName() {
    names.nbaName = localStorage.getItem('nbaName');
    if (names.nbaName == undefined) {
        names.nbaName = "Nb. A";
    }
    return names.nbaName;
}
function getMoyattName() {
    names.moyattName = localStorage.getItem('moyattName');
    if (names.moyattName == undefined) {
        names.moyattName = "Mo. At";
    }
    return names.moyattName;
}
function getMoytName() {
    names.moytName = localStorage.getItem('moytName');
    if (names.moytName == undefined) {
        names.moytName = "Mo. Tr";
    }
    return names.moytName;
}

//sizes
function getSiteSize() {
    names.siteSize = localStorage.getItem('siteSize');
    if (names.siteSize == undefined) {
        names.siteSize = "25";
    }
    return names.siteSize;
}
function getServiceSize() {
    names.serviceSize = localStorage.getItem('serviceSize');
    if (names.serviceSize == undefined) {
        names.serviceSize = "15";
    }
    return names.serviceSize;
}
function getNbeSize() {
    names.nbeSize = localStorage.getItem('nbeSize');
    if (names.nbeSize == undefined) {
        names.nbeSize = "10";
    }
    return names.nbeSize;
}
function getNbattSize() {
    names.nbattSize = localStorage.getItem('nbattSize');
    if (names.nbattSize == undefined) {
        names.nbattSize = "10";
    }
    return names.nbattSize;
}
function getNbtSize() {
    names.nbtSize = localStorage.getItem('nbtSize');
    if (names.nbtSize == undefined) {
        names.nbtSize = "10";
    }
    return names.nbtSize;
}
function getNbaSize() {
    names.nbaSize = localStorage.getItem('nbaSize');
    if (names.nbaSize == undefined) {
        names.nbaSize = "10";
    }
    return names.nbaSize;
}
function getMoyattSize() {
    names.moyattSize = localStorage.getItem('moyattSize');
    if (names.moyattSize == undefined) {
        names.moyattSize = "10";
    }
    return names.moyattSize;
}
function getMoytSize() {
    names.moytSize = localStorage.getItem('moytSize');
    if (names.moytSize == undefined) {
        names.moytSize = "10";
    }
    return names.moytSize;
}
function getTableSize() {
    names.tableSize = localStorage.getItem('tableSize');
    if (names.tableSize == undefined) {
        names.tableSize = "table-sm";
    }
    return names.tableSize;
}
function getTableBorderStatus() {
    names.tableBorderStatus = localStorage.getItem('tableBorderStatus');
    if (names.tableBorderStatus == undefined) {
        names.tableBorderStatus = "table-borderless";
    }
    return names.tableBorderStatus;
}
function getTableResposiveStatus() {
    names.tableResposiveStatus = localStorage.getItem('tableResposiveStatus');
    if (names.tableResposiveStatus == undefined) {
        names.tableResposiveStatus = "table-resp";
    }
    return names.tableResposiveStatus;
}


// UPDATERS
var updateWeather = function () {
    if (isWeatherEnabled()) {
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + getLocation() + "&units=metric&lang=fr&APPID=37e60bb4041c616c61e2f0534aec11a9", function (data) {
            $("#forcast").html(" - " + Math.round(data.main.temp) + "<small>°C</small> - " + data.name + " - " + '<img class="weatherIcon" src="https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png" alt=""/>' + capitalize(data.weather[0].description));
        });
        console.log("(" + moment().format('HH:mm:ss dddd DD/MM/YYYY') + ") - Weather Updated");
    } else {
        $("#forcast").html("");
    }
};
var updateTables = function (selectedZones) {
    var obj2 = getElementSize();
    var obj3 = getMarginStatus();
    if (obj2 == undefined || obj3 == undefined) {
        alert("la taille des éléments n'est pas sélectionnée...");
        obj2 = "30";
        obj3 = "0";
    } else {
        if (selectedZones) {
            $.getJSON("./api/gettables", {selectedZonesIds: selectedZones.selectedZonesIds}, function (data) {
                $("#main").html("");
                for (var i = 0; i < data.result.length; i++) {
                    var isOnline = data.result[i].isOnline;
                    var rowspan = data.result[i].table.length;
                    if (data.result[i].table.length > 0) {
                        var site = data.result[i].site;
//                        var main = "<div class='col-12 col-md-6 site m-0 " + i + " table-responsive-sm full'  data-rows='" + rowspan + "' data-sites='" + data.result.length + "'>"
                        var main = "<div class=' w-50 p-1 site m-0 " + i + " table-responsive-sm full'  data-rows='" + rowspan + "' data-sites='" + data.result.length + "'>"
                                + "<div class=' p-0 m-0'>"
                                + "<table class='table text-white  " + getTableSize() + " " + getTableBorderStatus() + " " + getTableResposiveStatus() + " table-element m-0'>"
                                + "<thead>"
                                + "<tr class='text-center'>"
                                + "<th scope='col' class='siteColumn'>" + getSiteName() + "</th>"
                                + "<th scope='col' class='serviceColumn'>" + getServiceName() + "</th>"
                                + "<th scope='col' class='nbeColumn'>" + getNbeName() + "</th>" //0
                                + "<th scope='col' class='nbattColumn'>" + getNbattName() + "</th>" //14
                                + "<th scope='col' class='moyattColumn'>" + getMoyattName() + "</th>" //8
                                + "<th scope='col' class='nbtColumn'>" + getNbtName() + "</th>" //1
                                + "<th scope='col' class='moytColumn'>" + getMoytName() + "</th>" //11
                                + "<th scope='col' class='nbaColumn'>" + getNbaName() + "</th>" //2
                                + "</tr>"
                                + "</thead>"
                                + "<tbody>"
                                ;
                        if (data.result[i].table.length > 0) {
                            for (var j = 0; j < data.result[i].table.length; j++) {

                                if (j === 0) {
                                    var row = "<tr class='text-center'>"
                                            + "<th scope='row' class='text-center align-middle siteColumn'>" + getOnlineIcon(isOnline) + site + "</th>"
                                            + "<td class='serviceColumn'>" + data.result[i].table[j].service + "</td>"
                                            + "<td class='nbeColumn'>" + data.result[i].table[j].data[0] + "</td>"
                                            + "<td class='nbattColumn'>" + data.result[i].table[j].data[14] + "</td>"
                                            + "<td class='moyattColumn'>" + data.result[i].table[j].data[8] + "</td>"
                                            + "<td class='nbtColumn'>" + data.result[i].table[j].data[1] + "</td>"
                                            + "<td class='moytColumn'>" + data.result[i].table[j].data[11] + "</td>"
                                            + "<td class='nbaColumn'>" + data.result[i].table[j].data[2] + "</td>"
                                            + "</tr>";
                                    main += row;
                                } else {
                                    var row = "<tr class='text-center'>"
                                            + "<td class='serviceColumn'>" + data.result[i].table[j].service + "</td>"
                                            + "<td class='nbeColumn'>" + data.result[i].table[j].data[0] + "</td>"
                                            + "<td class='nbattColumn'>" + data.result[i].table[j].data[14] + "</td>"
                                            + "<td class='moyattColumn'>" + data.result[i].table[j].data[8] + "</td>"
                                            + "<td class='nbtColumn'>" + data.result[i].table[j].data[1] + "</td>"
                                            + "<td class='moytColumn'>" + data.result[i].table[j].data[11] + "</td>"
                                            + "<td class='nbaColumn'>" + data.result[i].table[j].data[2] + "</td>"
                                            + "</tr>";
                                    main += row;
                                }

                            }
                        } else {
                            var row = "<tr class='text-center'>"
                                    + "<th scope='row' class='text-center align-middle siteColumn'>" + getOnlineIcon(isOnline) + site + "</th>"
                                    + "<td class='serviceColumn'>--</td>"
                                    + "<td class='nbeColumn'>--</td>"
                                    + "<td class='nbattColumn'>--</td>"
                                    + "<td class='moyattColumn'>--</td>"
                                    + "<td class='nbtColumn'>--</td>"
                                    + "<td class='moytColumn'>--</td>"
                                    + "<td class='nbaColumn'>--</td>"
                                    + "</tr>";
                            main += row;
                        }

                        main += "</tbody>"
                                + "</table>"
                                + "</div>"
                                + "</div>";
                        let $main = $(main);
                        // add jQuery object
                        $grid.append($main).masonry('appended', $main);
                        //$("#main").append(main);
                        $("." + i + " table tbody th:first").attr("rowspan", rowspan);
                    }
                }

                for (var i = 0; i < data.result.length; i++) {
                    var isOnline = data.result[i].isOnline;
                    var rowspan = data.result[i].table.length;
                    if (data.result[i].table.length <= 0) {
                        var site = data.result[i].site;
//                        var main = "<div class='col-12 col-md-6 site m-0 " + i + " table-responsive-sm  empty' data-rows='" + rowspan + "' data-sites='" + data.result.length + "'>"
                        var main = "<div class=' w-50 site m-0 p-1 " + i + " table-responsive-sm  empty' data-rows='" + rowspan + "' data-sites='" + data.result.length + "'>"
                                + "<div class=' p-0 m-0'>"
                                + "<table class='table m-0 text-white " + getTableSize() + " " + getTableBorderStatus() + " " + getTableResposiveStatus() + " table-element '>"
                                + "<thead>"
                                + "<tr class='text-center'>"
                                + "<th scope='col' class='siteColumn'>" + getSiteName() + "</th>"
                                + "<th scope='col' class='serviceColumn'>" + getServiceName() + "</th>"
                                + "<th scope='col' class='nbeColumn'>" + getNbeName() + "</th>" //0
                                + "<th scope='col' class='nbattColumn'>" + getNbattName() + "</th>" //14
                                + "<th scope='col' class='moyattColumn'>" + getMoyattName() + "</th>" //8
                                + "<th scope='col' class='nbtColumn'>" + getNbtName() + "</th>" //1
                                + "<th scope='col' class='moytColumn'>" + getMoytName() + "</th>" //11
                                + "<th scope='col' class='nbaColumn'>" + getNbaName() + "</th>" //2
                                + "</tr>"
                                + "</thead>"
                                + "<tbody>"
                                ;
                        if (data.result[i].table.length > 0) {
                            for (var j = 0; j < data.result[i].table.length; j++) {

                                if (j === 0) {
                                    var row = "<tr class='text-center'>"
                                            + "<th scope='row' class='text-center align-middle siteColumn'>" + getOnlineIcon(isOnline) + site + "</th>"
                                            + "<td class='serviceColumn'>" + data.result[i].table[j].service + "</td>"
                                            + "<td class='nbeColumn'>" + data.result[i].table[j].data[0] + "</td>"
                                            + "<td class='nbattColumn'>" + data.result[i].table[j].data[14] + "</td>"
                                            + "<td class='moyattColumn'>" + data.result[i].table[j].data[8] + "</td>"
                                            + "<td class='nbtColumn'>" + data.result[i].table[j].data[1] + "</td>"
                                            + "<td class='moytColumn'>" + data.result[i].table[j].data[11] + "</td>"
                                            + "<td class='nbaColumn'>" + data.result[i].table[j].data[2] + "</td>"
                                            + "</tr>";
                                    main += row;
                                } else {
                                    var row = "<tr class='text-center'>"
                                            + "<td class='serviceColumn'>" + data.result[i].table[j].service + "</td>"
                                            + "<td class='nbeColumn'>" + data.result[i].table[j].data[0] + "</td>"
                                            + "<td class='nbattColumn'>" + data.result[i].table[j].data[14] + "</td>"
                                            + "<td class='moyattColumn'>" + data.result[i].table[j].data[8] + "</td>"
                                            + "<td class='nbtColumn'>" + data.result[i].table[j].data[1] + "</td>"
                                            + "<td class='moytColumn'>" + data.result[i].table[j].data[11] + "</td>"
                                            + "<td class='nbaColumn'>" + data.result[i].table[j].data[2] + "</td>"
                                            + "</tr>";
                                    main += row;
                                }

                            }
                        } else {
                            var row = "<tr class='text-center'>"
                                    + "<th scope='row' class='text-center align-middle siteColumn'>" + getOnlineIcon(isOnline) + site + "</th>"
                                    + "<td class='serviceColumn'>--</td>"
                                    + "<td class='nbeColumn'>--</td>"
                                    + "<td class='nbattColumn'>--</td>"
                                    + "<td class='moyattColumn'>--</td>"
                                    + "<td class='nbtColumn'>--</td>"
                                    + "<td class='moytColumn'>--</td>"
                                    + "<td class='nbaColumn'>--</td>"
                                    + "</tr>";
                            main += row;
                        }

                        main += "</tbody>"
                                + "</table>"
                                + "</div>"
                                + "</div>";
                        let $main2 = $(main);
                        // add jQuery object
                        $grid.append($main2).masonry('appended', $main2);
                        //$("#main").append(main);
                        $("." + i + " table tbody th:first").attr("rowspan", rowspan);
                    }
                }

                //changine size based on number of tables
                if ($(".site").length <= 2) {
                    $(".site").removeClass("col-md-6");
                } else {
                    $(".site").addClass("col-md-6");
                }
                if ($(".full").length < 2) {
                    //$(".full").removeClass("col-md-6");
                }

                //margin
                if ((obj3 === 'true')) {
                    $("tr").removeClass("p-0").removeClass("m-0");
                    $("table").removeClass("p-0").removeClass("m-0");
                    $("tbody *").removeClass("p-0").removeClass("m-0");
                    $("td").removeClass("p-0").removeClass("m-0");
                } else {
                    $("tr").addClass("p-0").addClass("m-0");
                    $("table").addClass("p-0").addClass("m-0");
                    $("tbody *").addClass("p-0").addClass("m-0");
                    $("td").addClass("p-0").addClass("m-0");
                }
                //column sizes
                $(".siteColumn").css("width", getSiteSize() + "%");
                $(".serviceColumn").css("width", getServiceSize() + "%");
                $(".nbeColumn").css("width", getNbeSize() + "%");
                $(".nbattColumn").css("width", getNbattSize() + "%");
                $(".nbtColumn").css("width", getNbtSize() + "%");
                $(".nbaColumn").css("width", getNbaSize() + "%");
                $(".moyattColumn").css("width", getMoyattSize() + "%");
                $(".moytColumn").css("width", getMoytSize() + "%");

                //hide empty tables
                if (getHideEmptyTablesStatus()) {
                    $(".empty").hide();
                }

                $("#main").css("font-size", obj2 + "px");
                $(".site table td").addClass("p-0");
                updateTheme();

                $grid.masonry('reloadItems');
                $grid.masonry();


            }
            );
        } else {
            console.log("ERROR: NO ZONE SELECTED.");
        }



    }

};
var updateTime = function () {
    $("#clock").html(moment().format('HH:mm -'));
    $("#date").html(moment().format(' dddd DD MMM YYYY'));
};
var updateTicker = function () {
    $("#footerText").html(getRollingText());
};
var updateTheme = function () {
    let mode = getTheme();
    $("#footerText").css("color", getRollingTextColor());
    $("#title").css("font-size", getTitleSize() + "px");
    switch (mode) {
        case 'eco':
            $("body").addClass("bg-black");
            $(".table-element tbody tr th").addClass("text-center align-middle ");
            break;
        case 'normal':
            $("body").addClass("bg-dark");
            $(".table-element").addClass("table-bordered table-striped table-light");
            $(".table-element thead").addClass("bg-info text-center align-middle");
            $(".table-element thead").removeClass("table-borderless");
            $(".table-element tbody tr").addClass("border-dark text-dark");
            $(".table-element tbody td").addClass("border-dark   text-dark");
            $(".table-element tbody tr th").addClass("border-dark text-center align-middle text-dark");
            break;
        default:

    }
};
var updateZoneDropdown = function () {
    $.getJSON("./api/getzones", function (data) {
        if (data.result) {
            $(".azone").remove();
            let html = "";
            for (let i = 0; i < data.result.length; i++) {
                html += "<span class='dropdown-item font-weight-bold zone azone'>";
                html += "<input type='checkbox'  class='mr-1 form-check-input check' value='" + data.result[i].id + "' data-name=" + data.result[i].name + "><span class='textSelect' data-id='" + data.result[i].id + "'>" + data.result[i].name + "</span></span>";
            }
            $("#zones").append(html);
            console.log("(" + moment().format('HH:mm:ss dddd DD/MM/YYYY') + ") - ZoneDropdown Updated");
        }
    }).always(function () {
        checkZoneCheckBoxes();
    });
};

// Zone CheckBox
var checkZoneCheckBoxes = function () {
    var selectedZones = JSON.parse(localStorage.getItem("selectedZones"));
    if (selectedZones) {
        var selectedZonesIds = selectedZones.selectedZonesIds;
        updateSelectedZonesDisplay(selectedZones);
        if (selectedZonesIds) {
            $(".check").prop("checked", false);
            for (var i = 0; i < selectedZonesIds.length; i++) {
                $(".check[value='" + selectedZonesIds[i] + "']").prop("checked", true);
            }
        } else {
            $(".check").prop("checked", false);
        }
        if (selectedZonesIds.length === ($(".zone").length - 1)) {
            $("#selectAll").prop("checked", true);
        } else {
            $("#selectAll").prop("checked", false);
        }
    }

};
var getCheckedZones = function () {
    var selectedZones = {};
    var searchIDs = $(".check:checked").map(function () {
        if ($(this).val() !== "on") {
            return $(this).val();
        }

    }).get();
    var selectedZonesNames = $(".check:checked").map(function () {
        if ($(this).val() !== "on") {
            return $(this).attr("data-name");
        }

    }).get();
    selectedZones.selectedZonesIds = searchIDs;
    selectedZones.selectedZonesNames = selectedZonesNames;
    return selectedZones;
};
var getCheckedZonesFromLocalStorage = function () {
    return   JSON.parse(localStorage.getItem("selectedZones"));
};
var updateSelectedZonesDisplay = function (selectedZones) {
    if (selectedZones.selectedZonesNames.length > 0) {
        $("#selectedZonesDisplay").html("");
        selectedZones.selectedZonesNames.forEach(function (entry) {
            let html = "<span class='badge badge-pill badge-light mx-1'>" + entry + "</span>";
            $("#selectedZonesDisplay").append(html);
        });
    } else {
        $("#selectedZonesDisplay").html("-");
    }
};
var updateZones = function () {
    let selectedZones = getCheckedZones();
    localStorage.setItem("selectedZones", JSON.stringify(selectedZones));
    updateSelectedZonesDisplay(selectedZones);
    checkZoneCheckBoxes();
    updateTables(selectedZones);
};

 
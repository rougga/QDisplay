let config = {};
let names = {};
const  APP = "QData";
let $grid;
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
moment.locale('fr', {
    months: 'Janvier_Février_Mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort: 'Janv._Févr._Mars_Avr._Mai_Juin_Juil._Août_Sept._Oct._Nov._Déc.'.split('_'),
    monthsParseExact: true,
    weekdays: 'Dimanche_Lundi_Mardi_Mercredi_Jeudi_Vendredi_Samedi'.split('_'),
    weekdaysShort: 'Dim._Lun._Mar._Mer._Jeu._Ven._Sam.'.split('_'),
    weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Aujourd’hui à] LT',
        nextDay: '[Demain à] LT',
        nextWeek: 'dddd [à] LT',
        lastDay: '[Hier à] LT',
        lastWeek: 'dddd [dernier à] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'dans %s',
        past: 'il y a %s',
        s: 'quelques secondes',
        m: 'une minute',
        mm: '%d minutes',
        h: 'une heure',
        hh: '%d heures',
        d: 'un jour',
        dd: '%d jours',
        M: 'un mois',
        MM: '%d mois',
        y: 'un an',
        yy: '%d ans'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
    ordinal: function (number) {
        return number + (number === 1 ? 'er' : 'e');
    },
    meridiemParse: /PD|MD/,
    isPM: function (input) {
        return input.charAt(0) === 'M';
    },
    // In case the meridiem units are not separated around 12, then implement
    // this function (look at locale/id.js for an example).
    // meridiemHour : function (hour, meridiem) {
    //     return /* 0-23 hour, given meridiem token and hour 1-12 */ ;
    // },
    meridiem: function (hours, minutes, isLower) {
        return hours < 12 ? 'PD' : 'MD';
    },
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4  // Used to determine first week of the year.
    }
});

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
function getTableRefreshTime() {
    config.tableRefreshTime = localStorage.getItem('tableRefreshTime');
    if (config.tableRefreshTime == undefined) {
        config.tableRefreshTime = "30";
    }
    return config.tableRefreshTime;
}
function isOnlineTest(agenceId) {
    console.log("agence sid = ", agenceId);
    $.get("/" + APP + "/GetAgenceStatus", {id: agenceId}, function (data) {
        if (data) {
            return data.status;
        } else {
            console.log("isOnlineTest: error testing agence status");
            return "false";
        }
    });
}
function getOnlineIcon(isOnline) {
    if (isOnline) {
        return "<img src='./img/icon/online.png' class='pr-1' />";
    } else {
        return "<img src='./img/icon/offline.png' class='pr-1' />";
    }
}
function getTheme() {
    config.mode = localStorage.getItem('mode');
    if (config.mode == undefined) {
        config.mode = "normal";
    }
    return config.mode;
}
function getFormatedTimeFromSeconds(seconds) {
    let formatedTime = "00:00:00";
    if (seconds && seconds > 0) {
        formatedTime = moment.utc(seconds * 1000).format('HH:mm:ss');
    }
    return formatedTime;
}

//names
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
function getTitleSize() {
    config.titleSize = localStorage.getItem('titleSize');
    if (config.titleSize == undefined) {
        config.titleSize = "36";
    }
    return config.titleSize;
}
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

//status
function getHideEmptyTablesStatus() {
    config.hideEmptyTables = localStorage.getItem('hideEmptyTables');
    if (config.hideEmptyTables == undefined) {
        config.hideEmptyTables = "false";
    }
    return (config.hideEmptyTables.toLowerCase() === 'true');
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
        names.tableResposiveStatus = "";
    }
    return names.tableResposiveStatus;
}

//
function addTable(data) {
    data.forEach((agence, index1) => {
        if (index1 === (data.length - 1)) {
            return;
        }
        let services = agence.services;
        let agenceName = agence.agence_name;
        let agenceId = agence.id_agence;
        let isOnline = isOnlineTest(agenceId);
        let rowspan = services.length;
        let main = "<div class=' w-50 p-1 site m-0 " + index1 + " table-responsive-sm full'  data-rows='" + rowspan + "' data-sites='" + data.length + "' data-id_zone=''>"
                + "<div class=' p-0 m-0'>"
                + "<table class='table text-white  " + getTableSize() + " " + getTableBorderStatus() + " " + getTableResposiveStatus() + " table-element m-0'>"
                + "<thead>"
                + "<tr class='text-center'>"
                + "<th scope='col' class='siteColumn text-wrap'>" + getSiteName() + "</th>"
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
        services.forEach((service, index2) => {
            if (index2 === 0) {
                let row = "<tr class='text-center'>"
                        + "<th scope='row' class='text-center align-middle siteColumn text-wrap'>" + getOnlineIcon(isOnline) + agenceName + "</th>"
                        + "<td class='serviceColumn'>" + service.serviceName + "</td>"
                        + "<td class='nbeColumn'>" + service.nbT + "</td>"
                        + "<td class='nbattColumn'>" + service.nbSa + "</td>"
                        + "<td class='moyattColumn'>" + getFormatedTimeFromSeconds(service.avgSecA) + "</td>"
                        + "<td class='nbtColumn'>" + service.nbTt + "</td>"
                        + "<td class='moytColumn'>" + getFormatedTimeFromSeconds(service.avgSecT) + "</td>"
                        + "<td class='nbaColumn'>" + service.nbA + "</td>"
                        + "</tr>";
                main += row;
            } else if (index2 < rowspan - 1) {
                let row = "<tr class='text-center'>"
                        + "<td class='serviceColumn'>" + service.serviceName + "</td>"
                        + "<td class='nbeColumn'>" + service.nbT + "</td>"
                        + "<td class='nbattColumn'>" + service.nbSa + "</td>"
                        + "<td class='moyattColumn'>" + getFormatedTimeFromSeconds(service.avgSecA) + "</td>"
                        + "<td class='nbtColumn'>" + service.nbTt + "</td>"
                        + "<td class='moytColumn'>" + getFormatedTimeFromSeconds(service.avgSecT) + "</td>"
                        + "<td class='nbaColumn'>" + service.nbA + "</td>"
                        + "</tr>";
                main += row;
            }
        });

        main += "</tbody>"
                + "</table>"
                + "</div>"
                + "</div>";
        let $main = $(main);
        // add jQuery object
        $grid.append($main).masonry('appended', $main);
        //$("#main").append(main);
        $("." + index1 + " table tbody th:first").attr("rowspan", rowspan);

    });
}

// UPDATERS
let updateWeather = function () {
    if (isWeatherEnabled()) {
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + getLocation() + "&units=metric&lang=fr&APPID=37e60bb4041c616c61e2f0534aec11a9", function (data) {
            $("#forcast").html(" - " + Math.round(data.main.temp) + "<small>°C</small> - " + data.name + " - " + '<img class="weatherIcon" src="https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png" alt=""/>' + capitalize(data.weather[0].description));
        });
        console.log("(" + moment().format('HH:mm:ss dddd DD/MM/YYYY') + ") - Weather Updated");
    } else {
        $("#forcast").html("");
    }
};
let updateTables = function (selectedZones) {
    let obj2 = getElementSize();
    let obj3 = getMarginStatus();
    if (obj2 == undefined || obj3 == undefined) {
        alert("la taille des éléments n'est pas sélectionnée...");
        obj2 = "30";
        obj3 = "0";
    } else {
        let url = "/" + APP + "/api/gbl";
//        selectedZones = {};
//        selectedZones.selectedZonesIds = ["ddddd"];
        if (selectedZones) {
            $.get(url, selectedZones, function (data) {
                console.log(data);
                $("#main").html("");
                addTable(data);
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
                    $("th").removeClass("p-0").removeClass("m-0");
                    $("td").removeClass("p-0").removeClass("m-0");
                } else {
                    $("tr").addClass("p-0").addClass("m-0");
                    $("table").addClass("p-0").addClass("m-0");
                    $("tbody ").addClass("p-0").addClass("m-0");
                    // $("th").addClass("p-0").addClass("m-0");
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
                reorderTables();
            });
        } else {
            console.log("ERROR: NO ZONE SELECTED.");
        }



    }

};
let updateTime = function () {
    $("#clock").html(moment().format('HH:mm -'));
    $("#date").html(moment().format(' dddd DD MMM YYYY'));
};
let updateTicker = function () {
    $("#footerText").html(getRollingText());
};
let updateTheme = function () {
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
let updateZoneDropdown = function () {
    $.getJSON("/QData/api/zones", function (data) {
        if (data) {
            $(".azone").remove();
            let html = "";
            data.forEach((zone) => {
                html += "<span class='dropdown-item font-weight-bold zone azone'>";
                html += "<input type='checkbox'  class='mr-1 form-check-input check' value='" + zone.id + "' data-name='" + zone.name + "''><span class='textSelect' data-id='" + zone.id + "'>" + zone.name + "</span></span>";
            });
            $("#zones").append(html);
            console.log("(" + moment().format('HH:mm:ss dddd DD/MM/YYYY') + ") - ZoneDropdown Updated");
        }
    }).always(function () {
        checkZoneCheckBoxes();
    });
};
let reorderTables = function () {
    let $allTables = $(".site");
    //console.log($allTables);
};
// Zone CheckBox
let checkZoneCheckBoxes = function () {
    let selectedZones = JSON.parse(localStorage.getItem("selectedZones"));
    if (selectedZones) {
        let selectedZonesIds = selectedZones.selectedZonesIds;
        updateSelectedZonesDisplay(selectedZones);
        if (selectedZonesIds) {
            $(".check").prop("checked", false);
            for (let i = 0; i < selectedZonesIds.length; i++) {
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
let getCheckedZones = function () {
    let selectedZones = {};
    let searchIDs = $(".check:checked").map(function () {
        if ($(this).val() !== "on") {
            return $(this).val();
        }

    }).get();
    let selectedZonesNames = $(".check:checked").map(function () {
        if ($(this).val() !== "on") {
            return $(this).attr("data-name");
        }

    }).get();
    selectedZones.selectedZonesIds = searchIDs;
    selectedZones.selectedZonesNames = selectedZonesNames;
    return selectedZones;
};
let getCheckedZonesFromLocalStorage = function () {
    return   JSON.parse(localStorage.getItem("selectedZones"));
};
let updateSelectedZonesDisplay = function (selectedZones) {
    console.log(selectedZones);
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
let updateZones = function () {
    let selectedZones = getCheckedZones();
    localStorage.setItem("selectedZones", JSON.stringify(selectedZones));
    updateSelectedZonesDisplay(selectedZones);
    checkZoneCheckBoxes();
    updateTables(selectedZones);
};

 
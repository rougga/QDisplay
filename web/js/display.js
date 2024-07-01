
$(document).ready(function () {
    let config = {};
    let names = {};
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
    $("#main").on('click', function () {
        toggleFullScreen(document.body);
    });
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
            config.textColor = "#000000";
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
            names.moyattName = "Mo. Att";
        }
        return names.moyattName;
    }
    function getMoytName() {
        names.moytName = localStorage.getItem('moytName');
        if (names.moytName == undefined) {
            names.moytName = "Mo. Trai";
        }
        return names.moytName;
    }

    function getSiteSize() {
        names.siteSize = localStorage.getItem('siteSize');
        if (names.siteSize == undefined) {
            names.siteSize = "Site";
        }
        return names.siteSize;
    }
    function getServiceSize() {
        names.serviceSize = localStorage.getItem('serviceSize');
        if (names.serviceSize == undefined) {
            names.serviceSize = "Service";
        }
        return names.serviceSize;
    }
    function getNbeSize() {
        names.nbeSize = localStorage.getItem('nbeSize');
        if (names.nbeSize == undefined) {
            names.nbeSize = "Nb. É";
        }
        return names.nbeSize;
    }
    function getNbattSize() {
        names.nbattSize = localStorage.getItem('nbattSize');
        if (names.nbattSize == undefined) {
            names.nbattSize = "Nb. Att";
        }
        return names.nbattSize;
    }
    function getNbtSize() {
        names.nbtSize = localStorage.getItem('nbtSize');
        if (names.nbtSize == undefined) {
            names.nbtSize = "Nb. T";
        }
        return names.nbtSize;
    }
    function getNbaSize() {
        names.nbaSize = localStorage.getItem('nbaSize');
        if (names.nbaSize == undefined) {
            names.nbaSize = "Nb. A";
        }
        return names.nbaSize;
    }
    function getMoyattSize() {
        names.moyattSize = localStorage.getItem('moyattSize');
        if (names.moyattSize == undefined) {
            names.moyattSize = "Mo. Att";
        }
        return names.moyattSize;
    }
    function getMoytSize() {
        names.moytSize = localStorage.getItem('moytSize');
        if (names.moytSize == undefined) {
            names.moytSize = "Mo. Trai";
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
    var getWeather = function () {
        if (isWeatherEnabled()) {
            $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + getLocation() + "&units=metric&lang=fr&APPID=37e60bb4041c616c61e2f0534aec11a9", function (data) {
                $("#forcast").html(" - " + Math.round(data.main.temp) + "<small>°C</small> - " + data.name + " - " + '<img class="weatherIcon" src="https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png" alt=""/>' + capitalize(data.weather[0].description));
            });
            console.log("Weather Updated.");
        } else {
            $("#forcast").html("");
        }
    };
    var updateTables = function () {
        var obj2 = getElementSize();
        var obj3 = getMarginStatus();
        if (obj2 == undefined || obj3 == undefined) {
            alert("la taille des éléments n'est pas sélectionnée...");
            obj2 = "30";
            obj3 = "0";
        } else {
            $.getJSON("./api/gettables", function (data) {
                $("#main").html("");
                for (var i = 0; i < data.result.length; i++) {
                    var isOnline = data.result[i].isOnline;
                    var rowspan = data.result[i].table.length;
                    if (data.result[i].table.length > 0) {
                        var site = data.result[i].site;
                        var main = "<div class='col-12 col-md-6 site m-0 " + i + " table-responsive-sm full' data-rows='" + rowspan + "' data-sites='" + data.result.length + "'>"
                                + "<table class='table text-white " + getTableSize() + " " + getTableBorderStatus() + " " + getTableResposiveStatus() + " table-element'>"
                                + "<thead>"
                                + "<tr>"
                                + "<th scope='col' class='siteColumn'>" + getSiteName() + "</th>"
                                + "<th scope='col' class='serviceColumn'>" + getServiceName() + "</th>"
                                + "<th scope='col' class='nbeColumn'>" + getNbeName() + "</th>"
                                + "<th scope='col' class='nbattColumn'>" + getNbattName() + "</th>"
                                + "<th scope='col' class='nbtColumn'>" + getNbtName() + "</th>"
                                + "<th scope='col' class='nbaColumn'>" + getNbaName() + "</th>"
                                + "<th scope='col' class='moyattColumn'>" + getMoyattName() + "</th>"
                                + "<th scope='col' class='moytColumn'>" + getMoytName() + "</th>"
                                + "</tr>"
                                + "</thead>"
                                + "<tbody>"
                                ;
                        if (data.result[i].table.length > 0) {
                            for (var j = 0; j < data.result[i].table.length; j++) {

                                if (j === 0) {
                                    var row = "<tr>"
                                            + "<th scope='row' class='text-center align-middle siteColumn'>" + getOnlineIcon(isOnline) + site + "</th>"
                                            + "<td class='serviceColumn'>" + data.result[i].table[j].service + "</td>"
                                            + "<td class='nbeColumn'>" + data.result[i].table[j].data[0] + "</td>"
                                            + "<td class='nbattColumn'>" + data.result[i].table[j].data[14] + "</td>"
                                            + "<td class='nbtColumn'>" + data.result[i].table[j].data[1] + "</td>"
                                            + "<td class='nbaColumn'>" + data.result[i].table[j].data[2] + "</td>"
                                            + "<td class='moyattColumn'>" + data.result[i].table[j].data[8] + "</td>"
                                            + "<td class='moytColumn'>" + data.result[i].table[j].data[11] + "</td>"
                                            + "</tr>";
                                    main += row;
                                } else {
                                    var row = "<tr>"
                                            + "<td class='serviceColumn'>" + data.result[i].table[j].service + "</td>"
                                            + "<td class='nbeColumn'>" + data.result[i].table[j].data[0] + "</td>"
                                            + "<td class='nbattColumn'>" + data.result[i].table[j].data[14] + "</td>"
                                            + "<td class='nbtColumn'>" + data.result[i].table[j].data[1] + "</td>"
                                            + "<td class='nbaColumn'>" + data.result[i].table[j].data[2] + "</td>"
                                            + "<td class='moyattColumn'>" + data.result[i].table[j].data[8] + "</td>"
                                            + "<td class='moytColumn'>" + data.result[i].table[j].data[11] + "</td>"
                                            + "</tr>";
                                    main += row;
                                }

                            }
                        } else {
                            var row = "<tr>"
                                    + "<th scope='row' class='text-center align-middle siteColumn'>" + getOnlineIcon(isOnline) + site + "</th>"
                                    + "<td class='serviceColumn'>--</td>"
                                    + "<td class='nbeColumn'>--</td>"
                                    + "<td class='nbattColumn'>--</td>"
                                    + "<td class='nbtColumn'>--</td>"
                                    + "<td class='nbaColumn'>--</td>"
                                    + "<td class='moyattColumn'>--</td>"
                                    + "<td class='moytColumn'>--</td>"
                                    + "</tr>";
                            main += row;
                        }

                        main += "</tbody>"
                                + "</table>"
                                + "</div>";
                        $("#main").append(main);
                        $("." + i + " table tbody th:first").attr("rowspan", rowspan);
                    }
                }

                for (var i = 0; i < data.result.length; i++) {
                    var isOnline = data.result[i].isOnline;
                    var rowspan = data.result[i].table.length;
                    if (data.result[i].table.length <= 0) {
                        var site = data.result[i].site;
                        var main = "<div class='col-12 col-md-6 site m-0 " + i + " table-responsive-sm empty' data-rows='" + rowspan + "' data-sites='" + data.result.length + "'>"
                                + "<table class='table text-white " + getTableSize() + " " + getTableBorderStatus() + " " + getTableResposiveStatus() + " table-element'>"
                                + "<thead>"
                                + "<tr>"
                                + "<th scope='col' class='siteColumn'>" + getSiteName() + "</th>"
                                + "<th scope='col' class='serviceColumn'>" + getServiceName() + "</th>"
                                + "<th scope='col' class='nbeColumn'>" + getNbeName() + "</th>"
                                + "<th scope='col' class='nbattColumn'>" + getNbattName() + "</th>"
                                + "<th scope='col' class='nbtColumn'>" + getNbtName() + "</th>"
                                + "<th scope='col' class='nbaColumn'>" + getNbaName() + "</th>"
                                + "<th scope='col' class='moyattColumn'>" + getMoyattName() + "</th>"
                                + "<th scope='col' class='moytColumn'>" + getMoytName() + "</th>"
                                + "</tr>"
                                + "</thead>"
                                + "<tbody>"
                                ;
                        if (data.result[i].table.length > 0) {
                            for (var j = 0; j < data.result[i].table.length; j++) {

                                if (j === 0) {
                                    var row = "<tr>"
                                            + "<th scope='row' class='text-center align-middle siteColumn'>" + getOnlineIcon(isOnline) + site + "</th>"
                                            + "<td class='serviceColumn'>" + data.result[i].table[j].service + "</td>"
                                            + "<td class='nbeColumn'>" + data.result[i].table[j].data[0] + "</td>"
                                            + "<td class='nbattColumn'>" + data.result[i].table[j].data[14] + "</td>"
                                            + "<td class='nbtColumn'>" + data.result[i].table[j].data[1] + "</td>"
                                            + "<td class='nbaColumn'>" + data.result[i].table[j].data[2] + "</td>"
                                            + "<td class='moyattColumn'>" + data.result[i].table[j].data[8] + "</td>"
                                            + "<td class='moytColumn'>" + data.result[i].table[j].data[11] + "</td>"
                                            + "</tr>";
                                    main += row;
                                } else {
                                    var row = "<tr>"
                                            + "<td class='serviceColumn'>" + data.result[i].table[j].service + "</td>"
                                            + "<td class='nbeColumn'>" + data.result[i].table[j].data[0] + "</td>"
                                            + "<td class='nbattColumn'>" + data.result[i].table[j].data[14] + "</td>"
                                            + "<td class='nbtColumn'>" + data.result[i].table[j].data[1] + "</td>"
                                            + "<td class='nbaColumn'>" + data.result[i].table[j].data[2] + "</td>"
                                            + "<td class='moyattColumn'>" + data.result[i].table[j].data[8] + "</td>"
                                            + "<td class='moytColumn'>" + data.result[i].table[j].data[11] + "</td>"
                                            + "</tr>";
                                    main += row;
                                }

                            }
                        } else {
                            var row = "<tr>"
                                    + "<th scope='row' class='text-center align-middle siteColumn'>" + getOnlineIcon(isOnline) + site + "</th>"
                                    + "<td class='serviceColumn'>--</td>"
                                    + "<td class='nbeColumn'>--</td>"
                                    + "<td class='nbattColumn'>--</td>"
                                    + "<td class='nbtColumn'>--</td>"
                                    + "<td class='nbaColumn'>--</td>"
                                    + "<td class='moyattColumn'>--</td>"
                                    + "<td class='moytColumn'>--</td>"
                                    + "</tr>";
                            main += row;
                        }

                        main += "</tbody>"
                                + "</table>"
                                + "</div>";
                        $("#main").append(main);
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
                if(getHideEmptyTablesStatus()){
                    $(".empty").hide();
                }
                
                $("#main").css("font-size", obj2 + "px");
                $(".site table td").addClass("p-0");

                updateTheme();
            }
            );
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
                $(".table-element tbody tr").addClass("border-dark text-left  text-dark");
                $(".table-element tbody tr th").addClass("border-dark text-center align-middle text-dark");
                break;
            default:

        }
    };
    getWeather();
    updateTables();
    updateTicker();
    updateTheme();
    setInterval(function () {
        getWeather();
        updateTables();
        updateTicker();
        updateTheme();
        console.log("Updated (" + moment().format('HH:mm:ss dddd DD/MM/YYYY') + ").");
    }, getTableRefreshTime() * 1000);
});
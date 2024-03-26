
$(document).ready(function () {
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



    var getWeather = function () {
        var obj = localStorage.getItem('location');
        if (obj == undefined) {
            alert("la ville n'est pas sélectionnée...");
            openSettingModal();
        } else {
            $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + obj + "&units=metric&lang=fr&APPID=37e60bb4041c616c61e2f0534aec11a9", function (data) {
                $("#forcast").html(" - " + Math.round(data.main.temp) + "<small>°C</small> - " + data.name + " - " + '<img class="weatherIcon" src="https://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png" alt=""/>' + capitalize(data.weather[0].description));
            });
        }


    };

    var getOnlineIcon = function (isOnline) {
        if (isOnline) {
            return "<img src='./img/icon/online.png' class='pr-1' />";
        } else {
            return "<img src='./img/icon/offline.png' class='pr-1' />";
        }
    };

    var updateTables = function () {
        var obj2 = localStorage.getItem('size');
        var obj3 = localStorage.getItem('margin');
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
                                + "<table class='table text-white table-sm table-borderless table-resp table-element'>"
                                + "<thead>"
                                + "<tr>"
                                + "<th scope='col'>Site</th>"
                                + "<th scope='col'>Service</th>"
                                + "<th scope='col'>Nb. É</th>"
                                + "<th scope='col'>Nb. Att</th>"
                                + "<th scope='col'>Nb. T</th>"
                                + "<th scope='col'>Nb. A</th>"
                                + "<th scope='col'>>Mo. Att</th>"
                                + "<th scope='col'>>Mo. Trai</th>"
                                + "</tr>"
                                + "</thead>"
                                + "<tbody>"
                                ;
                        if (data.result[i].table.length > 0) {
                            for (var j = 0; j < data.result[i].table.length; j++) {

                                if (j === 0) {
                                    var row = "<tr>"
                                            + "<th scope='row' class='text-center align-middle'>" + getOnlineIcon(isOnline) + site + "</th>"
                                            + "<td>" + data.result[i].table[j].service + "</td>"
                                            + "<td>" + data.result[i].table[j].data[0] + "</td>"
                                            + "<td>" + data.result[i].table[j].data[14] + "</td>"
                                            + "<td>" + data.result[i].table[j].data[1] + "</td>"
                                            + "<td>" + data.result[i].table[j].data[2] + "</td>"
                                            + "<td>" + data.result[i].table[j].data[8] + "</td>"
                                            + "<td>" + data.result[i].table[j].data[11] + "</td>"
                                            + "</tr>";
                                    main += row;
                                } else {
                                    var row = "<tr>"
                                            + "<td>" + data.result[i].table[j].service + "</td>"
                                            + "<td>" + data.result[i].table[j].data[0] + "</td>"
                                            + "<td>" + data.result[i].table[j].data[14] + "</td>"
                                            + "<td>" + data.result[i].table[j].data[1] + "</td>"
                                            + "<td>" + data.result[i].table[j].data[2] + "</td>"
                                            + "<td>" + data.result[i].table[j].data[8] + "</td>"
                                            + "<td>" + data.result[i].table[j].data[11] + "</td>"
                                            + "</tr>";
                                    main += row;
                                }

                            }
                        } else {
                            var row = "<tr>"
                                    + "<th scope='row' class='text-center align-middle'>" + getOnlineIcon(isOnline) + site + "</th>"
                                    + "<td>--</td>"
                                    + "<td>--</td>"
                                    + "<td>--</td>"
                                    + "<td>--</td>"
                                    + "<td>--</td>"
                                    + "<td>--</td>"
                                    + "<td>--</td>"
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
                                + "<table class='table text-white table-sm table-borderless table-resp table-element'>"
                                + "<thead>"
                                + "<tr>"
                                + "<th scope='col'>Site</th>"
                                + "<th scope='col'>Service</th>"
                                + "<th scope='col'>Nb. É</th>"
                                + "<th scope='col'>Nb. Att</th>"
                                + "<th scope='col'>Nb. T</th>"
                                + "<th scope='col'>Nb. A</th>"
                                + "<th scope='col'>Mo. Att</th>"
                                + "<th scope='col'>Mo. Trai</th>"
                                + "</tr>"
                                + "</thead>"
                                + "<tbody>"
                                ;
                        if (data.result[i].table.length > 0) {
                            for (var j = 0; j < data.result[i].table.length; j++) {

                                if (j === 0) {
                                    var row = "<tr>"
                                            + "<th scope='row' class='text-center align-middle'>" + getOnlineIcon(isOnline) + site + "</th>"
                                            + "<td>" + data.result[i].table[j].service + "</td>"
                                            + "<td>" + data.result[i].table[j].data[0] + "</td>"
                                            + "<td>" + data.result[i].table[j].data[14] + "</td>"
                                            + "<td>" + data.result[i].table[j].data[1] + "</td>"
                                            + "<td>" + data.result[i].table[j].data[2] + "</td>"
                                            + "<td>" + data.result[i].table[j].data[8] + "</td>"
                                            + "<td>" + data.result[i].table[j].data[11] + "</td>"
                                            + "</tr>";
                                    main += row;
                                } else {
                                    var row = "<tr>"
                                            + "<td>" + data.result[i].table[j].service + "</td>"
                                            + "<td>" + data.result[i].table[j].data[0] + "</td>"
                                            + "<td>" + data.result[i].table[j].data[14] + "</td>"
                                            + "<td>" + data.result[i].table[j].data[1] + "</td>"
                                            + "<td>" + data.result[i].table[j].data[2] + "</td>"
                                            + "<td>" + data.result[i].table[j].data[8] + "</td>"
                                            + "<td>" + data.result[i].table[j].data[11] + "</td>"
                                            + "</tr>";
                                    main += row;
                                }

                            }
                        } else {
                            var row = "<tr>"
                                    + "<th scope='row' class='text-center align-middle'>" + getOnlineIcon(isOnline) + site + "</th>"
                                    + "<td>--</td>"
                                    + "<td>--</td>"
                                    + "<td>--</td>"
                                    + "<td>--</td>"
                                    + "<td>--</td>"
                                    + "<td>--</td>"
                                    + "<td>--</td>"
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


                if ($(".site").length <= 2) {
                    $(".site").removeClass("col-md-6");
                } else {
                    $(".site").addClass("col-md-6");
                }
                if ($(".full").length < 2) {
                    //$(".full").removeClass("col-md-6");
                }
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
                $("#main").css("font-size", obj2 + "px");
                $(".site table td").addClass("p-0");
                console.log("Table updated !!");
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
        $("#footerText").html(localStorage.getItem('text'));
    };

    var updateTheme = function () {
        let mode = localStorage.getItem('mode');

        switch (mode) {
            case 'eco':
                $("body").addClass("bg-black");
                $(".table-element tbody tr th").addClass("text-center align-middle ");
                console.log("Theme updated !!");
                break;

            case 'normal':
                $("body").addClass("bg-dark");
                $(".table-element").addClass("table-bordered table-striped table-light");
                $(".table-element thead").addClass("bg-info text-center align-middle");
                $(".table-element thead").removeClass("table-borderless");
                $(".table-element tbody tr").addClass("border-dark text-left  text-dark");
                $(".table-element tbody tr th").addClass("border-dark text-center align-middle text-dark");
                console.log("Theme updated !!");
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
    }, 30000);
});
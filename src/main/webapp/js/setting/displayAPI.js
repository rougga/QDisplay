
let config = {};
function getLocation() {
    config.location = localStorage.getItem('location');
    if (config.location == undefined) {
        config.location = "Casablanca,Morocco";
    }
    return config.location;
}

var getOnlineIcon = function (isOnline) {
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
function getRollingText() {
    config.text = localStorage.getItem('text');
    if (config.text == undefined) {
        config.text = "";
    }
    return config.text;
}
function getTheme() {
    config.mode = localStorage.getItem('mode');
    if (config.mode == undefined) {
        config.mode = "eco";
    }
    return config.mode;
}


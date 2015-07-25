define(["require", "exports"], function (require, exports) {
    (function (IconSet) {
        IconSet[IconSet["ColorLight"] = 0] = "ColorLight";
        IconSet[IconSet["IconIon"] = 1] = "IconIon";
        IconSet[IconSet["IconDev"] = 2] = "IconDev"; // Devicons
    })(exports.IconSet || (exports.IconSet = {}));
    var IconSet = exports.IconSet;
    function getColorSet(name) {
        return IconSet.ColorLight;
    }
    exports.getColorSet = getColorSet;
    function getIconSet(name) {
        switch (name.toLowerCase()) {
            case 'dev':
            case 'devicons':
                return IconSet.IconDev;
            default:
                return IconSet.IconIon;
        }
    }
    exports.getIconSet = getIconSet;
});

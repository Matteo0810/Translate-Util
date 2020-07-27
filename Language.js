"use strict";
exports.__esModule = true;
exports.Language = void 0;
var fs = require("fs");
var Language = /** @class */ (function () {
    function Language(lang) {
        this.content = JSON.parse(Buffer.from(fs.readFileSync("./langs/" + lang + ".json")).toString());
        this.lang = lang;
    }
    /**
     * @param key key name
     * @param value value of key
     * @description set key with value
     */
    Language.prototype.set = function (key, value) {
        this.content[key.toString()] = value;
        this.update();
    };
    /**
     * @param key
     * @return return if key is contains
     * @description verify if key exists
     */
    Language.prototype.contains = function (key) {
        return this.get(key) == null;
    };
    /**
     * @param key
     * @description remove key
     */
    Language.prototype.remove = function (key) {
        delete this.content[key.toString()];
        this.update();
    };
    /**
     * @param key key you want to get
     * @description get key from lang file
     */
    Language.prototype.get = function (key) {
        for (var i in this.content) {
            var j = key[i];
            if (j === key)
                return j;
        }
        return null;
    };
    Language.prototype.update = function () {
        fs.writeFile("./langs/" + this.lang + ".json", JSON.stringify(this.content), function (err) {
            if (err)
                return console.error(err);
        });
    };
    return Language;
}());
exports.Language = Language;

import { Language } from "./Language";
import * as fs from 'fs';

/**
 * @param {String} langName language name, you can put nothing they will put the default config langage (EN)
 * @return {Language} Language return the Language class
 */
function getLang(langName: String = undefined) {
    let lang = langName;
    if(!lang) lang = "en";
    return new Language(lang);
}

/**
 * @param {String} langName put language name
 * @return {Boolean} return if file exists
 */
function langExist(langName: String) {
    try {
        const file = fs.readFileSync(`./langs/${langName}.json`, { encoding: "utf8" });
        return file !== null;
    } catch(error) {
        console.error(error);
    }
}

/**
 * @param langName lang you want to delete
 * @description delete language
 */
function delLang(langName: String) {
    fs.unlink(`./langs/${langName}.json`, err => {
        if(err) return console.error(err)
    })
}

/**
 * @param langName name of the file
 */
function createLangConfig(langName: String) {
    if(!langName) return console.error('Please, enter langName to create the file config.')
    fs.appendFile(`./langs/${langName}.json`, '{}', err => {
        if(err) return console.error(err)
    });
}

export = { getLang, langExist, createLangConfig, delLang };

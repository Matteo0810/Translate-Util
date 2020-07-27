import * as fs from 'fs';

export class Language {

    private readonly content: Object;
    private readonly lang: String;

    constructor(lang: String) {
        this.content = JSON.parse(Buffer.from(fs.readFileSync(`./langs/${lang}.json`)).toString());
        this.lang = lang;
    }

    /**
     * @param key key name
     * @param value value of key
     * @description set key with value
     */
    public set(key: String, value: Object) {
        this.content[key.toString()] = value;
        this.update();
    }

    /**
     * @param key
     * @return return if key is contains
     * @description verify if key exists
     */
    public contains(key: String) {
        return this.get(key) == null;
    }

    /**
     * @param key
     * @description remove key
     */
    public remove(key: String) {
        delete this.content[key.toString()];
        this.update();
    }

    /**
     * @param key key you want to get
     * @description get key from lang file
     */
    public get(key: String) {
        for(const i in this.content) {
            const j : Object = key[i];
            if(j === key) return j;
        }
        return null;
    }

    private update() {
        fs.writeFile(`./langs/${this.lang}.json`, JSON.stringify(this.content), err => {
            if(err) return console.error(err)
        });
    }

}
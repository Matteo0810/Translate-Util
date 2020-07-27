// @ts-ignore
import * as index from './index.ts'; //import index file

index.createLangConfig("test"); //create json file in langs dir : langs/test.json

setTimeout(() => {
    const lang = index.getLang("test");
    lang.set("key", "value") //set key: value

    setTimeout(() => {
        lang.get("key") //get value

        setTimeout(() => {
            lang.remove("key") //remove key
        }, 1e3);
    }, 1e3);
}, 1e3);

//index.delLang("test"); you can delete lang.
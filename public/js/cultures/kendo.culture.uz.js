/*
* Kendo UI Mobile v2013.2.918 (http://kendoui.com)
* Copyright 2013 Telerik AD. All rights reserved.
*
* Kendo UI Mobile commercial licenses may be obtained at
* https://www.kendoui.com/purchase/license-agreement/kendo-ui-mobile-commercial.aspx
* If you do not own a commercial license, this file shall be governed by the trial license terms.
*/
﻿(function( window, undefined ) {
    kendo.cultures["uz"] = {
        name: "uz",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": " ",
            ".": ",",
            groupSize: [3],
            percent: {
                pattern: ["-n%","n%"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                pattern: ["-n $","n $"],
                decimals: 0,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "so'm"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["yakshanba","dushanba","seshanba","chorshanba","payshanba","juma","shanba"],
                    namesAbbr: ["yak.","dsh.","sesh.","chr.","psh.","jm.","sh."],
                    namesShort: ["ya","d","s","ch","p","j","sh"]
                },
                months: {
                    names: ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentyabr","oktyabr","noyabr","dekabr",""],
                    namesAbbr: ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentyabr","oktyabr","noyabr","dekabr",""]
                },
                AM: [""],
                PM: [""],
                patterns: {
                    d: "dd/MM yyyy",
                    D: "yyyy 'yil' d-MMMM",
                    F: "yyyy 'yil' d-MMMM HH:mm:ss",
                    g: "dd/MM yyyy HH:mm",
                    G: "dd/MM yyyy HH:mm:ss",
                    m: "d-MMMM",
                    M: "d-MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM yyyy",
                    Y: "MMMM yyyy"
                },
                "/": "/",
                ":": ":",
                firstDay: 1
            }
        }
    }
})(this);

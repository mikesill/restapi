/*
* Kendo UI Mobile v2013.2.918 (http://kendoui.com)
* Copyright 2013 Telerik AD. All rights reserved.
*
* Kendo UI Mobile commercial licenses may be obtained at
* https://www.kendoui.com/purchase/license-agreement/kendo-ui-mobile-commercial.aspx
* If you do not own a commercial license, this file shall be governed by the trial license terms.
*/
﻿(function( window, undefined ) {
    kendo.cultures["hu-HU"] = {
        name: "hu-HU",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": " ",
            ".": ",",
            groupSize: [3],
            percent: {
                pattern: ["-n %","n %"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                pattern: ["-n $","n $"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "Ft"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["vasárnap","hétfő","kedd","szerda","csütörtök","péntek","szombat"],
                    namesAbbr: ["V","H","K","Sze","Cs","P","Szo"],
                    namesShort: ["V","H","K","Sze","Cs","P","Szo"]
                },
                months: {
                    names: ["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december",""],
                    namesAbbr: ["jan.","febr.","márc.","ápr.","máj.","jún.","júl.","aug.","szept.","okt.","nov.","dec.",""]
                },
                AM: ["de.","de.","DE."],
                PM: ["du.","du.","DU."],
                patterns: {
                    d: "yyyy.MM.dd.",
                    D: "yyyy. MMMM d.",
                    F: "yyyy. MMMM d. H:mm:ss",
                    g: "yyyy.MM.dd. H:mm",
                    G: "yyyy.MM.dd. H:mm:ss",
                    m: "MMMM d.",
                    M: "MMMM d.",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "H:mm",
                    T: "H:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "yyyy. MMMM",
                    Y: "yyyy. MMMM"
                },
                "/": ".",
                ":": ":",
                firstDay: 1
            }
        }
    }
})(this);

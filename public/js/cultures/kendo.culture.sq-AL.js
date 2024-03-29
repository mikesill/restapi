/*
* Kendo UI Mobile v2013.2.918 (http://kendoui.com)
* Copyright 2013 Telerik AD. All rights reserved.
*
* Kendo UI Mobile commercial licenses may be obtained at
* https://www.kendoui.com/purchase/license-agreement/kendo-ui-mobile-commercial.aspx
* If you do not own a commercial license, this file shall be governed by the trial license terms.
*/
﻿(function( window, undefined ) {
    kendo.cultures["sq-AL"] = {
        name: "sq-AL",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": ".",
            ".": ",",
            groupSize: [3],
            percent: {
                pattern: ["-n %","n %"],
                decimals: 2,
                ",": ".",
                ".": ",",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                pattern: ["-n$","n$"],
                decimals: 2,
                ",": ".",
                ".": ",",
                groupSize: [3],
                symbol: "Lek"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["e diel","e hënë","e martë","e mërkurë","e enjte","e premte","e shtunë"],
                    namesAbbr: ["Die","Hën","Mar","Mër","Enj","Pre","Sht"],
                    namesShort: ["Di","Hë","Ma","Më","En","Pr","Sh"]
                },
                months: {
                    names: ["janar","shkurt","mars","prill","maj","qershor","korrik","gusht","shtator","tetor","nëntor","dhjetor",""],
                    namesAbbr: ["Jan","Shk","Mar","Pri","Maj","Qer","Kor","Gsh","Sht","Tet","Nën","Dhj",""]
                },
                AM: ["PD","pd","PD"],
                PM: ["MD","md","MD"],
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "yyyy-MM-dd",
                    F: "yyyy-MM-dd h:mm:ss.tt",
                    g: "yyyy-MM-dd h:mm.tt",
                    G: "yyyy-MM-dd h:mm:ss.tt",
                    m: "MMMM dd",
                    M: "MMMM dd",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "h:mm.tt",
                    T: "h:mm:ss.tt",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "yyyy-MM",
                    Y: "yyyy-MM"
                },
                "/": "-",
                ":": ":",
                firstDay: 1
            }
        }
    }
})(this);

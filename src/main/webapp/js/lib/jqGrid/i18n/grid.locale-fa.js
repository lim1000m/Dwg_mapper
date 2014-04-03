;(function ($) {
/**
 * jqGrid Persian Translation
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
	$.jgrid = $.jgrid || {};
	$.extend($.jgrid,{
        defaults: {
            recordtext: "??碼磨娩 {0} - {1} 碼万 {2}",
            emptyrecords: "邈沕?邈膜? ?碼?魔 ?娩膜",
            loadtext: "磨碼邈彌万碼邈?...",
            pgtext: "巒?幕? {0} 碼万 {1}"
        },
        search: {
            caption: "寞卍魔寞?...",
            Find: "?碼?魔? ?碼",
            Reset: "碼万 ??",
            odata: [{ oper:'eq', text:"磨邈碼磨邈"},{ oper:'ne', text:"?碼 磨邈碼磨邈"},{ oper:'lt', text:"磨?"},{ oper:'le', text:"沕??沕魔邈"},{ oper:'gt', text:"碼万"},{ oper:'ge', text:"磨万邈彌魔邈"},{ oper:'bw', text:"娩邈?晩 磨碼"},{ oper:'bn', text:"娩邈?晩 ?娩?膜 磨碼"},{ oper:'in', text:"?磨碼娩膜"},{ oper:'ni', text:"晩彎? 碼?? ?磨碼娩膜"},{ oper:'ew', text:"碼魔?碼? 磨碼"},{ oper:'en', text:"魔?碼? ?娩?膜 磨碼"},{ oper:'cn', text:"幕碼??"},{ oper:'nc', text:"?磨碼娩膜 幕碼??"}],
            groupOps: [{
                op: "AND",
                text: "沕?"
            },
            {
                op: "OR",
                text: "?寞??晩"
            }]
        },
        edit: {
            addCaption: "碼彎碼?? 沕邈膜? 邈沕?邈膜",
            editCaption: "??邈碼?娩 邈沕?邈膜",
            bSubmit: "麻磨魔",
            bCancel: "碼?巒邈碼?",
            bClose: "磨卍魔?",
            saveData: "膜?魔碼 魔晩??邈 沕邈膜! 莫漠?邈? 娩?膜?",
            bYes: "磨??",
            bNo: "漠?邈",
            bExit: "碼?巒邈碼?",
            msg: {
                required: "???膜?碼 磨碼?膜 漠魔?碼 毛邈 娩??膜",
                number: "?慢?碼 晩膜膜 ?晩魔磨邈 ?碼邈膜 沕??膜",
                minValue: "??膜碼邈 ?碼邈膜 娩膜? 磨碼?膜 磨万邈彌魔邈 ?碼 ?卍碼?? 磨碼",
                maxValue: "??膜碼邈 ?碼邈膜 娩膜? 磨碼?膜 沕??沕魔邈 ?碼 ?卍碼??",
                email: "毛卍魔 碼?沕魔邈???沕 ?碼邈膜 娩膜? ?晩魔磨邈 ??卍魔",
                integer: "?慢?碼 ?沕 晩膜膜 巒幕?幕 ?碼邈膜 沕??膜",
                date: "?慢?碼 ?沕 魔碼邈?漠 ?晩魔磨邈 ?碼邈膜 沕??膜",
                url: "碼?? 笠膜邈卍 巒幕?幕 ??? 磨碼娩膜. 毛?娩??膜 ??碼万 碼卍魔 ('http://' ?碼 'https://')",
                nodefined: " 魔晩邈?? ?娩膜?!",
                novalue: " ??膜碼邈 磨邈彌娩魔? 碼寞磨碼邈? 碼卍魔!",
                customarray: "魔碼磨晩 娩?碼 磨碼?膜 ??膜碼邈 笠邈碼?? 膜碼娩魔? 磨碼娩膜!",
                customfcheck: "磨邈碼? 膜碼娩魔? ?魔膜 膜?漠?碼? 娩?碼 磨碼?膜 卍慢?? 磨碼 ?沕??彌 膜?漠?碼? 膜碼娩魔? 磨碼娩?膜!"
            }
        },
        view: {
            caption: "??碼?娩 邈沕?邈膜",
            bClose: "磨卍魔?"
        },
        del: {
            caption: "幕莫?",
            msg: "碼万 幕莫? 彌万??? ?碼? 碼?魔漠碼磨 娩膜? ?慢?痲? ?卍魔?膜?",
            bSubmit: "幕莫?",
            bCancel: "碼磨慢碼?"
        },
        nav: {
            edittext: " ",
            edittitle: "??邈碼?娩 邈膜?? ?碼? 碼?魔漠碼磨 娩膜?",
            addtext: " ",
            addtitle: "碼?万?膜? 邈膜?? 寞膜?膜",
            deltext: " ",
            deltitle: "幕莫? 邈膜磨? ?碼? 碼?魔?碼磨 娩膜?",
            searchtext: " ",
            searchtitle: "寞卍魔寞?? 邈膜??",
            refreshtext: "",
            refreshtitle: "磨碼万?碼磨? ?寞膜膜 巒?幕?",
            alertcap: "碼漠慢碼邈",
            alerttext: "?慢?碼 ?沕 邈膜?? 碼?魔漠碼磨 沕??膜",
            viewtext: "",
            viewtitle: "??碼?娩 邈沕?邈膜 ?碼? 碼?魔漠碼磨 娩膜?"
        },
        col: {
            caption: "??碼?娩/晩膜? ??碼?娩 卍魔??",
            bSubmit: "麻磨魔",
            bCancel: "碼?巒邈碼?"
        },
        errors: {
            errcap: "漠慢碼",
            nourl: "??? 笠膜邈卍? 魔?挽?? ?娩膜? 碼卍魔",
            norecords: "??? 邈沕?邈膜? 磨邈碼? 毛邈膜碼万娩 ??寞?膜 ??卍魔",
            model: "慢?? ?碼? 卍魔?? ?碼 ?幕碼?? 卍魔?? ?碼? ?膜? ?? 磨碼娩膜!"
        },
        formatter: {
            integer: {
                thousandsSeparator: " ",
                defaultValue: "0"
            },
            number: {
                decimalSeparator: ".",
                thousandsSeparator: " ",
                decimalPlaces: 2,
                defaultValue: "0.00"
            },
            currency: {
                decimalSeparator: ".",
                thousandsSeparator: " ",
                decimalPlaces: 2,
                prefix: "",
                suffix: "",
                defaultValue: "0"
            },
            date: {
                dayNames: ["?沕", "膜?", "卍?", "??碼邈", "毛?寞", "寞?晩", "娩?磨", "?沕娩?磨?", "膜?娩?磨?", "卍? 娩?磨?", "??碼邈娩?磨?", "毛?寞娩?磨?", "寞?晩?", "娩?磨?"],
                monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "?碼????", "??邈??", "?碼邈卍", "笠?邈??", "??", "??痲?", "??痲??", "碼?魔", "卍毛魔碼?磨邈", "碼沕魔磨邈", "??碼?磨邈", "December"],
                AmPm: ["磨.挽", "磨.挽", "?.挽", "?.挽"],
                S: function (b) {
                    return b < 11 || b > 13 ? ["st", "nd", "rd", "th"][Math.min((b - 1) % 10, 3)] : "th"
                },
                srcformat: "Y-m-d",
                newformat: "d/m/Y",
				parseRe : /[Tt\\\/:_;.,\t\s-]/,
                masks: {
                    ISO8601Long: "Y-m-d H:i:s",
                    ISO8601Short: "Y-m-d",
                    ShortDate: "n/j/Y",
                    LongDate: "l, F d, Y",
                    FullDateTime: "l, F d, Y g:i:s A",
                    MonthDay: "F d",
                    ShortTime: "g:i A",
                    LongTime: "g:i:s A",
                    SortableDateTime: "Y-m-d\\TH:i:s",
                    UniversalSortableDateTime: "Y-m-d H:i:sO",
                    YearMonth: "F, Y"
                },
                reformatAfterEdit: false
            },
            baseLinkUrl: "",
            showAction: "??碼?娩",
            target: "",
            checkbox: {
                disabled: true
            },
            idName: "id"
        }
    });
})(jQuery);
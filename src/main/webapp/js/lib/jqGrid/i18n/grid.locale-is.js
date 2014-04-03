;(function($){
/**
 * jqGrid Icelandic Translation
 * jtm@hi.is Univercity of Iceland
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "Sko챨a {0} - {1} af {2}",
	    emptyrecords: "Engar f챈rslur",
		loadtext: "Hle챨ur...",
		pgtext : "S챠챨a {0} af {1}"
	},
	search : {
	    caption: "Leita...",
	    Find: "Leita",
	    Reset: "Endursetja",
	    odata: [{ oper:'eq', text:"sama og"},{ oper:'ne', text:"ekki sama og"},{ oper:'lt', text:"minna en"},{ oper:'le', text:"minna e챨a jafnt og"},{ oper:'gt', text:"st챈rra en"},{ oper:'ge', text:"st챈rra e챨a jafnt og"},{ oper:'bw', text:"byrjar 찼"},{ oper:'bn', text:"byrjar ekki 찼"},{ oper:'in', text:"er 챠"},{ oper:'ni', text:"er ekki 챠"},{ oper:'ew', text:"endar 찼"},{ oper:'en', text:"endar ekki 찼"},{ oper:'cn', text:"inniheldur"},{ oper:'nc', text:"inniheldur ekki"}],
	    groupOps: [	{ op: "AND", text: "allt" },	{ op: "OR",  text: "e챨a" }	]
	},
	edit : {
	    addCaption: "B챈ta vi챨 f챈rslu",
	    editCaption: "Breyta f챈rslu",
	    bSubmit: "Vista",
	    bCancel: "H챈tta vi챨",
		bClose: "Loka",
		saveData: "G철gn hafa breyst! Vista breytingar?",
		bYes : "J찼",
		bNo : "Nei",
		bExit : "H챈tta vi챨",
	    msg: {
	        required:"Reitur er nau챨synlegur",
	        number:"Vinsamlega settu inn t철lu",
	        minValue:"gildi ver챨ur a챨 vera meira en e챨a jafnt og ",
	        maxValue:"gildi ver챨ur a챨 vera minna en e챨a jafnt og ",
	        email: "er ekki l철glegt email",
	        integer: "Vinsamlega settu inn t철lu",
			date: "Vinsamlega setti inn dagsetningu",
			url: "er ekki l철glegt URL. Vantar ('http://' e챨a 'https://')",
			nodefined : " er ekki skilgreint!",
			novalue : " skilagildi nau챨synlegt!",
			customarray : "Fall skal skila fylki!",
			customfcheck : "Fall skal vera skilgreint!"
		}
	},
	view : {
	    caption: "Sko챨a f챈rslu",
	    bClose: "Loka"
	},
	del : {
	    caption: "Ey챨a",
	    msg: "Ey챨a v철ldum f챈rslum ?",
	    bSubmit: "Ey챨a",
	    bCancel: "H챈tta vi챨"
	},
	nav : {
		edittext: " ",
	    edittitle: "Breyta f챈rslu",
		addtext:" ",
	    addtitle: "N첵 f챈rsla",
	    deltext: " ",
	    deltitle: "Ey챨a f챈rslu",
	    searchtext: " ",
	    searchtitle: "Leita",
	    refreshtext: "",
	    refreshtitle: "Endurhla챨a",
	    alertcap: "Vi챨v철run",
	    alerttext: "Vinsamlega veldu f챈rslu",
		viewtext: "",
		viewtitle: "Sko챨a valda f챈rslu"
	},
	col : {
	    caption: "S첵na / fela d찼lka",
	    bSubmit: "Vista",
	    bCancel: "H챈tta vi챨"	
	},
	errors : {
		errcap : "Villa",
		nourl : "Vantar sl처챨",
		norecords: "Engar f챈rslur valdar",
	    model : "Lengd colNames <> colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"Sun", "M찼n", "횧ri", "Mi챨", "Fim", "F철s", "Lau",
				"Sunnudagur", "M찼nudagur", "횧ri챨judagur", "Mi챨vikudagur", "Fimmtudagur", "F철studagur", "Laugardagur"
			],
			monthNames: [
				"Jan", "Feb", "Mar", "Apr", "Ma챠", "J첬n", "J첬l", "횁g첬", "Sep", "Oct", "N처v", "Des",
				"Jan첬ar", "Febr첬ar", "Mars", "Apr챠l", "Ma챠", "J첬n첵", "J첬l첵", "횁g첬st", "September", "Okt처ber", "N처vember", "Desember"
			],
			AmPm : ["am","pm","AM","PM"],
			S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
			srcformat: 'Y-m-d',
			newformat: 'd/m/Y',
			parseRe : /[Tt\\\/:_;.,\t\s-]/,
			masks : {
	            ISO8601Long:"Y-m-d H:i:s",
	            ISO8601Short:"Y-m-d",
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
	        reformatAfterEdit : false
		},
		baseLinkUrl: '',
		showAction: '',
	    target: '',
	    checkbox : {disabled:true},
		idName : 'id'
	}
});
})(jQuery);

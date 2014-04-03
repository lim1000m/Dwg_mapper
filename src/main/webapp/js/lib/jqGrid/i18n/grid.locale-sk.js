;(function($){
/**
 * jqGrid Slovak Translation
 * Milan Cibulka
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "Zobrazen첵ch {0} - {1} z {2} z찼znamov",
	    emptyrecords: "Neboli n찼jden챕 탑iadne z찼znamy",
		loadtext: "Na훾챠t찼m...",
		pgtext : "Strana {0} z {1}"
	},
	search : {
		caption: "Vyh컁ad찼vam...",
		Find: "H컁ada큐",
		Reset: "Reset",
	    odata: [{ oper:'eq', text:"rovn찼 sa"},{ oper:'ne', text:"nerovn찼 sa"},{ oper:'lt', text:"men큄ie"},{ oper:'le', text:"men큄ie alebo rovnaj첬ce sa"},{ oper:'gt', text:"v채훾큄ie"},{ oper:'ge', text:"v채훾큄ie alebo rovnaj첬ce sa"},{ oper:'bw', text:"za훾챠na s"},{ oper:'bn', text:"neza훾챠na s"},{ oper:'in', text:"je v"},{ oper:'ni', text:"nie je v"},{ oper:'ew', text:"kon훾챠 s"},{ oper:'en', text:"nekon훾챠 s"},{ oper:'cn', text:"obahuje"},{ oper:'nc', text:"neobsahuje"}],
	    groupOps: [	{ op: "AND", text: "v큄etk첵ch" },	{ op: "OR",  text: "niektor챕ho z" }	]
	},
	edit : {
		addCaption: "Prida큐 z찼znam",
		editCaption: "Edit찼cia z찼znamov",
		bSubmit: "Ulo탑i큐",
		bCancel: "Storno",
		bClose: "Zavrie큐",
		saveData: "횣daje boli zmenen챕! Ulo탑i큐 zmeny?",
		bYes : "Ano",
		bNo : "Nie",
		bExit : "Zru큄i큐",
		msg: {
		    required:"Pole je po탑adovan챕",
		    number:"Pros챠m, vlo탑te val챠dne 훾챠slo",
		    minValue:"hodnota mus챠 b첵큐 v채훾큄ia ako alebo rovn찼 ",
		    maxValue:"hodnota mus챠 b첵큐 men큄ia ako alebo rovn찼 ",
		    email: "nie je val챠dny e-mail",
		    integer: "Pros챠m, vlo탑te cel챕 훾챠slo",
			date: "Pros챠m, vlo탑te val챠dny d찼tum",
			url: "nie je platnou URL. Po탑adovan첵 prefix ('http://' alebo 'https://')",
			nodefined : " nie je definovan첵!",
			novalue : " je vy탑adovan찼 n찼vratov찼 hodnota!",
			customarray : "Custom function mala vr찼ti큐 pole!",
			customfcheck : "Custom function by mala by큐 pr챠tomn찼 v pr챠pade custom checking!"
		}
	},
	view : {
	    caption: "Zobrazi큐 z찼znam",
	    bClose: "Zavrie큐"
	},
	del : {
		caption: "Zmaza큐",
		msg: "Zmaza큐 vybran첵(챕) z찼znam(y)?",
		bSubmit: "Zmaza큐",
		bCancel: "Storno"
	},
	nav : {
		edittext: " ",
		edittitle: "Editova큐 vybran첵 riadok",
		addtext:" ",
		addtitle: "Prida큐 nov첵 riadek",
		deltext: " ",
		deltitle: "Zmaza큐 vybran첵 z찼znam ",
		searchtext: " ",
		searchtitle: "N찼js큐 z찼znamy",
		refreshtext: "",
		refreshtitle: "Obnovi큐 tabu컁ku",
		alertcap: "Varovanie",
		alerttext: "Pros챠m, vyberte riadok",
		viewtext: "",
		viewtitle: "Zobrazi큐 vybran첵 riadok"
	},
	col : {
		caption: "Zobrazit/Skr첵큐 st캤pce",
		bSubmit: "Ulo탑i큐",
		bCancel: "Storno"	
	},
	errors : {
		errcap : "Chyba",
		nourl : "Nie je nastaven찼 url",
		norecords: "탐iadne z찼znamy k spracovaniu",
		model : "D캤탑ka colNames <> colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"Ne", "Po", "Ut", "St", "힋t", "Pi", "So",
				"Nedela", "Pondelok", "Utorok", "Streda", "힋tvrtok", "Piatek", "Sobota"
			],
			monthNames: [
				"Jan", "Feb", "Mar", "Apr", "M찼j", "J첬n", "J첬l", "Aug", "Sep", "Okt", "Nov", "Dec",
				"Janu찼r", "Febru찼r", "Marec", "Apr챠l", "M찼j", "J첬n", "J첬l", "August", "September", "Okt처ber", "November", "December"
			],
			AmPm : ["do","od","DO","OD"],
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

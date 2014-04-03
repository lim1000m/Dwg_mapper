;(function($){
/**
 * jqGrid Polish Translation
 * 흟ukasz Schab
 * http://FreeTree.pl
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = {
	defaults : {
		recordtext: "Poka탉 {0} - {1} z {2}",
	    emptyrecords: "Brak rekord처w do pokazania",
		loadtext: "\u0142adowanie...",
		pgtext : "Strona {0} z {1}"
	},
	search : {
	    caption: "Wyszukiwanie...",
	    Find: "Szukaj",
	    Reset: "Czy힄훶",
	    odata : ['dok\u0142adnie', 'r처탉ne od', 'mniejsze od', 'mniejsze lub r처wne','wi휌ksze od','wi휌ksze lub r처wne', 'zaczyna si휌 od','nie zaczyna si휌 od','zawiera','nie zawiera','ko흦czy si휌 na','nie ko흦czy si휌 na','zawiera','nie zawiera'],
	    groupOps: [	{ op: "ORAZ", text: "wszystkie" },	{ op: "LUB",  text: "ka탉dy" }	],
		matchText: " pasuje",
		rulesText: " regu\u0142y"
	},
	edit : {
	    addCaption: "Dodaj rekord",
	    editCaption: "Edytuj rekord",
	    bSubmit: "Zapisz",
	    bCancel: "Anuluj",
		bClose: "Zamknij",
		saveData: "Dane zosta\u0142y zmienione! Zapisa훶 zmiany?",
		bYes : "Tak",
		bNo : "Nie",
		bExit : "Anuluj",
	    msg: {
	        required:"Pole jest wymagane",
	        number:"Prosz휌 wpisa훶 poprawn훳 liczb휌",
	        minValue:"warto힄훶 musi by훶 wi휌ksza lub r처wna",
	        maxValue:"warto힄훶 musi by훶 mniejsza od",
	        email: "nie jest adresem e-mail",
	        integer: "Prosz휌 wpisa훶 poprawn훳 liczb휌",
			date: "Prosz휌 podaj poprawn훳 dat휌",
			url: "jest niew\u0142a힄ciwym adresem URL. Pami휌taj o prefiksie ('http://' lub 'https://')",
			nodefined : " is not defined!",
			novalue : " return value is required!",
			customarray : "Custom function should return array!",
			customfcheck : "Custom function should be present in case of custom checking!"
		}
	},
	view : {
	    caption: "Poka탉 rekord",
	    bClose: "Zamknij"
	},
	del : {
	    caption: "Usuwanie",
	    msg: "Czy usun훳훶 wybrany rekord(y)?",
	    bSubmit: "Usu흦",
	    bCancel: "Anuluj"
	},
	nav : {
		edittext: " ",
	    edittitle: "Edytuj wybrany wiersz",
		addtext:" ",
	    addtitle: "Dodaj nowy wiersz",
	    deltext: " ",
	    deltitle: "Usu흦 wybrany wiersz",
	    searchtext: " ",
	    searchtitle: "Wyszukaj rekord",
	    refreshtext: "",
	    refreshtitle: "Prze\u0142aduj",
	    alertcap: "Uwaga",
	    alerttext: "Prosz휌 wybra훶 wiersz",
		viewtext: "",
		viewtitle: "View selected row"
	},
	col : {
	    caption: "Poka탉/Ukryj kolumny",
	    bSubmit: "Zatwierd탄",
	    bCancel: "Anuluj"	
	},
	errors : {
		errcap : "B\u0142훳d",
		nourl : "Brak adresu url",
		norecords: "Brak danych",
	    model : "D\u0142ugo힄훶 colNames <> colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"Nie", "Pon", "Wt", "힃r", "Cz", "Pi", "So",
				"Niedziela", "Poniedzia\u0142ek", "Wtorek", "힃roda", "Czwartek", "Pi훳tek", "Sobota"
			],
			monthNames: [
				"Sty", "Lu", "Mar", "Kwie", "Maj", "Cze", "Lip", "Sie", "Wrz", "Pa탄", "Lis", "Gru",
				"Stycze흦", "Luty", "Marzec", "Kwiecie흦", "Maj", "Czerwiec", "Lipiec", "Sierpie흦", "Wrzesie흦", "Pa탄dziernik", "Listopad", "Grudzie흦"
				],
			AmPm : ["am","pm","AM","PM"],
			S: function (j) {return j < 11 || j > 13 ? ['', '', '', ''][Math.min((j - 1) % 10, 3)] : ''},
			srcformat: 'Y-m-d',
			newformat: 'd/m/Y',
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
};
})(jQuery);
;(function($){
/**
 * jqGrid Polish Translation
 * 흟ukasz Schab lukasz@freetree.pl
 * http://FreeTree.pl
 *
 * Updated names, abbreviations, currency and date/time formats for Polish norms (also corresponding with CLDR v21.0.1 --> http://cldr.unicode.org/index) 
 * Tomasz P휌czek tpeczek@gmail.com
 * http://tpeczek.blogspot.com; http://tpeczek.codeplex.com
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "Poka탉 {0} - {1} z {2}",
		emptyrecords: "Brak rekord처w do pokazania",
		loadtext: "흟adowanie...",
		pgtext : "Strona {0} z {1}"
	},
	search : {
		caption: "Wyszukiwanie...",
		Find: "Szukaj",
		Reset: "Czy힄훶",
		odata: [{ oper:'eq', text:"dok흢adnie"},{ oper:'ne', text:"r처탉ne od"},{ oper:'lt', text:"mniejsze od"},{ oper:'le', text:"mniejsze lub r처wne"},{ oper:'gt', text:"wi휌ksze od"},{ oper:'ge', text:"wi휌ksze lub r처wne"},{ oper:'bw', text:"zaczyna si휌 od"},{ oper:'bn', text:"nie zaczyna si휌 od"},{ oper:'in', text:"jest w"},{ oper:'ni', text:"nie jest w"},{ oper:'ew', text:"ko흦czy si휌 na"},{ oper:'en', text:"nie ko흦czy si휌 na"},{ oper:'cn', text:"zawiera"},{ oper:'nc', text:"nie zawiera"}],
		groupOps: [	{ op: "AND", text: "oraz" },	{ op: "OR",  text: "lub" }	]
	},
	edit : {
		addCaption: "Dodaj rekord",
		editCaption: "Edytuj rekord",
		bSubmit: "Zapisz",
		bCancel: "Anuluj",
		bClose: "Zamknij",
		saveData: "Dane zosta흢y zmienione! Zapisa훶 zmiany?",
		bYes: "Tak",
		bNo: "Nie",
		bExit: "Anuluj",
		msg: {
			required: "Pole jest wymagane",
			number: "Prosz휌 wpisa훶 poprawn훳 liczb휌",
			minValue: "warto힄훶 musi by훶 wi휌ksza lub r처wna od",
			maxValue: "warto힄훶 musi by훶 mniejsza lub r처wna od",
			email: "nie jest poprawnym adresem e-mail",
			integer: "Prosz휌 wpisa훶 poprawn훳 liczb휌",
			date: "Prosz휌 podaj poprawn훳 dat휌",
			url: "jest niew흢a힄ciwym adresem URL. Pami휌taj o prefiksie ('http://' lub 'https://')",
			nodefined: " niezdefiniowane!",
			novalue: " wymagana jest warto힄훶 zwracana!",
			customarray: "Funkcja niestandardowa powinna zwraca훶 tablic휌!",
			customfcheck: "Funkcja niestandardowa powinna by훶 obecna w przypadku niestandardowego sprawdzania!"
		}
	},
	view : {
		caption: "Poka탉 rekord",
		bClose: "Zamknij"
	},
	del : {
		caption: "Usu흦",
		msg: "Czy usun훳훶 wybrany rekord(y)?",
		bSubmit: "Usu흦",
		bCancel: "Anuluj"
	},
	nav : {
		edittext: "",
		edittitle: "Edytuj wybrany wiersz",
		addtext: "",
		addtitle: "Dodaj nowy wiersz",
		deltext: "",
		deltitle: "Usu흦 wybrany wiersz",
		searchtext: "",
		searchtitle: "Wyszukaj rekord",
		refreshtext: "",
		refreshtitle: "Prze흢aduj",
		alertcap: "Uwaga",
		alerttext: "Prosz휌 wybra훶 wiersz",
		viewtext: "",
		viewtitle: "Poka탉 wybrany wiersz"
	},
	col : {
		caption: "Poka탉/Ukryj kolumny",
		bSubmit: "Zatwierd탄",
		bCancel: "Anuluj"
	},
	errors : {
		errcap: "B흢훳d",
		nourl: "Brak adresu url",
		norecords: "Brak danych",
		model : "D흢ugo힄훶 colNames <> colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
		currency : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:" z흢", defaultValue: '0,00'},
		date : {
			dayNames:   [
				"niedz.", "pon.", "wt.", "힄r.", "czw.", "pt.", "sob.",
				"niedziela", "poniedzia흢ek", "wtorek", "힄roda", "czwartek", "pi훳tek", "sobota"
			],
			monthNames: [
				"sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "pa탄", "lis", "gru",
				"stycze흦", "luty", "marzec", "kwiecie흦", "maj", "czerwiec", "lipiec", "sierpie흦", "wrzesie흦", "pa탄dziernik", "listopad", "grudzie흦"
				],
			AmPm : ["","","",""],
			S: function (j) {return '';},
			srcformat: 'Y-m-d',
			newformat: 'd.m.Y',
			parseRe : /[Tt\\\/:_;.,\t\s-]/,
			masks : {
				ISO8601Long: "Y-m-d H:i:s",
				ISO8601Short: "Y-m-d",
				ShortDate: "d.m.y",
				LongDate: "l, j F Y",
				FullDateTime: "l, j F Y H:i:s",
				MonthDay: "j F",
				ShortTime: "H:i",
				LongTime: "H:i:s",
				SortableDateTime: "Y-m-d\\TH:i:s",
				UniversalSortableDateTime: "Y-m-d H:i:sO",
				YearMonth: "F Y"
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
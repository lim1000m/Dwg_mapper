;(function($){
/**
 * jqGrid German Translation
 * Version 1.0.0 (developed for jQuery Grid 3.3.1)
 * Olaf Kl철ppel opensource@blue-hit.de
 * http://blue-hit.de/ 
 *
 * Updated for jqGrid 3.8
 * Andreas Flack
 * http://www.contentcontrol-berlin.de
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = {
	defaults : {
		recordtext: "Zeige {0} - {1} von {2}",
	    emptyrecords: "Keine Datens채tze vorhanden",
		loadtext: "L채dt...",
		pgtext : "Seite {0} von {1}"
	},
	search : {
		caption: "Suche...",
		Find: "Suchen",
		Reset: "Zur체cksetzen",
	    odata : ['gleich', 'ungleich', 'kleiner', 'kleiner gleich','gr철횩er','gr철횩er gleich', 'beginnt mit','beginnt nicht mit','ist in','ist nicht in','endet mit','endet nicht mit','enth채lt','enth채lt nicht'],
	    groupOps: [	{ op: "AND", text: "alle" },	{ op: "OR",  text: "mindestens eine" }	],
		matchText: " erf체lle",
		rulesText: " Bedingung(en)"
	},
	edit : {
		addCaption: "Datensatz hinzuf체gen",
		editCaption: "Datensatz bearbeiten",
		bSubmit: "Speichern",
		bCancel: "Abbrechen",
		bClose: "Schlie횩en",
		saveData: "Daten wurden ge채ndert! 횆nderungen speichern?",
		bYes : "ja",
		bNo : "nein",
		bExit : "abbrechen",
		msg: {
		    required:"Feld ist erforderlich",
		    number: "Bitte geben Sie eine Zahl ein",
		    minValue:"Wert muss gr철횩er oder gleich sein, als ",
		    maxValue:"Wert muss kleiner oder gleich sein, als ",
		    email: "ist keine g체ltige E-Mail-Adresse",
		    integer: "Bitte geben Sie eine Ganzzahl ein",
			date: "Bitte geben Sie ein g체ltiges Datum ein",
			url: "ist keine g체ltige URL. Pr채fix muss eingegeben werden ('http://' oder 'https://')",
			nodefined : " ist nicht definiert!",
			novalue : " R체ckgabewert ist erforderlich!",
			customarray : "Benutzerdefinierte Funktion sollte ein Array zur체ckgeben!",
			customfcheck : "Benutzerdefinierte Funktion sollte im Falle der benutzerdefinierten 횥berpr체fung vorhanden sein!"
		}
	},
	view : {
	    caption: "Datensatz anzeigen",
	    bClose: "Schlie횩en"
	},
	del : {
		caption: "L철schen",
		msg: "Ausgew채hlte Datens채tze l철schen?",
		bSubmit: "L철schen",
		bCancel: "Abbrechen"
	},
	nav : {
		edittext: " ",
	    edittitle: "Ausgew채hlte Zeile editieren",
		addtext:" ",
	    addtitle: "Neue Zeile einf체gen",
	    deltext: " ",
	    deltitle: "Ausgew채hlte Zeile l철schen",
	    searchtext: " ",
	    searchtitle: "Datensatz suchen",
	    refreshtext: "",
	    refreshtitle: "Tabelle neu laden",
	    alertcap: "Warnung",
	    alerttext: "Bitte Zeile ausw채hlen",
		viewtext: "",
		viewtitle: "Ausgew채hlte Zeile anzeigen"
	},
	col : {
		caption: "Spalten ausw채hlen",
		bSubmit: "Speichern",
		bCancel: "Abbrechen"	
	},
	errors : {
		errcap : "Fehler",
		nourl : "Keine URL angegeben",
		norecords: "Keine Datens채tze zu bearbeiten",
		model : "colNames und colModel sind unterschiedlich lang!"
	},
	formatter : {
		integer : {thousandsSeparator: ".", defaultValue: '0'},
		number : {decimalSeparator:",", thousandsSeparator: ".", decimalPlaces: 2, defaultValue: '0,00'},
		currency : {decimalSeparator:",", thousandsSeparator: ".", decimalPlaces: 2, prefix: "", suffix:" ??, defaultValue: '0,00'},
		date : {
			dayNames:   [
				"So", "Mo", "Di", "Mi", "Do", "Fr", "Sa",
				"Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"
			],
			monthNames: [
				"Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez",
				"Januar", "Februar", "M채rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"
			],
			AmPm : ["am","pm","AM","PM"],
			S: function (j) {return 'ter'},
			srcformat: 'Y-m-d',
			newformat: 'd.m.Y',
			masks : {
		        ISO8601Long: "Y-m-d H:i:s",
		        ISO8601Short: "Y-m-d",
		        ShortDate: "j.n.Y",
		        LongDate: "l, j. F Y",
		        FullDateTime: "l, d. F Y G:i:s",
		        MonthDay: "d. F",
		        ShortTime: "G:i",
		        LongTime: "G:i:s",
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
};
})(jQuery);
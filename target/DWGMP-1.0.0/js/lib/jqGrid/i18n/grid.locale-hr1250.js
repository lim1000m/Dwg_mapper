;(function($){
/**
 * jqGrid Croatian Translation (charset windows-1250)
 * Version 1.0.1 (developed for jQuery Grid 4.4)
 * msajko@gmail.com
 * 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "Pregled {0} - {1} od {2}",
		emptyrecords: "Nema zapisa",
		loadtext: "U占퐄tavam...",
		pgtext : "Stranica {0} od {1}"
	},
	search : {
		caption: "Tra占퐄...",
		Find: "Pretra占퐄vanje",
		Reset: "Poni占퐐i",
		odata : [{ oper:'eq', text:'jednak'}, { oper:'ne', text:'nije identi占폸n'}, { oper:'lt', text:'manje'}, { oper:'le', text:'manje ili identi占퐊o'},{ oper:'gt', text:'ve占폾'},{ oper:'ge', text:'ve占폾 ili identi占퐊o'}, { oper:'bw', text:'po占퐄nje sa'},{ oper:'bn', text:'ne po占퐄nje sa '},{ oper:'in', text:'je u'},{ oper:'ni', text:'nije u'},{ oper:'ew', text:'zavr占폸va sa'},{ oper:'en', text:'ne zavr占폸va sa'},{ oper:'cn', text:'sadr占퐄'},{ oper:'nc', text:'ne sadr占퐄'}],
		groupOps: [	{ op: "I", text: "sve" },	{ op: "ILI",  text: "bilo koji" }	]
	},
	edit : {
		addCaption: "Dodaj zapis",
		editCaption: "Promijeni zapis",
		bSubmit: "Preuzmi",
		bCancel: "Odustani",
		bClose: "Zatvri",
		saveData: "Podaci su promijenjeni! Preuzmi promijene?",
		bYes : "Da",
		bNo : "Ne",
		bExit : "Odustani",
		msg: {
			required:"Polje je obavezno",
			number:"Molim, unesite ispravan broj",
			minValue:"Vrijednost mora biti ve占폸 ili identi占퐊a ",
			maxValue:"Vrijednost mora biti manja ili identi占퐊a",
			email: "neispravan e-mail",
			integer: "Molim, unjeti ispravan cijeli broj (integer)",
			date: "Molim, unjeti ispravan datum ",
			url: "neispravan URL. Prefiks je obavezan ('http://' or 'https://')",
			nodefined : " nije definiran!",
			novalue : " zahtjevan podatak je obavezan!",
			customarray : "Opcionalna funkcija trebala bi bili polje (array)!",
			customfcheck : "Custom function should be present in case of custom checking!"
			
		}
	},
	view : {
		caption: "Otvori zapis",
		bClose: "Zatvori"
	},
	del : {
		caption: "Obri占퐄",
		msg: "Obri占퐄 ozna占폾n zapis ili vi占폾 njih?",
		bSubmit: "Obri占퐄",
		bCancel: "Odustani"
	},
	nav : {
		edittext: " ",
		edittitle: "Promijeni obilje占폾ni red",
		addtext:" ",
		addtitle: "Dodaj novi red",
		deltext: " ",
		deltitle: "Obri占퐄 obilje占폾ni red",
		searchtext: " ",
		searchtitle: "Potra占퐄 zapise",
		refreshtext: "",
		refreshtitle: "Ponovo preuzmi podatke",
		alertcap: "Upozorenje",
		alerttext: "Molim, odaberi red",
		viewtext: "",
		viewtitle: "Pregled obilje占폾nog reda"
	},
	col : {
		caption: "Obilje占퐄 kolonu",
		bSubmit: "Uredu",
		bCancel: "Odustani"
	},
	errors : {
		errcap : "Gre占퐆a",
		nourl : "Nedostaje URL",
		norecords: "Bez zapisa za obradu",
		model : "colNames i colModel imaju razli占퐄tu duljinu!"
	},
	formatter : {
		integer : {thousandsSeparator: ".", defaultValue: '0'},
		number : {decimalSeparator:",", thousandsSeparator: ".", decimalPlaces: 2, defaultValue: '0,00'},
		currency : {decimalSeparator:",", thousandsSeparator: ".", decimalPlaces: 2, prefix: "", suffix:" Kn", defaultValue: '0,00'},
		date : {
			dayNames:   [
				"Ned", "Pon", "Uto", "Sri", "占폾t", "Pet", "Sub",
				"Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "占폾tvrtak", "Petak", "Subota"
			],
			monthNames: [
				"Sij", "Vel", "O占퐑", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro",
				"Sije占폸nj", "Velja占폸", "O占퐑jak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"
			],
			AmPm : ["am","pm","AM","PM"],
			S: function (j) {return ''},
			srcformat: 'Y-m-d',
			newformat: 'd.m.Y.',
			parseRe : /[Tt\\\/:_;.,\t\s-]/,
			masks : {
				// see http://php.net/manual/en/function.date.php for PHP format used in jqGrid
				// and see http://docs.jquery.com/UI/Datepicker/formatDate
				// and https://github.com/jquery/globalize#dates for alternative formats used frequently
				ISO8601Long: "Y-m-d H:i:s",
				ISO8601Short: "Y-m-d",
				// short date:
				//    d - Day of the month, 2 digits with leading zeros
				//    m - Numeric representation of a month, with leading zeros
				//    Y - A full numeric representation of a year, 4 digits
				ShortDate: "d.m.Y.",	// in jQuery UI Datepicker: "dd.mm.yy."
				// long date:
				//    l - A full textual representation of the day of the week
				//    j - Day of the month without leading zeros
				//    F - A full textual representation of a month
				//    Y - A full numeric representation of a year, 4 digits
				LongDate: "l, j. F Y", // in jQuery UI Datepicker: "dddd, d. MMMM yyyy"
				// long date with long time:
				//    l - A full textual representation of the day of the week
				//    j - Day of the month without leading zeros
				//    F - A full textual representation of a month
				//    Y - A full numeric representation of a year, 4 digits
				//    H - 24-hour format of an hour with leading zeros
				//    i - Minutes with leading zeros
				//    s - Seconds, with leading zeros
				FullDateTime: "l, j. F Y H:i:s", // in jQuery UI Datepicker: "dddd, d. MMMM yyyy HH:mm:ss"
				// month day:
				//    d - Day of the month, 2 digits with leading zeros
				//    F - A full textual representation of a month
				MonthDay: "d F", // in jQuery UI Datepicker: "dd MMMM"
				// short time (without seconds)
				//    H - 24-hour format of an hour with leading zeros
				//    i - Minutes with leading zeros
				ShortTime: "H:i", // in jQuery UI Datepicker: "HH:mm"
				// long time (with seconds)
				//    H - 24-hour format of an hour with leading zeros
				//    i - Minutes with leading zeros
				//    s - Seconds, with leading zeros
				LongTime: "H:i:s", // in jQuery UI Datepicker: "HH:mm:ss"
				SortableDateTime: "Y-m-d\\TH:i:s",
				UniversalSortableDateTime: "Y-m-d H:i:sO",
				// month with year
				//    F - A full textual representation of a month
				//    Y - A full numeric representation of a year, 4 digits
				YearMonth: "F Y" // in jQuery UI Datepicker: "MMMM yyyy"
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
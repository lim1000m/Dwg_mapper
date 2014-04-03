;(function($){
/**
 * jqGrid Lithuanian Translation
 * aur1mas aur1mas@devnet.lt
 * http://aur1mas.devnet.lt
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = {
	defaults : {
		recordtext: "Per탑i큰rima {0} - {1} i큄 {2}",
		emptyrecords: "칼ra큄킬 n휊ra",
		loadtext: "Kraunama...",
		pgtext : "Puslapis {0} i큄 {1}"
	},
	search : {
		caption: "Paie큄ka...",
		Find: "Ie큄koti",
		Reset: "Atstatyti",
		odata : ['lygu', 'nelygu', 'ma탑iau', 'ma탑iau arba lygu','daugiau','daugiau arba lygu', 'prasideda','neprasideda','reik큄m휊 yra','reik큄m휊s n휊ra','baigiasi','nesibaigia','yra sudarytas','n휊ra sudarytas'],
		groupOps: [	{ op: "AND", text: "visi" },	{ op: "OR",  text: "bet kuris" }	],
		matchText: " match",
		rulesText: " rules"
	},
	edit : {
		addCaption: "Sukurti 캄ra큄훳",
		editCaption: "Redaguoti 캄ra큄훳",
		bSubmit: "I큄saugoti",
		bCancel: "At큄aukti",
		bClose: "U탑daryti",
		saveData: "Duomenys buvo pakeisti! I큄saugoti pakeitimus?",
		bYes : "Taip",
		bNo : "Ne",
		bExit : "At큄aukti",
		msg: {
			required:"Privalomas laukas",
			number:"칼veskite tinkam훳 numer캄",
			minValue:"reik큄m휊 turi b큰ti didesn휊 arba lygi ",
			maxValue:"reik큄m휊 turi b큰ti ma탑esn휊 arba lygi",
			email: "neteisingas el. pa큄to adresas",
			integer: "칼veskite teising훳 sveik훳j캄 skai훾i킬",
			date: "칼veskite teising훳 dat훳",
			url: "blogas adresas. Nepamir큄kite prid휊ti ('http://' arba 'https://')",
			nodefined : " n휊ra apibr휊탑ta!",
			novalue : " turi b큰ti gra탑inama kokia nors reik큄m휊!",
			customarray : "Custom f-ja turi gr훳탑inti masyv훳!",
			customfcheck : "Custom f-ja t큰r휊t킬 b큰ti sukurta, prie큄 bandant j훳 naudoti!"
			
		}
	},
	view : {
		caption: "Per탑i큰r휊ti 캄ra큄us",
		bClose: "U탑daryti"
	},
	del : {
		caption: "I큄trinti",
		msg: "I큄trinti pa탑ym휊tus 캄ra큄us(-훳)?",
		bSubmit: "I큄trinti",
		bCancel: "At큄aukti"
	},
	nav : {
		edittext: "",
		edittitle: "Redaguoti pa탑ym휊t훳 eilut휌",
		addtext:"",
		addtitle: "Prid휊ti nauj훳 eilut휌",
		deltext: "",
		deltitle: "I큄trinti pa탑ym휊t훳 eilut휌",
		searchtext: "",
		searchtitle: "Rasti 캄ra큄us",
		refreshtext: "",
		refreshtitle: "Perkrauti lentel휌",
		alertcap: "칼sp휊jimas",
		alerttext: "Pasirinkite eilut휌",
		viewtext: "",
		viewtitle: "Per탑i큰r휊ti pasirinkt훳 eilut휌"
	},
	col : {
		caption: "Pasirinkti stulpelius",
		bSubmit: "Gerai",
		bCancel: "At큄aukti"
	},
	errors : {
		errcap : "Klaida",
		nourl : "Url reik큄m휊 turi b큰ti perduota",
		norecords: "N휊ra 캄ra큄킬, kuriuos b큰t킬 galima apdoroti",
		model : "colNames skai훾ius <> colModel skai훾iui!"
	},
	formatter : {
		integer : {thousandsSeparator: "", defaultValue: '0'},
		number : {decimalSeparator:",", thousandsSeparator: "", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:",", thousandsSeparator: "", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "힋e큄",
				"Sekmadienis", "Pirmadienis", "Antradienis", "Tre훾iadienis", "Ketvirtadienis", "Penktadienis", "힋e큄tadienis"
			],
			monthNames: [
				"Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rugj", "Rugs", "Spa", "Lap", "Gru",
				"Sausis", "Vasaris", "Kovas", "Balandis", "Gegu탑휊", "Bir탑elis", "Liepa", "Rugpj큰tis", "Rugs휊jis", "Spalis", "Lapkritis", "Gruodis"
			],
			AmPm : ["am","pm","AM","PM"],
			S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
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

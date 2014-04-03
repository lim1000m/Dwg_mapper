;(function($){
/**
 * jqGrid Czech Translation
 * Pavel Jirak pavel.jirak@jipas.cz
 * doplnil Thomas Wagner xwagne01@stud.fit.vutbr.cz
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = {
	defaults : {
		recordtext: "Zobrazeno {0} - {1} z {2} z찼znam킁",
	    emptyrecords: "Nenalezeny 탑찼dn챕 z찼znamy",
		loadtext: "Na훾챠t찼m...",
		pgtext : "Strana {0} z {1}"
	},
	search : {
		caption: "Vyhled찼v찼m...",
		Find: "Hledat",
		Reset: "Reset",
	    odata : ['rovno', 'nerovono', 'men큄챠', 'men큄챠 nebo rovno','v휎t큄챠', 'v휎t큄챠 nebo rovno', 'za훾챠n찼 s', 'neza훾챠n찼 s', 'je v', 'nen챠 v', 'kon훾챠 s', 'nekon훾챠 s', 'obahuje', 'neobsahuje'],
	    groupOps: [	{ op: "AND", text: "v큄ech" },	{ op: "OR",  text: "n휎kter챕ho z" }	],
		matchText: " hledat podle",
		rulesText: " pravidel"
	},
	edit : {
		addCaption: "P힂idat z찼znam",
		editCaption: "Editace z찼znamu",
		bSubmit: "Ulo탑it",
		bCancel: "Storno",
		bClose: "Zav힂챠t",
		saveData: "Data byla zm휎n휎na! Ulo탑it zm휎ny?",
		bYes : "Ano",
		bNo : "Ne",
		bExit : "Zru큄it",
		msg: {
		    required:"Pole je vy탑adov찼no",
		    number:"Pros챠m, vlo탑te validn챠 훾챠slo",
		    minValue:"hodnota mus챠 b첵t v휎t큄챠 ne탑 nebo rovn찼 ",
		    maxValue:"hodnota mus챠 b첵t men큄챠 ne탑 nebo rovn찼 ",
		    email: "nen챠 validn챠 e-mail",
		    integer: "Pros챠m, vlo탑te cel챕 훾챠slo",
			date: "Pros챠m, vlo탑te validn챠 datum",
			url: "nen챠 platnou URL. Vy탑adov찼n prefix ('http://' or 'https://')",
			nodefined : " nen챠 definov찼n!",
			novalue : " je vy탑adov찼na n찼vratov찼 hodnota!",
			customarray : "Custom function m휎l찼 vr찼tit pole!",
			customfcheck : "Custom function by m휎la b첵t p힂챠tomna v p힂챠pad휎 custom checking!"
		}
	},
	view : {
	    caption: "Zobrazit z찼znam",
	    bClose: "Zav힂챠t"
	},
	del : {
		caption: "Smazat",
		msg: "Smazat vybran첵(챕) z찼znam(y)?",
		bSubmit: "Smazat",
		bCancel: "Storno"
	},
	nav : {
		edittext: " ",
		edittitle: "Editovat vybran첵 힂찼dek",
		addtext:" ",
		addtitle: "P힂idat nov첵 힂찼dek",
		deltext: " ",
		deltitle: "Smazat vybran첵 z찼znam ",
		searchtext: " ",
		searchtitle: "Naj챠t z찼znamy",
		refreshtext: "",
		refreshtitle: "Obnovit tabulku",
		alertcap: "Varov찼n챠",
		alerttext: "Pros챠m, vyberte 힂찼dek",
		viewtext: "",
		viewtitle: "Zobrazit vybran첵 힂찼dek"
	},
	col : {
		caption: "Zobrazit/Skr첵t sloupce",
		bSubmit: "Ulo탑it",
		bCancel: "Storno"	
	},
	errors : {
		errcap : "Chyba",
		nourl : "Nen챠 nastavena url",
		norecords: "탐찼dn챕 z찼znamy ke zpracov찼n챠",
		model : "D챕lka colNames <> colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"Ne", "Po", "횣t", "St", "훻t", "P찼", "So",
				"Ned휎le", "Pond휎l챠", "횣ter첵", "St힂eda", "훻tvrtek", "P찼tek", "Sobota"
			],
			monthNames: [
				"Led", "횣no", "B힂e", "Dub", "Kv휎", "훻er", "훻vc", "Srp", "Z찼힂", "힀챠j", "Lis", "Pro",
				"Leden", "횣nor", "B힂ezen", "Duben", "Kv휎ten", "훻erven", "훻ervenec", "Srpen", "Z찼힂챠", "힀챠jen", "Listopad", "Prosinec"
			],
			AmPm : ["do","od","DO","OD"],
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

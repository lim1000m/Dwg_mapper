;(function($){
/**
 * jqGrid Romanian Translation
 * Alexandru Emil Lupu contact@alecslupu.ro
 * http://www.alecslupu.ro/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "Vizualizare {0} - {1} din {2}",
		emptyrecords: "Nu exist훱 챤nregistr훱ri de vizualizat",
		loadtext: "횓nc훱rcare...",
		pgtext : "Pagina {0} din {1}"
	},
	search : {
		caption: "Caut훱...",
		Find: "Caut훱",
		Reset: "Resetare",
		odata: [{ oper:'eq', text:"egal"},{ oper:'ne', text:"diferit"},{ oper:'lt', text:"mai mic"},{ oper:'le', text:"mai mic sau egal"},{ oper:'gt', text:"mai mare"},{ oper:'ge', text:"mai mare sau egal"},{ oper:'bw', text:"챤ncepe cu"},{ oper:'bn', text:"nu 챤ncepe cu"},{ oper:'in', text:"se g훱se?te 챤n"},{ oper:'ni', text:"nu se g훱se?te 챤n"},{ oper:'ew', text:"se termin훱 cu"},{ oper:'en', text:"nu se termin훱 cu"},{ oper:'cn', text:"con?ine"},{ oper:'nc', text:""}],
		groupOps: [	{ op: "AND", text: "toate" },	{ op: "OR",  text: "oricare" }	]
	},
	edit : {
		addCaption: "Ad훱ugare 챤nregistrare",
		editCaption: "Modificare 챤nregistrare",
		bSubmit: "Salveaz훱",
		bCancel: "Anulare",
		bClose: "횓nchide",
		saveData: "Informa?iile au fost modificate! Salva?i modific훱rile?",
		bYes : "Da",
		bNo : "Nu",
		bExit : "Anulare",
		msg: {
			required:"C창mpul este obligatoriu",
			number:"V훱 rug훱m introduce?i un num훱r valid",
			minValue:"valoarea trebuie sa fie mai mare sau egal훱 cu",
			maxValue:"valoarea trebuie sa fie mai mic훱 sau egal훱 cu",
			email: "nu este o adres훱 de e-mail valid훱",
			integer: "V훱 rug훱m introduce?i un num훱r valid",
			date: "V훱 rug훱m s훱 introduce?i o dat훱 valid훱",
			url: "Nu este un URL valid. Prefixul  este necesar('http://' or 'https://')",
			nodefined : " is not defined!",
			novalue : " return value is required!",
			customarray : "Custom function should return array!",
			customfcheck : "Custom function should be present in case of custom checking!"
		}
	},
	view : {
		caption: "Vizualizare 챤nregistrare",
		bClose: "횓nchidere"
	},
	del : {
		caption: "?tegere",
		msg: "?terge?i 챤nregistrarea (챤nregistr훱rile) selectate?",
		bSubmit: "?terge",
		bCancel: "Anulare"
	},
	nav : {
		edittext: "",
		edittitle: "Modific훱 r창ndul selectat",
		addtext:"",
		addtitle: "Adaug훱 r창nd nou",
		deltext: "",
		deltitle: "?terge r창ndul selectat",
		searchtext: "",
		searchtitle: "C훱utare 챤nregistr훱ri",
		refreshtext: "",
		refreshtitle: "Re챤ncarcare Grid",
		alertcap: "Avertisment",
		alerttext: "V훱 rug훱m s훱 selecta?i un r창nd",
		viewtext: "",
		viewtitle: "Vizualizeaz훱 r창ndul selectat"
	},
	col : {
		caption: "Arat훱/Ascunde coloanele",
		bSubmit: "Salveaz훱",
		bCancel: "Anulare"
	},
	errors : {
		errcap : "Eroare",
		nourl : "Niciun url nu este setat",
		norecords: "Nu sunt 챤nregistr훱ri de procesat",
		model : "Lungimea colNames <> colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
		currency : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0,00'},
		date : {
			dayNames:   [
				"Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "S창m",
				"Duminic훱", "Luni", "Mar?i", "Miercuri", "Joi", "Vineri", "S창mb훱t훱"
			],
			monthNames: [
				"Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Noi", "Dec",
				"Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
			],
			AmPm : ["am","pm","AM","PM"],
			/*
			 Here is a problem in romanian: 
					M	/	F
			 1st = primul / prima
			 2nd = Al doilea / A doua
			 3rd = Al treilea / A treia 
			 4th = Al patrulea/ A patra
			 5th = Al cincilea / A cincea 
			 6th = Al ?aselea / A ?asea
			 7th = Al ?aptelea / A ?aptea
			 .... 
			 */
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

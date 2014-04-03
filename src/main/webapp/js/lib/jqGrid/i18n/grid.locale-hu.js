;(function($){
/**
 * jqGrid Hungarian Translation
 * 흶rszigety 횁d찼m udx6bs@freemail.hu
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/

$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "Oldal {0} - {1} / {2}",
		emptyrecords: "Nincs tal찼lat",
		loadtext: "Bet철lt챕s...",
		pgtext : "Oldal {0} / {1}"
	},
	search : {
		caption: "Keres챕s...",
		Find: "Keres",
		Reset: "Alap챕rtelmezett",
		odata: [{ oper:'eq', text:"egyenl흷"},{ oper:'ne', text:"nem egyenl흷"},{ oper:'lt', text:"kevesebb"},{ oper:'le', text:"kevesebb vagy egyenl흷"},{ oper:'gt', text:"nagyobb"},{ oper:'ge', text:"nagyobb vagy egyenl흷"},{ oper:'bw', text:"ezzel kezd흷dik"},{ oper:'bn', text:"nem ezzel kezd흷dik"},{ oper:'in', text:"tartalmaz"},{ oper:'ni', text:"nem tartalmaz"},{ oper:'ew', text:"v챕gz흷dik"},{ oper:'en', text:"nem v챕gz흷dik"},{ oper:'cn', text:"tartalmaz"},{ oper:'nc', text:"nem tartalmaz"}],
		groupOps: [	{ op: "AND", text: "all" },	{ op: "OR",  text: "any" }	]
	},
	edit : {
		addCaption: "횣j t챕tel",
		editCaption: "T챕tel szerkeszt챕se",
		bSubmit: "Ment챕s",
		bCancel: "M챕gse",
		bClose: "Bez찼r찼s",
		saveData: "A t챕tel megv찼ltozott! T챕tel ment챕se?",
		bYes : "Igen",
		bNo : "Nem",
		bExit : "M챕gse",
		msg: {
			required:"K철telez흷 mez흷",
			number:"K챕rj체k, adjon meg egy helyes sz찼mot",
			minValue:"Nagyobb vagy egyenl흷nek kell lenni mint ",
			maxValue:"Kisebb vagy egyenl흷nek kell lennie mint",
			email: "hib찼s emailc챠m",
			integer: "K챕rj체k adjon meg egy helyes eg챕sz sz찼mot",
			date: "K챕rj체k adjon meg egy helyes d찼tumot",
			url: "nem helyes c챠m. El흷tag k철telez흷 ('http://' vagy 'https://')",
			nodefined : " nem defini찼lt!",
			novalue : " visszat챕r챕si 챕rt챕k k철telez흷!!",
			customarray : "Custom function should return array!",
			customfcheck : "Custom function should be present in case of custom checking!"
			
		}
	},
	view : {
		caption: "T챕tel megtekint챕se",
		bClose: "Bez찼r찼s"
	},
	del : {
		caption: "T철rl챕s",
		msg: "Kiv찼laztott t챕tel(ek) t철rl챕se?",
		bSubmit: "T철rl챕s",
		bCancel: "M챕gse"
	},
	nav : {
		edittext: "",
		edittitle: "T챕tel szerkeszt챕se",
		addtext:"",
		addtitle: "횣j t챕tel hozz찼ad찼sa",
		deltext: "",
		deltitle: "T챕tel t철rl챕se",
		searchtext: "",
		searchtitle: "Keres챕s",
		refreshtext: "",
		refreshtitle: "Friss챠t챕s",
		alertcap: "Figyelmeztet챕s",
		alerttext: "K챕rem v찼lasszon t챕telt.",
		viewtext: "",
		viewtitle: "T챕tel megtekint챕se"
	},
	col : {
		caption: "Oszlopok kiv찼laszt찼sa",
		bSubmit: "Ok",
		bCancel: "M챕gse"
	},
	errors : {
		errcap : "Hiba",
		nourl : "Nincs URL be찼ll챠tva",
		norecords: "Nincs feldolgoz찼sra v찼r처 t챕tel",
		model : "colNames 챕s colModel hossza nem egyenl흷!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
		currency : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0,00'},
		date : {
			dayNames:   [
				"Va", "H챕", "Ke", "Sze", "Cs체", "P챕", "Szo",
				"Vas찼rnap", "H챕tf흷", "Kedd", "Szerda", "Cs체t철rt철k", "P챕ntek", "Szombat"
			],
			monthNames: [
				"Jan", "Feb", "M찼r", "횁pr", "M찼j", "J첬n", "J첬l", "Aug", "Szep", "Okt", "Nov", "Dec",
				"Janu찼r", "Febru찼r", "M찼rcius", "횁prili", "M찼jus", "J첬nius", "J첬lius", "Augusztus", "Szeptember", "Okt처ber", "November", "December"
			],
			AmPm : ["de","du","DE","DU"],
			S: function (j) {return '.-ik';},
			srcformat: 'Y-m-d',
			newformat: 'Y/m/d',
			parseRe : /[Tt\\\/:_;.,\t\s-]/,
			masks : {
				ISO8601Long:"Y-m-d H:i:s",
				ISO8601Short:"Y-m-d",
				ShortDate: "Y/j/n",
				LongDate: "Y. F h처 d., l",
				FullDateTime: "l, F d, Y g:i:s A",
				MonthDay: "F d",
				ShortTime: "a g:i",
				LongTime: "a g:i:s",
				SortableDateTime: "Y-m-d\\TH:i:s",
				UniversalSortableDateTime: "Y-m-d H:i:sO",
				YearMonth: "Y, F"
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

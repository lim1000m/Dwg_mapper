;(function($){
/**
 * jqGrid Danish Translation
 * Aesiras A/S
 * http://www.aesiras.dk
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "Vis {0} - {1} of {2}",
	    emptyrecords: "Ingen linjer fundet",
		loadtext: "Henter...",
		pgtext : "Side {0} af {1}"
	},
	search : {
	    caption: "S첩g...",
	    Find: "Find",
	    Reset: "Nulstil",
	    odata: [{ oper:'eq', text:"lig"},{ oper:'ne', text:"forskellige fra"},{ oper:'lt', text:"mindre"},{ oper:'le', text:"mindre eller lig"},{ oper:'gt', text:"st첩rre"},{ oper:'ge', text:"st첩rre eller lig"},{ oper:'bw', text:"begynder med"},{ oper:'bn', text:"begynder ikke med"},{ oper:'in', text:"findes i"},{ oper:'ni', text:"findes ikke i"},{ oper:'ew', text:"ender med"},{ oper:'en', text:"ender ikke med"},{ oper:'cn', text:"indeholder"},{ oper:'nc', text:"indeholder ikke"}],
	    groupOps: [	{ op: "AND", text: "all" },	{ op: "OR",  text: "any" }	]
	},
	edit : {
	    addCaption: "Tilf첩j",
	    editCaption: "Ret",
	    bSubmit: "Send",
	    bCancel: "Annuller",
		bClose: "Luk",
		saveData: "Data er 챈ndret. Gem data?",
		bYes : "Ja",
		bNo : "Nej",
		bExit : "Fortryd",
	    msg: {
	        required:"Felt er n첩dvendigt",
	        number:"Indtast venligst et validt tal",
	        minValue:"v챈rdi skal v챈re st첩rre end eller lig med",
	        maxValue:"v챈rdi skal v챈re mindre end eller lig med",
	        email: "er ikke en gyldig email",
	        integer: "Indtast venligst et gyldigt heltal",
			date: "Indtast venligst en gyldig datov챈rdi",
			url: "er ugyldig URL. Prefix mangler ('http://' or 'https://')",
			nodefined : " er ikke defineret!",
			novalue : " returv챈rdi kr챈ves!",
			customarray : "Custom function should return array!",
			customfcheck : "Custom function should be present in case of custom checking!"
		}
	},
	view : {
	    caption: "Vis linje",
	    bClose: "Luk"
	},
	del : {
	    caption: "Slet",
	    msg: "Slet valgte linje(r)?",
	    bSubmit: "Slet",
	    bCancel: "Fortryd"
	},
	nav : {
		edittext: " ",
	    edittitle: "Rediger valgte linje",
		addtext:" ",
	    addtitle: "Tilf첩j ny linje",
	    deltext: " ",
	    deltitle: "Slet valgte linje",
	    searchtext: " ",
	    searchtitle: "Find linjer",
	    refreshtext: "",
	    refreshtitle: "Indl챈s igen",
	    alertcap: "Advarsel",
	    alerttext: "V챈lg venligst linje",
		viewtext: "",
		viewtitle: "Vis valgte linje"
	},
	col : {
	    caption: "Vis/skjul kolonner",
	    bSubmit: "Opdatere",
	    bCancel: "Fortryd"
	},
	errors : {
		errcap : "Fejl",
		nourl : "Ingen url valgt",
		norecords: "Ingen linjer at behandle",
	    model : "colNames og colModel har ikke samme l챈ngde!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
		currency : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0,00'},
		date : {
			dayNames:   [
				"S첩n", "Man", "Tir", "Ons", "Tor", "Fre", "L첩r",
				"S첩ndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "L첩rdag"
			],
			monthNames: [
				"Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec",
				"Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"
			],
			AmPm : ["","","",""],
			S: function (j) {return '.'},
			srcformat: 'Y-m-d',
			newformat: 'd/m/Y',
			parseRe : /[Tt\\\/:_;.,\t\s-]/,
			masks : {
	            ISO8601Long:"Y-m-d H:i:s",
	            ISO8601Short:"Y-m-d",
	            ShortDate: "j/n/Y",
	            LongDate: "l d. F Y",
	            FullDateTime: "l d F Y G:i:s",
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
});
// DA
})(jQuery);

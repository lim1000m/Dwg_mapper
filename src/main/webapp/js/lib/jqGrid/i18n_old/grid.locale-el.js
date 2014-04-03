;(function($){
/**
 * jqGrid Greek (el) Translation
 * Alex Cicovic
 * http://www.alexcicovic.com
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = {
	defaults : {
		recordtext: "View {0} - {1} of {2}",
	    emptyrecords: "No records to view",
		loadtext: "過?????管...",
		pgtext : "Page {0} of {1}"
	},
	search : {
	    caption: "?館慣瓘冠?管?管...",
	    Find: "???琯?管",
	    Reset: "??慣館慣?恝?郭",
	    odata : ['equal', 'not equal', 'less', 'less or equal','greater','greater or equal', 'begins with','does not begin with','is in','is not in','ends with','does not end with','contains','does not contain'],
	    groupOps: [	{ op: "AND", text: "all" },	{ op: "OR",  text: "any" }	],
		matchText: " match",
		rulesText: " rules"
	},
	edit : {
	    addCaption: "?菅?慣款?款冠 ?款款?慣?冠?",
	    editCaption: "??琯刮琯?款慣?官慣 ?款款?慣?冠?",
	    bSubmit: "?慣?慣???管?管",
	    bCancel: "?觀??恝",
		bClose: "?貫琯官?菅關恝",
		saveData: "Data has been changed! Save changes?",
		bYes : "Yes",
		bNo : "No",
		bExit : "Cancel",
	    msg: {
	        required:"課恝 ?琯灌官恝 琯官館慣菅 慣?慣?慣官?管?恝",
	        number:"課恝 ?琯灌官恝 灌串?琯?慣菅 關?館恝 慣?菅罐關恝??",
	        minValue:"? ?菅關冠 ??串?琯菅 館慣 琯官館慣菅 關琯款慣貫??琯?管 冠 官?管 ?恝? ",
	        maxValue:"? ?菅關冠 ??串?琯菅 館慣 琯官館慣菅 關菅觀???琯?管 冠 官?管 ?恝? ",
	        email: "? 灌菅琯?罐?館?管 e-mail 灌琯館 琯官館慣菅 串款觀??管",
	        integer: "課恝 ?琯灌官恝 灌串?琯?慣菅 關?館恝 慣觀串?慣菅恝?? 慣?菅罐關恝??",
			url: "is not a valid URL. Prefix required ('http://' or 'https://')",
			nodefined : " is not defined!",
			novalue : " return value is required!",
			customarray : "Custom function should return array!",
			customfcheck : "Custom function should be present in case of custom checking!"
		}
	},
	view : {
	    caption: "View Record",
	    bClose: "Close"
	},
	del : {
	    caption: "?菅慣款?慣?冠",
	    msg: "?菅慣款?慣?冠 ??館 琯?菅貫琯款關串館?館 琯款款?慣??館;",
	    bSubmit: "?慣菅",
	    bCancel: "?觀??恝"
	},
	nav : {
		edittext: " ",
	    edittitle: "??琯刮琯?款慣?官慣 琯?菅貫琯款關串館管? 琯款款?慣?冠?",
		addtext:" ",
	    addtitle: "?菅?慣款?款冠 館串慣? 琯款款?慣?冠?",
	    deltext: " ",
	    deltitle: "?菅慣款?慣?冠 琯?菅貫琯款關串館管? 琯款款?慣?冠?",
	    searchtext: " ",
	    searchtitle: "???琯?管 ?款款?慣??館",
	    refreshtext: "",
	    refreshtitle: "?館慣館串??管 ?官館慣觀慣",
	    alertcap: "??恝?恝?冠",
	    alerttext: "?琯館 串?琯?琯 琯?菅貫串刮琯菅 琯款款?慣?冠",
		viewtext: "",
		viewtitle: "View selected row"
	},
	col : {
	    caption: "?關?郭館菅?管 / ???觀???管 誇?管貫?館",
	    bSubmit: "??",
	    bCancel: "?觀??恝"
	},
	errors : {
		errcap : "誇?郭貫關慣",
		nourl : "?琯館 串?琯菅 灌恝罐琯官 灌菅琯?罐?館?管 ?琯菅?菅?關恝? 款菅慣 ?管 ??款觀琯觀?菅關串館管 琯館串?款琯菅慣",
		norecords: "?琯館 ??郭??恝?館 琯款款?慣?串? ??恝? 琯?琯刮琯?款慣?官慣",
		model : "?館菅?恝? 慣?菅罐關?? ?琯灌官?館 colNames/colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"???", "?琯?", "課?菅", "課琯?", "?琯關", "?慣?", "誇慣棺",
				"???菅慣觀冠", "?琯??串?慣", "課?官?管", "課琯?郭??管", "?串關??管", "?慣?慣?觀琯?冠", "誇郭棺棺慣?恝"
			],
			monthNames: [
				"?慣館", "過琯棺", "?慣?", "???", "?慣菅", "?恝?館", "?恝?貫", "??款", "誇琯?", "?觀?", "?恝琯", "?琯觀",
				"?慣館恝?郭?菅恝?", "過琯棺?恝?郭?菅恝?", "?郭??菅恝?", "???官貫菅恝?", "?郭菅恝?", "?恝?館菅恝?", "?恝?貫菅恝?", "??款恝???恝?", "誇琯??串關棺?菅恝?", "?觀??棺?菅恝?", "?恝串關棺?菅恝?", "?琯觀串關棺?菅恝?"
			],
			AmPm : ["?關","關關","??","??"],
			S: function (j) {return j == 1 || j > 1 ? ['管'][Math.min((j - 1) % 10, 3)] : ''},
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

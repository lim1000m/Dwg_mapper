;(function($){
/**
 * jqGrid Russian Translation v1.0 02.07.2009 (based on translation by Alexey Kanaev v1.1 21.01.2009, http://softcore.com.ru)
 * Sergey Dyagovchenko
 * http://d.sumy.ua
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "??棘?劇棘?? {0} - {1} 龜鈞 {2}",
	  emptyrecords: "?筠? 鈞逵極龜?筠橘 畇剋? 極?棘?劇棘??逵",
		loadtext: "?逵均??鈞克逵...",
		pgtext : "鬼??. {0} 龜鈞 {1}"
	},
	search : {
    caption: "?棘龜?克...",
    Find: "?逵橘?龜",
    Reset: "鬼閨?棘?",
    odata: [{ oper:'eq', text:"?逵勻戟棘"},{ oper:'ne', text:"戟筠 ?逵勻戟棘"},{ oper:'lt', text:"劇筠戟??筠"},{ oper:'le', text:"劇筠戟??筠 龜剋龜 ?逵勻戟棘"},{ oper:'gt', text:"閨棘剋??筠"},{ oper:'ge', text:"閨棘剋??筠 龜剋龜 ?逵勻戟棘"},{ oper:'bw', text:"戟逵?龜戟逵筠??? ?"},{ oper:'bn', text:"戟筠 戟逵?龜戟逵筠??? ?"},{ oper:'in', text:"戟逵?棘畇龜??? 勻"},{ oper:'ni', text:"戟筠 戟逵?棘畇龜??? 勻"},{ oper:'ew', text:"鈞逵克逵戟?龜勻逵筠??? 戟逵"},{ oper:'en', text:"戟筠 鈞逵克逵戟?龜勻逵筠??? 戟逵"},{ oper:'cn', text:"?棘畇筠?菌龜?"},{ oper:'nc', text:"戟筠 ?棘畇筠?菌龜?"}],
    groupOps: [	{ op: "AND", text: "勻?筠" },	{ op: "OR",  text: "剋?閨棘橘" }	]
	},
	edit : {
    addCaption: "?棘閨逵勻龜?? 鈞逵極龜??",
    editCaption: "?筠畇逵克?龜?棘勻逵?? 鈞逵極龜??",
    bSubmit: "鬼棘??逵戟龜??",
    bCancel: "??劇筠戟逵",
		bClose: "?逵克????",
		saveData: "?逵戟戟?筠 閨?剋龜 龜鈞劇筠戟筠戟戟?! 鬼棘??逵戟龜?? 龜鈞劇筠戟筠戟龜??",
		bYes : "?逵",
		bNo : "?筠?",
		bExit : "??劇筠戟逵",
	    msg: {
        required:"?棘剋筠 ?勻剋?筠??? 棘閨?鈞逵?筠剋?戟?劇",
        number:"?棘菌逵剋?橘??逵, 勻勻筠畇龜?筠 極?逵勻龜剋?戟棘筠 ?龜?剋棘",
        minValue:"鈞戟逵?筠戟龜筠 畇棘剋菌戟棘 閨??? 閨棘剋??筠 剋龜閨棘 ?逵勻戟棘",
        maxValue:"鈞戟逵?筠戟龜筠 畇棘剋菌戟棘 閨??? 劇筠戟??筠 剋龜閨棘 ?逵勻戟棘",
        email: "戟筠克棘??筠克?戟棘筠 鈞戟逵?筠戟龜筠 e-mail",
        integer: "?棘菌逵剋?橘??逵, 勻勻筠畇龜?筠 ?筠剋棘筠 ?龜?剋棘",
        date: "?棘菌逵剋?橘??逵, 勻勻筠畇龜?筠 極?逵勻龜剋?戟?? 畇逵??",
        url: "戟筠勻筠?戟逵? ???剋克逵. ?筠棘閨?棘畇龜劇棘 勻勻筠??龜 極?筠?龜克? ('http://' 龜剋龜 'https://')",
		nodefined : " 戟筠 棘極?筠畇筠剋筠戟棘!",
		novalue : " 勻棘鈞勻?逵?逵筠劇棘筠 鈞戟逵?筠戟龜筠 棘閨?鈞逵?筠剋?戟棘!",
		customarray : "?棘剋?鈞棘勻逵?筠剋??克逵? ??戟克?龜? 畇棘剋菌戟逵 勻棘鈞勻?逵?逵?? 劇逵??龜勻!",
		customfcheck : "?棘剋?鈞棘勻逵?筠剋??克逵? ??戟克?龜? 畇棘剋菌戟逵 極?龜?????勻棘勻逵?? 勻 ?剋??逵龜 極棘剋?鈞棘勻逵?筠剋??克棘橘 極?棘勻筠?克龜!"
		}
	},
	view : {
	    caption: "??棘?劇棘?? 鈞逵極龜?龜",
	    bClose: "?逵克????"
	},
	del : {
	    caption: "叫畇逵剋龜??",
	    msg: "叫畇逵剋龜?? 勻?閨?逵戟戟?? 鈞逵極龜??(龜)?",
	    bSubmit: "叫畇逵剋龜??",
	    bCancel: "??劇筠戟逵"
	},
	nav : {
  		edittext: " ",
	    edittitle: "?筠畇逵克?龜?棘勻逵?? 勻?閨?逵戟戟?? 鈞逵極龜??",
  		addtext:" ",
	    addtitle: "?棘閨逵勻龜?? 戟棘勻?? 鈞逵極龜??",
	    deltext: " ",
	    deltitle: "叫畇逵剋龜?? 勻?閨?逵戟戟?? 鈞逵極龜??",
	    searchtext: " ",
	    searchtitle: "?逵橘?龜 鈞逵極龜?龜",
	    refreshtext: "",
	    refreshtitle: "?閨戟棘勻龜?? ?逵閨剋龜??",
	    alertcap: "?戟龜劇逵戟龜筠",
	    alerttext: "?棘菌逵剋?橘??逵, 勻?閨筠?龜?筠 鈞逵極龜??",
  		viewtext: "",
  		viewtitle: "??棘?劇棘??筠?? 勻?閨?逵戟戟?? 鈞逵極龜??"
	},
	col : {
	    caption: "?棘克逵鈞逵??/?克???? ??棘剋閨??",
	    bSubmit: "鬼棘??逵戟龜??",
	    bCancel: "??劇筠戟逵"	
	},
	errors : {
		errcap : "??龜閨克逵",
		nourl : "URL 戟筠 ???逵戟棘勻剋筠戟",
		norecords: "?筠? 鈞逵極龜?筠橘 畇剋? 棘閨?逵閨棘?克龜",
    model : "槻龜?剋棘 極棘剋筠橘 戟筠 ?棘棘?勻筠???勻?筠? ?龜?剋? ??棘剋閨?棘勻 ?逵閨剋龜??!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
		currency : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0,00'},
		date : {
			dayNames:   [
				"??", "?戟", "??", "鬼?", "槻?", "??", "鬼閨",
				"?棘?克?筠?筠戟龜筠", "?棘戟筠畇筠剋?戟龜克", "??棘?戟龜克", "鬼?筠畇逵", "槻筠?勻筠?均", "???戟龜?逵", "鬼?閨閨棘?逵"
			],
			monthNames: [
				"赳戟勻", "圭筠勻", "?逵?", "?極?", "?逵橘", "??戟", "??剋", "?勻均", "鬼筠戟", "?克?", "?棘?", "?筠克",
				"赳戟勻逵??", "圭筠勻?逵剋?", "?逵??", "?極?筠剋?", "?逵橘", "??戟?", "??剋?", "?勻均???", "鬼筠戟??閨??", "?克??閨??", "?棘?閨??", "?筠克逵閨??"
			],
			AmPm : ["am","pm","AM","PM"],
			S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
			srcformat: 'Y-m-d',
			newformat: 'd.m.Y',
			parseRe : /[Tt\\\/:_;.,\t\s-]/,
			masks : {
	            ISO8601Long:"Y-m-d H:i:s",
	            ISO8601Short:"Y-m-d",
	            ShortDate: "n.j.Y",
	            LongDate: "l, F d, Y",
	            FullDateTime: "l, F d, Y G:i:s",
	            MonthDay: "F d",
	            ShortTime: "G:i",
	            LongTime: "G:i:s",
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

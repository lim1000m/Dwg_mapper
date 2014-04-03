;(function($){
/**
 * jqGrid Ukrainian Translation v1.0 02.07.2009
 * Sergey Dyagovchenko
 * http://d.sumy.ua
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = {
	defaults : {
		recordtext: "?筠?筠均剋?畇 {0} - {1} 鈞 {2}",
	  emptyrecords: "?筠劇逵? 鈞逵極龜??勻 畇剋? 極筠?筠均剋?畇?",
		loadtext: "?逵勻逵戟?逵菌筠戟戟?...",
		pgtext : "鬼?棘?. {0} 鈞 {1}"
	},
	search : {
    caption: "?棘??克...",
    Find: "?戟逵橘?龜",
    Reset: "鬼克龜畇逵戟戟?",
    odata : ['??勻戟棘', '戟筠 ??勻戟棘', '劇筠戟?筠', '劇筠戟?筠 逵閨棘 ??勻戟筠','閨?剋??筠','閨?剋??筠 逵閨棘 ??勻戟筠', '極棘?龜戟逵????? 鈞','戟筠 極棘?龜戟逵????? 鈞','鈞戟逵?棘畇龜???? 勻','戟筠 鈞戟逵?棘畇龜???? 勻','鈞逵克?戟??????? 戟逵','戟筠 鈞逵克?戟??????? 戟逵','劇???龜??','戟筠 劇???龜??'],
    groupOps: [	{ op: "AND", text: "勻?筠" },	{ op: "OR",  text: "閨?畇?-?克龜橘" }	],
    matchText: " 鈞閨?均逵?????",
    rulesText: " 極?逵勻龜剋逵"
	},
	edit : {
    addCaption: "?棘畇逵?龜 鈞逵極龜?",
    editCaption: "?劇?戟龜?龜 鈞逵極龜?",
    bSubmit: "?閨筠?筠均?龜",
    bCancel: "??畇劇?戟逵",
		bClose: "?逵克?龜?龜",
		saveData: "?棘 畇逵戟戟龜? 閨?剋龜 勻戟筠?筠戟? 鈞劇?戟龜! ?閨筠?筠均?龜 鈞劇?戟龜?",
		bYes : "龜逵克",
		bNo : "??",
		bExit : "??畇劇?戟逵",
	    msg: {
        required:"?棘剋筠 ? 棘閨棘勻'?鈞克棘勻龜劇",
        number:"??畇? 剋逵?克逵, 勻勻筠畇??? 極?逵勻龜剋?戟筠 ?龜?剋棘",
        minValue:"鈞戟逵?筠戟戟? 極棘勻龜戟戟筠 閨??龜 閨?剋??筠 逵閨棘 畇棘??勻戟??",
        maxValue:"鈞戟逵?筠戟戟? 極棘勻龜戟戟棘 閨??龜 劇筠戟?筠 逵閨棘 畇棘??勻戟??",
        email: "戟筠克棘?筠克?戟逵 逵畇?筠?逵 筠剋筠克??棘戟戟棘? 極棘??龜",
        integer: "??畇? 剋逵?克逵, 勻勻筠畇筠戟戟? 畇?橘?戟筠 ??剋筠 鈞戟逵?筠戟戟?",
        date: "??畇? 剋逵?克逵, 勻勻筠畇筠戟戟? 畇?橘?戟筠 鈞戟逵?筠戟戟? 畇逵?龜",
        url: "戟筠 畇?橘?戟龜橘 URL. ?筠棘閨??畇戟逵 極?龜??逵勻克逵 ('http://' or 'https://')",
		nodefined : " is not defined!",
		novalue : " return value is required!",
		customarray : "Custom function should return array!",
		customfcheck : "Custom function should be present in case of custom checking!"
		}
	},
	view : {
	    caption: "?筠?筠均剋?戟??龜 鈞逵極龜?",
	    bClose: "?逵克?龜?龜"
	},
	del : {
	    caption: "?龜畇逵剋龜?龜",
	    msg: "?龜畇逵剋龜?龜 棘閨?逵戟龜橘 鈞逵極龜?(龜)?",
	    bSubmit: "?龜畇逵剋龜?龜",
	    bCancel: "??畇劇?戟逵"
	},
	nav : {
  		edittext: " ",
	    edittitle: "?劇?戟龜?龜 勻龜閨?逵戟龜橘 鈞逵極龜?",
  		addtext:" ",
	    addtitle: "?棘畇逵?龜 戟棘勻龜橘 鈞逵極龜?",
	    deltext: " ",
	    deltitle: "?龜畇逵剋龜?龜 勻龜閨?逵戟龜橘 鈞逵極龜?",
	    searchtext: " ",
	    searchtitle: "?戟逵橘?龜 鈞逵極龜?龜",
	    refreshtext: "",
	    refreshtitle: "?戟棘勻龜?龜 ?逵閨剋龜??",
	    alertcap: "?棘極筠?筠畇菌筠戟戟?",
	    alerttext: "??畇? 剋逵?克逵, 勻龜閨筠???? 鈞逵極龜?",
  		viewtext: "",
  		viewtitle: "?筠?筠均剋?戟??龜 棘閨?逵戟龜橘 鈞逵極龜?"
	},
	col : {
	    caption: "?棘克逵鈞逵?龜/??龜?棘勻逵?龜 ??棘勻極??",
	    bSubmit: "?閨筠?筠均?龜",
	    bCancel: "??畇劇?戟逵"
	},
	errors : {
		errcap : "?棘劇龜剋克逵",
		nourl : "URL 戟筠 鈞逵畇逵戟",
		norecords: "?筠劇逵? 鈞逵極龜??勻 畇剋? 棘閨?棘閨克龜",
    model : "槻龜?剋棘 極棘剋?勻 戟筠 勻?畇極棘勻?畇逵? ?龜?剋? ??棘勻極??勻 ?逵閨剋龜??!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
		currency : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0,00'},
		date : {
			dayNames:   [
				"?畇", "?戟", "??", "鬼?", "槻?", "??", "鬼閨",
				"?筠畇?剋?", "?棘戟筠畇?剋棘克", "??勻?棘?棘克", "鬼筠?筠畇逵", "槻筠?勻筠?", "?'??戟龜??", "鬼?閨棘?逵"
			],
			monthNames: [
				"鬼??", "???", "?筠?", "?勻?", "龜?逵", "槻筠?", "?龜極", "鬼筠?", "?筠?", "?棘勻", "?龜?", "???",
				"鬼??筠戟?", "???龜橘", "?筠?筠鈞筠戟?", "?勻??筠戟?", "龜?逵勻筠戟?", "槻筠?勻筠戟?", "?龜極筠戟?", "鬼筠?極筠戟?", "?筠?筠?筠戟?", "?棘勻?筠戟?", "?龜??棘極逵畇", "???畇筠戟?"
			],
			AmPm : ["am","pm","AM","PM"],
			S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
			srcformat: 'Y-m-d',
			newformat: 'd.m.Y',
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
};
})(jQuery);

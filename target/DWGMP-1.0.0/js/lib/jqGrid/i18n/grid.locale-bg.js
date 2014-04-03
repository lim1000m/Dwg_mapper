;(function($){
/**
 * jqGrid Bulgarian Translation 
 * Tony Tomov tony@trirand.com
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "{0} - {1} 棘? {2}",
		emptyrecords: "??劇逵 鈞逵極龜?(龜)",
		loadtext: "?逵?筠菌畇逵劇...",
		pgtext : "鬼??. {0} 棘? {1}"
	},
	search : {
		caption: "龜???筠戟筠...",
		Find: "?逵劇筠?龜",
		Reset: "?鈞?龜??龜",
		odata: [{ oper:'eq', text:"?逵勻戟棘"},{ oper:'ne', text:"?逵鈞剋龜?戟棘"},{ oper:'lt', text:"極棘-劇逵剋克棘"},{ oper:'le', text:"極棘-劇逵剋克棘 龜剋龜="},{ oper:'gt', text:"極棘-均棘剋?劇棘"},{ oper:'ge', text:"極棘-均棘剋?劇棘 龜剋龜 ="},{ oper:'bw', text:"鈞逵極棘?勻逵 ?"},{ oper:'bn', text:"戟筠 鈞逵極棘?勻逵 ?"},{ oper:'in', text:"?筠 戟逵劇龜?逵 勻"},{ oper:'ni', text:"戟筠 ?筠 戟逵劇龜?逵 勻"},{ oper:'ew', text:"鈞逵勻???勻逵 ?"},{ oper:'en', text:"戟筠 鈞逵勻???逵勻逵 ?"},{ oper:'cn', text:"??畇??菌逵"},{ oper:'nc', text:"戟筠 ??畇??菌逵"}],
	    groupOps: [	{ op: "AND", text: "&nbsp;? " },	{ op: "OR",  text: "???" }	]
	},
	edit : {
		addCaption: "?棘勻 ?逵極龜?",
		editCaption: "?筠畇逵克?龜? ?逵極龜?",
		bSubmit: "?逵極龜?龜",
		bCancel: "?鈞?棘畇",
		bClose: "?逵?勻棘?龜",
		saveData: "?逵戟戟龜?筠 ?逵 極?棘劇筠戟筠戟龜! ?逵 ????逵戟? 剋龜 極?棘劇筠戟龜?筠?",
		bYes : "?逵",
		bNo : "?筠",
		bExit : "??克逵鈞",
		msg: {
			required:"?棘剋筠?棘 筠 鈞逵畇?剋菌龜?筠剋戟棘",
			number:"??勻筠畇筠?筠 勻逵剋龜畇戟棘 ?龜?剋棘!",
			minValue:"??棘橘戟棘???逵 ???閨勻逵 畇逵 筠 極棘-均棘剋?劇逵 龜剋龜 ?逵勻戟逵 棘?",
			maxValue:"??棘橘戟棘???逵 ???閨勻逵 畇逵 筠 極棘-劇逵剋克逵 龜剋龜 ?逵勻戟逵 棘?",
			email: "戟筠 筠 勻逵剋龜畇筠戟 筠剋. 逵畇?筠?",
			integer: "??勻筠畇筠?筠 勻逵剋龜畇戟棘 ??剋棘 ?龜?剋棘",
			date: "??勻筠畇筠?筠 勻逵剋龜畇戟逵 畇逵?逵",
			url: "e 戟筠勻逵剋龜畇筠戟 URL. ?鈞龜?克逵勻逵 ?筠 極?筠?龜克?('http://' 龜剋龜 'https://')",
			nodefined : " 筠 戟筠畇筠?龜戟龜?逵戟逵!",
			novalue : " 龜鈞龜?克勻逵 勻???逵戟筠 戟逵 ??棘橘戟棘??!",
			customarray : "?棘??筠閨. 圭?戟克?龜? ???閨勻逵 畇逵 勻??戟筠 劇逵?龜勻!",
			customfcheck : "?棘??筠閨龜?筠剋?克逵 ??戟克?龜? 筠 鈞逵畇?剋菌龜?筠剋戟逵 極?龜 ?棘鈞龜 ?龜極 筠剋筠劇筠戟?!"
		}
	},
	view : {
		caption: "??筠均剋筠畇 鈞逵極龜?",
		bClose: "?逵?勻棘?龜"
	},
	del : {
		caption: "?鈞??龜勻逵戟筠",
		msg: "?逵 龜鈞??龜? 剋龜 龜鈞閨?逵戟龜?? 鈞逵極龜??",
		bSubmit: "?鈞??龜橘",
		bCancel: "??克逵鈞"
	},
	nav : {
		edittext: " ",
		edittitle: "?筠畇逵克?龜? 龜鈞閨?逵戟 鈞逵極龜?",
		addtext:" ",
		addtitle: "?棘閨逵勻?戟筠 戟棘勻 鈞逵極龜?",
		deltext: " ",
		deltitle: "?鈞??龜勻逵戟筠 龜鈞閨?逵戟 鈞逵極龜?",
		searchtext: " ",
		searchtitle: "龜???筠戟筠 鈞逵極龜?(龜)",
		refreshtext: "",
		refreshtitle: "?閨戟棘勻龜 ?逵閨剋龜?逵",
		alertcap: "??筠畇?極?筠菌畇筠戟龜筠",
		alerttext: "?棘剋?, 龜鈞閨筠?筠?筠 鈞逵極龜?",
		viewtext: "",
		viewtitle: "??筠均剋筠畇 龜鈞閨?逵戟 鈞逵極龜?"
	},
	col : {
		caption: "?鈞閨筠?龜 克棘剋棘戟龜",
		bSubmit: "?克",
		bCancel: "?鈞?棘畇"	
	},
	errors : {
		errcap : "??筠?克逵",
		nourl : "??劇逵 極棘?棘?筠戟 url 逵畇?筠?",
		norecords: "??劇逵 鈞逵極龜? 鈞逵 棘閨?逵閨棘?克逵",
		model : "?棘畇筠剋逵 戟筠 ??棘?勻筠???勻逵 戟逵 龜劇筠戟逵?逵!"	
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:" 剋勻.", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"?筠畇", "?棘戟", "??", "鬼?", "槻筠?", "?筠?", "鬼?閨",
				"?筠畇筠剋?", "?棘戟筠畇筠剋戟龜克", "??棘?戟龜克", "鬼??畇逵", "槻筠?勻????克", "?筠??克", "鬼?閨棘?逵"
			],
			monthNames: [
				"赳戟?", "圭筠勻", "?逵?", "?極?", "?逵橘", "規戟龜", "規剋龜", "?勻均", "鬼筠極", "?克?", "?棘勻", "?筠克",
				"赳戟?逵?龜", "圭筠勻??逵?龜", "?逵??", "?極?龜剋", "?逵橘", "規戟龜", "規剋龜", "?勻均???", "鬼筠極?筠劇勻?龜", "?克?棘劇勻?龜", "?棘筠劇勻?龜", "?筠克筠劇勻?龜"
			],
			AmPm : ["","","",""],
			S: function (j) {
				if(j==7 || j==8 || j== 27 || j== 28) {
					return '劇龜';
				}
				return ['勻龜', '?龜', '?龜'][Math.min((j - 1) % 10, 2)];
			},
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

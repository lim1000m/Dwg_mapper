;(function($){
/**
 * jqGrid English Translation
 * Tony Tomov tony@trirand.com
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "蹂닿린 {0} - {1} / {2}",
		emptyrecords: "?쒖떆???됱씠 ?놁뒿?덈떎",
		loadtext: "議고쉶以?..",
		pgtext : "?섏씠吏 {0} / {1}"
	},
	search : {
		caption: "寃??..",
		Find: "李얘린",
		Reset: "珥덇린??,
		odata: [{ oper:'eq', text:"媛숇떎"},{ oper:'ne', text:"媛숈? ?딅떎"},{ oper:'lt', text:"?묐떎"},{ oper:'le', text:"?묎굅??媛숇떎"},{ oper:'gt', text:"?щ떎"},{ oper:'ge', text:"?ш굅??媛숇떎"},{ oper:'bw', text:"濡??쒖옉?쒕떎"},{ oper:'bn', text:"濡??쒖옉?섏? ?딅뒗??},{ oper:'in', text:"?댁뿉 ?덈떎"},{ oper:'ni', text:"?댁뿉 ?덉? ?딅떎"},{ oper:'ew', text:"濡??앸궃??},{ oper:'en', text:"濡??앸굹吏 ?딅뒗??},{ oper:'cn', text:"?댁뿉 議댁옱?쒕떎"},{ oper:'nc', text:"?댁뿉 議댁옱?섏? ?딅뒗??}],
		groupOps: [	{ op: "AND", text: "?꾨?" },	{ op: "OR",  text: "?꾩쓽" }	]
	},
	edit : {
		addCaption: "??異붽?",
		editCaption: "???섏젙",
		bSubmit: "?꾩넚",
		bCancel: "痍⑥냼",
		bClose: "?リ린",
		saveData: "?먮즺媛 蹂寃쎈릺?덉뒿?덈떎! ??ν븯?쒓쿋?듬땲源?",
		bYes : "??,
		bNo : "?꾨땲??,
		bExit : "痍⑥냼",
		msg: {
			required:"?꾩닔??ぉ?낅땲??,
			number:"?좏슚??踰덊샇瑜??낅젰??二쇱꽭??,
			minValue:"?낅젰媛믪? ?ш굅??媛숈븘???⑸땲??,
			maxValue:"?낅젰媛믪? ?묎굅??媛숈븘???⑸땲??,
			email: "?좏슚?섏? ?딆? ?대찓?쇱＜?뚯엯?덈떎",
			integer: "?좏슚???レ옄瑜??낅젰?섏꽭??,
			date: "?좏슚???좎쭨瑜??낅젰?섏꽭??,
			url: "? ?좏슚?섏? ?딆? URL?낅땲?? 臾몄옣?욎뿉 ?ㅼ쓬?⑥뼱媛 ?꾩슂?⑸땲??'http://' or 'https://')",
			nodefined : " ? ?뺤쓽?꾩? ?딆븯?듬땲??",
			novalue : " 諛섑솚媛믪씠 ?꾩슂?⑸땲??",
			customarray : "?ъ슜?먯젙???⑥닔??諛곗뿴??諛섑솚?댁빞 ?⑸땲??",
			customfcheck : "Custom function should be present in case of custom checking!"
			
		}
	},
	view : {
		caption: "??議고쉶",
		bClose: "?リ린"
	},
	del : {
		caption: "??젣",
		msg: "?좏깮???됱쓣 ??젣?섏떆寃좎뒿?덇퉴?",
		bSubmit: "??젣",
		bCancel: "痍⑥냼"
	},
	nav : {
		edittext: "",
		edittitle: "?좏깮?????몄쭛",
		addtext:"",
		addtitle: "???쎌엯",
		deltext: "",
		deltitle: "?좏깮??????젣",
		searchtext: "",
		searchtitle: "??李얘린",
		refreshtext: "",
		refreshtitle: "洹몃━??媛깆떊",
		alertcap: "寃쎄퀬",
		alerttext: "?됱쓣 ?좏깮?섏꽭??,
		viewtext: "",
		viewtitle: "?좏깮????議고쉶"
	},
	col : {
		caption: "?댁쓣 ?좏깮?섏꽭??,
		bSubmit: "?뺤씤",
		bCancel: "痍⑥냼"
	},
	errors : {
		errcap : "?ㅻ쪟",
		nourl : "?ㅼ젙??url???놁뒿?덈떎",
		norecords: "泥섎━???됱씠 ?놁뒿?덈떎",
		model : "colNames??湲몄씠媛 colModel怨??쇱튂?섏? ?딆뒿?덈떎!"
	},
	formatter : {
		integer : {thousandsSeparator: ",", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat",
				"??, "??, "??, "??, "紐?, "湲?, "??
			],
			monthNames: [
				"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
				"1??, "2??, "3??, "4??, "5??, "6??, "7??, "8??, "9??, "10??, "11??, "12??
			],
			AmPm : ["am","pm","AM","PM"],
			S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
			srcformat: 'Y-m-d',
			newformat: 'm-d-Y',
			parseRe : /[Tt\\\/:_;.,\t\s-]/,
			masks : {
				ISO8601Long:"Y-m-d H:i:s",
				ISO8601Short:"Y-m-d",
				ShortDate: "Y/j/n",
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

;(function($){
/**
 * jqGrid Chinese (Taiwan) Translation for v4.2
 * linquize
 * https://github.com/linquize/jqGrid
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * 
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "{0} - {1} ??{2} 歟?,
		emptyrecords: "亦믤쐣鼇섌똾",
		loadtext: "雍됧뀯訝?..",
		pgtext : " {0} ??{1} ??
	},
	search : {
		caption: "?쒎컠...",
		Find: "?쒎컠",
		Reset: "?띹Þ",
		odata: [{ oper:'eq', text:"嶺됪뼹 "},{ oper:'ne', text:"訝띸춬??"},{ oper:'lt', text:"弱뤸뼹 "},{ oper:'le', text:"弱뤸뼹嶺됪뼹 "},{ oper:'gt', text:"鸚㎪뼹 "},{ oper:'ge', text:"鸚㎪뼹嶺됪뼹 "},{ oper:'bw', text:"?뗥쭓??"},{ oper:'bn', text:"訝띺뼀冶뗦뼹 "},{ oper:'in', text:"?ⓨ끀訝?"},{ oper:'ni', text:"訝띶쑉?뜸릎 "},{ oper:'ew', text:"永먩씇??"},{ oper:'en', text:"訝띸탳?잍뼹 "},{ oper:'cn', text:"?끻맜 "},{ oper:'nc', text:"訝띶똿??"}],
		groupOps: [	{ op: "AND", text: "??? },	{ op: "OR",  text: "餓삡?" }	]
	},
	edit : {
		addCaption: "?겼쥭鼇섌똾",
		editCaption: "渶②섞鼇섌똾",
		bSubmit: "?먧벡",
		bCancel: "?뽪텋",
		bClose: "?쒒뻾",
		saveData: "蘊뉑뼑藥꿩뵻溫딉펽??맔?꿨춼竊?,
		bYes : "??,
		bNo : "??,
		bExit : "?뽪텋",
		msg: {
			required:"閭ㅶ쵂恙낁쫨",
			number:"獄뗨섯?ζ쐣?덄쉪?멨춻",
			minValue:"?쇔퓚?덂ㄷ?쇘춬??",
			maxValue:"?쇔퓚?덂컦?쇘춬??",
			email: "訝띷삸?됪븞?꼌-mail?겼?",
			integer: "獄뗨섯?ζ쐣?덃빐??,
			date: "獄뗨섯?ζ쐣?덃셽??,
			url: "泳꿨??→븞?귛뎺泳닷퓚?덄궨 ('http://' ??'https://')",
			nodefined : " ?ゅ츣獰⑼펯",
			novalue : " ?誤곩궠?욃쇽펯",
			customarray : "?よ쮥?썸빖?됧궠?욇솭?쀯펯",
			customfcheck : "?よ쮥茹€윥?됪쐣?よ쮥?썸빖竊?
			
		}
	},
	view : {
		caption: "?η쐦鼇섌똾",
		bClose: "?쒒뻾"
	},
	del : {
		caption: "?ら솮",
		msg: "?ら솮藥꿴겦鼇섌똾竊?,
		bSubmit: "?ら솮",
		bCancel: "?뽪텋"
	},
	nav : {
		edittext: "",
		edittitle: "渶②섞藥꿴겦??,
		addtext:"",
		addtitle: "?겼쥭??,
		deltext: "",
		deltitle: "?ら솮藥꿴겦??,
		searchtext: "",
		searchtitle: "?쒎컠鼇섌똾",
		refreshtext: "",
		refreshtitle: "?띷뼭?당릤烏ⓩ졏",
		alertcap: "鈺?몜",
		alerttext: "獄뗩겦?뉐닓",
		viewtext: "",
		viewtitle: "茹?쫿藥꿴겦??
	},
	col : {
		caption: "?멩뱡轝?,
		bSubmit: "閻뷴츣",
		bCancel: "?뽪텋"
	},
	errors : {
		errcap : "??い",
		nourl : "?よÞ若쉀RL",
		norecords: "?↓?誤곮솗?녺쉪鼇섌똾",
		model : "colNames ??colModel ?룟벧訝띶릪竊?
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"??, "訝", "雅?, "訝?, "??, "雅?, "??,
		         "?잍쐿??, "?잍쐿訝", "?잍쐿雅?, "?잍쐿訝?, "?잍쐿??, "?잍쐿雅?, "?잍쐿??
			],
			monthNames: [
				"訝", "雅?, "訝?, "??, "雅?, "??, "訝?, "??, "阿?, "??, "?곦?", "?곦틠",
				"訝??, "雅뚧쐢", "訝됪쐢", "?쎿쐢", "雅붹쐢", "??쐢", "訝껅쐢", "?ユ쐢", "阿앮쐢", "?곫쐢", "?곦???, "?곦틠??
			],
			AmPm : ["訝듿뜄","訝뗥뜄","訝듿뜄","訝뗥뜄"],
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

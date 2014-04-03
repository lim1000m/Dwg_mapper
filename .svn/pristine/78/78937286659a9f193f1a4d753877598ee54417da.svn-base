;(function($){
/**
 * jqGrid Chinese Translation for v3.6
 * waiting 2010.01.18
 * http://waiting.javaeye.com/
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * 
 * update 2010.05.04
 *		add double u3000 SPACE for search:odata to fix SEARCH box display err when narrow width from only use of eq/ne/cn/in/lt/gt operator under IE6/7
**/
$.jgrid = {
	defaults : {
		recordtext: "{0} - {1}\u3000??{2} ??,	// ?긷춻?띷삸?②쭜令뷸졏
		emptyrecords: "?졿빊??샑鹽?,
		loadtext: "瑥삣룚訝?..",
		pgtext : " {0} ??{1} 窈?
	},
	search : {
		caption: "?쒐뇨...",
		Find: "?ζ돻",
		Reset: "?띸쉰",
		odata : ['嶺됦틢\u3000\u3000', '訝띸춬\u3000\u3000', '弱뤶틢\u3000\u3000', '弱뤶틢嶺됦틢','鸚㏛틢\u3000\u3000','鸚㏛틢嶺됦틢', 
			'凉冶뗤틢','訝띶?冶뗤틢','掠욂틢\u3000\u3000','訝띶콪雅?,'瀯볠씇雅?,'訝띸퍜?잋틢','?끻맜\u3000\u3000','訝띶똿??],
		groupOps: [	{ op: "AND", text: "??? },	{ op: "OR",  text: "餓삡?" }	],
		matchText: " ?백뀓",
		rulesText: " 鰲꾢닕"
	},
	edit : {
		addCaption: "曆삣뒥溫겼퐬",
		editCaption: "煐뽬풌溫겼퐬",
		bSubmit: "?먧벡",
		bCancel: "?뽪텋",
		bClose: "?녜뿭",
		saveData: "?경뜮藥꿩뵻?섓펽??맔岳앭춼竊?,
		bYes : "??,
		bNo : "??,
		bExit : "?뽪텋",
		msg: {
			required:"閭ㅵ춻餘드퓚?",
			number:"瑥룩풏?ζ쐣?덃빊耶?,
			minValue:"渦볟쇔퓚窈삣ㄷ雅롧춬雅?",
			maxValue:"渦볟쇔퓚窈삣컦雅롧춬雅?",
			email: "瓦쇾툖??쐣?덄쉪e-mail?겼?",
			integer: "瑥룩풏?ζ쐣?덃빐??,
			date: "瑥룩풏?ζ쐣?덃뿶??,
			url: "?졿븞營묈??귛뎺煐恙낂』訝?('http://' ??'https://')",
			nodefined : " ?ゅ츣阿됵펯",
			novalue : " ?誤곮퓭?욃쇽펯",
			customarray : "?ゅ츣阿됧눦?곈?誤곮퓭?욄빊瀯꾬펯",
			customfcheck : "Custom function should be present in case of custom checking!"
			
		}
	},
	view : {
		caption: "?η쐦溫겼퐬",
		bClose: "?녜뿭"
	},
	del : {
		caption: "?좈솮",
		msg: "?좈솮??됭?壤뺧폕",
		bSubmit: "?좈솮",
		bCancel: "?뽪텋"
	},
	nav : {
		edittext: "",
		edittitle: "煐뽬풌??됭?壤?,
		addtext:"",
		addtitle: "曆삣뒥?계?壤?,
		deltext: "",
		deltitle: "?좈솮??됭?壤?,
		searchtext: "",
		searchtitle: "?ζ돻",
		refreshtext: "",
		refreshtitle: "?룡뼭烏ⓩ졏",
		alertcap: "力ⓩ꼷",
		alerttext: "瑥룬됪떓溫겼퐬",
		viewtext: "",
		viewtitle: "?η쐦??됭?壤?
	},
	col : {
		caption: "?됪떓??,
		bSubmit: "簾?츣",
		bCancel: "?뽪텋"
	},
	errors : {
		errcap : "?숃?",
		nourl : "亦→쐣溫양쉰url",
		norecords: "亦→쐣誤곩쨪?녺쉪溫겼퐬",
		model : "colNames ??colModel ?욕벧訝띸춬竊?
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat",
		         "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
			],
			monthNames: [
				"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
				"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
			],
			AmPm : ["am","pm","AM","PM"],
			S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
			srcformat: 'Y-m-d',
			newformat: 'm-d-Y',
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
};
})(jQuery);

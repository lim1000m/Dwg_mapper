;(function($){
/**
 * jqGrid Bulgarian Translation 
 * Tony Tomov tony@trirand.com
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = {
	defaults : {
		recordtext: "{0} - {1} 剪 {2}",
		emptyrecords: "?茵 裔炡??",
		loadtext: "행釣輦閃...",
		pgtext : "鸞? {0} 剪 {1}"
	},
	search : {
		caption: "泥猝孼?..",
		Find: "昆靭鳥",
		Reset: "흔婆增?,
		odata : ['調純?, '調俉料狀', '禎-茵凝?, '禎-茵凝?堯?','禎-莘?溢','禎-莘?溢 堯?=', '裔禎透??,'張 裔禎透??,'遵 壯麟調 ?,'張 遵 壯麟調 ?,'裔術淙循 ?,'張 裔術淙設??,'蒸掖阻?, '張 蒸掖阻? ],
	    groupOps: [	{ op: "AND", text: " ?" },	{ op: "OR",  text: "훙? }	],
		matchText: " 盾誼婆",
		rulesText: " 幽姓裔"
	},
	edit : {
		addCaption: "孔?행炡?,
		editCaption: "給菴柚? 행炡?,
		bSubmit: "행炡鋪",
		bCancel: "흔軸?,
		bClose: "행軫典?,
		saveData: "콧牆嶢?焌 穽佃孼孼? 콧 蒸春陝 泣 穽佃孼嶢?",
		bYes : "콧",
		bNo : "袞",
		bExit : "較魏?,
		msg: {
		    required:"淃音桎 ?裔掖飮嶢言狀",
		    number:"찮橓鴨鎭 循泣厓?婆衆?",
		    minValue:"增迹狀增診 疾飡?菴 ?禎-莘?茵 堯?調純?剪",
		    maxValue:"增迹狀增診 疾飡?菴 ?禎-茵凝?堯?調純?剪",
		    email: "張 ?循泣鴨?言. 雪釣?,
		    integer: "찮橓鴨鎭 循泣厓??依 婆衆?,
			date: "찮橓鴨鎭 循泣厓?菴診",
			url: "e 張循泣鴨?URL. 흔尿魏循 遵 穽淹凹?'http://' 堯?'https://')",
			nodefined : " ?張鴨淸杖調壯!",
			novalue : " 了尿侑?荀鋏陝?壯 增迹狀增!",
			customarray : "淃疾齬. 燈檣打 疾飡?菴 術存?茵茁?",
			customfcheck : "淃疾齬嶢言仲?締檣打 ?裔掖飮嶢言壯 穽?桎預 震?言諺孼?"
		}
	},
	view : {
	    caption: "厥憶音?裔炡?,
	    bClose: "행軫典?
	},
	del : {
		caption: "흔疾外陝?,
		msg: "콧 了疾? 泣 了鎖陝??裔炡?",
		bSubmit: "흔疾僥",
		bCancel: "較魏?
	},
	nav : {
		edittext: " ",
		edittitle: "給菴柚? 了鎖陝 裔炡?,
		addtext:" ",
		addtitle: "쿡蓀?張 狀?裔炡?,
		deltext: " ",
		deltitle: "흔疾外陝?了鎖陝 裔炡?,
		searchtext: " ",
		searchtitle: "泥猝孼?裔炡??",
		refreshtext: "",
		refreshtitle: "咬狀淳 診頌擾?,
		alertcap: "厥抑蒼釣輦孼猥",
		alerttext: "輕?, 了悚釣鎭 裔炡?,
		viewtext: "",
		viewtitle: "厥憶音?了鎖陝 裔炡?
	},
	col : {
		caption: "흔灑?惟依杖",
		bSubmit: "狡",
		bCancel: "흔軸?	
	},
	errors : {
		errcap : "췻予魏",
		nourl : "?茵 禎櫛特?url 雪釣?,
		norecords: "?茵 裔炡?裔 翟調灑叱?,
		model : "輕鴨乙 張 蒸剪橓秩軫?壯 夭孼城?"	
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:" 淫.", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"袞?, "淃?, "찜", "蘭", "痢?, "躬?, "濫?,
				"袞鴨?", "淃張鴨鷹凹", "찜典杖?, "蘭菴", "痢軫協什?, "躬什?, "濫灑診"
			],
			monthNames: [
				"序?, "荳?, "璥?, "쟁?, "璥?, "莎?, "肆?, "잡?, "珞?, "狡?, "孔?, "콸?,
				"序彰鳥", "荳荀彰鳥", "璥倧", "쟁鳥?, "璥?, "莎?, "肆?, "잡身增", "珞綎諺荀?, "狡桎蚓鳥", "孔諺荀?, "콸劉蚓鳥"
			],
			AmPm : ["","","",""],
			S: function (j) {
				if(j==7 || j==8 || j== 27 || j== 28) {
					return '麟';
				}
				return ['淳', '鳥', '震'][Math.min((j - 1) % 10, 2)];
			},
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

;(function($){
/**
 * jqGrid Vietnamese Translation
 * L챗 휂챙nh D크ng dungtdc@gmail.com
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "View {0} - {1} of {2}",
		emptyrecords: "Kh척ng c처 d沼?li沼뇎",
		loadtext: "휂ang n梳죖 d沼?li沼뇎...",
		pgtext : "Trang {0} trong t沼븂g s沼?{1}"
	},
	search : {
		caption: "T챙m ki梳퓅...",
		Find: "T챙m",
		Reset: "Kh沼웙 t梳죓 l梳죍",
		odata: [{ oper:'eq', text:"b梳켷g"},{ oper:'ne', text:"kh척ng b梳켷g"},{ oper:'lt', text:"b챕 h퉤n"},{ oper:'le', text:"b챕 h퉤n ho梳톍 b梳켷g"},{ oper:'gt', text:"l沼썀 h퉤n"},{ oper:'ge', text:"l沼썀 h퉤n ho梳톍 b梳켷g"},{ oper:'bw', text:"b梳칣 휃梳쬾 v沼쌻"},{ oper:'bn', text:"kh척ng b梳칣 휃梳쬾 v沼쌻"},{ oper:'in', text:"trong"},{ oper:'ni', text:"kh척ng n梳켶 trong"},{ oper:'ew', text:"k梳퓍 th첬c v沼쌻"},{ oper:'en', text:"kh척ng k梳퓍 th첬c v沼쌻"},{ oper:'cn', text:"ch沼쯠"},{ oper:'nc', text:"kh척ng ch沼쯠"}],
		groupOps: [	{ op: "V?", text: "t梳쩿 c梳? },	{ op: "HO梳턇",  text: "b梳쩿 k沼? }	]
	},
	edit : {
		addCaption: "Th챗m b梳즢 ghi",
		editCaption: "S沼춁 b梳즢 ghi",
		bSubmit: "G沼춊",
		bCancel: "H沼쭃 b沼?,
		bClose: "휂처ng",
		saveData: "D沼?li沼뇎 휃찾 thay 휃沼뷼! C처 l튼u thay 휃沼뷼 kh척ng?",
		bYes : "C처",
		bNo : "Kh척ng",
		bExit : "H沼쭃 b沼?,
		msg: {
			required:"Tr튼沼쓓g d沼?li沼뇎 b梳칣 bu沼셛 c처",
			number:"H찾y 휃i沼걆 휃첬ng s沼?,
			minValue:"gi찼 tr沼?ph梳즜 l沼썀 h퉤n ho梳톍 b梳켷g v沼쌻 ",
			maxValue:"gi찼 tr沼?ph梳즜 b챕 h퉤n ho梳톍 b梳켷g",
			email: "kh척ng ph梳즜 l횪 m沼셳 email 휃첬ng",
			integer: "H찾y 휃i沼걆 휃첬ng s沼?nguy챗n",
			date: "H찾y 휃i沼걆 휃첬ng ng횪y th찼ng",
			url: "kh척ng ph梳즜 l횪 URL. Kh沼웙 휃梳쬾 b梳칣 bu沼셛 l횪 ('http://' ho梳톍 'https://')",
			nodefined : " ch튼a 휃튼沼즓 휃沼땙h ngh칫a!",
			novalue : " gi찼 tr沼?tr梳?v沼?b梳칣 bu沼셛 ph梳즜 c처!",
			customarray : "H횪m n챗n tr梳?v沼?m沼셳 m梳즢g!",
			customfcheck : "Custom function should be present in case of custom checking!"
			
		}
	},
	view : {
		caption: "Xem b梳즢 ghi",
		bClose: "휂처ng"
	},
	del : {
		caption: "X처a",
		msg: "X처a b梳즢 ghi 휃찾 ch沼뛫?",
		bSubmit: "X처a",
		bCancel: "H沼쭃 b沼?
	},
	nav : {
		edittext: "",
		edittitle: "S沼춁 d챵ng 휃찾 ch沼뛫",
		addtext:"",
		addtitle: "Th챗m m沼쌻 1 d챵ng",
		deltext: "",
		deltitle: "X처a d챵ng 휃찾 ch沼뛫",
		searchtext: "",
		searchtitle: "T챙m b梳즢 ghi",
		refreshtext: "",
		refreshtitle: "N梳죖 l梳죍 l튼沼쌻",
		alertcap: "C梳즢h b찼o",
		alerttext: "H찾y ch沼뛫 m沼셳 d챵ng",
		viewtext: "",
		viewtitle: "Xem d챵ng 휃찾 ch沼뛫"
	},
	col : {
		caption: "Ch沼뛫 c沼셳",
		bSubmit: "OK",
		bCancel: "H沼쭃 b沼?
	},
	errors : {
		errcap : "L沼뾦",
		nourl : "kh척ng url 휃튼沼즓 휃梳톞",
		norecords: "Kh척ng c처 b梳즢 ghi 휃沼?x沼?l첵",
		model : "Chi沼걏 d횪i c沼쬪 colNames <> colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: ".", defaultValue: '0'},
		number : {decimalSeparator:",", thousandsSeparator: ".", decimalPlaces: 2, defaultValue: '0'},
		currency : {decimalSeparator:",", thousandsSeparator: ".", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0'},
		date : {
			dayNames:   [
				"CN", "T2", "T3", "T4", "T5", "T6", "T7",
				"Ch沼?nh梳춗", "Th沼?hai", "Th沼?ba", "Th沼?t튼", "Th沼?n훱m", "Th沼?s찼u", "Th沼?b梳즭"
			],
			monthNames: [
				"Th1", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7", "Th8", "Th9", "Th10", "Th11", "Th12",
				"Th찼ng m沼셳", "Th찼ng hai", "Th찼ng ba", "Th찼ng t튼", "Th찼ng n훱m", "Th찼ng s찼u", "Th찼ng b梳즭", "Th찼ng t찼m", "Th찼ng ch챠n", "Th찼ng m튼沼쓎", "Th찼ng m튼沼쓎 m沼셳", "Th찼ng m튼沼쓎 hai"
			],
			AmPm : ["s찼ng","chi沼걏","S횁NG","CHI沼U"],
			S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th';},
			srcformat: 'Y-m-d',
			newformat: 'n/j/Y',
			parseRe : /[Tt\\\/:_;.,\t\s-]/,
			masks : {
				// see http://php.net/manual/en/function.date.php for PHP format used in jqGrid
				// and see http://docs.jquery.com/UI/Datepicker/formatDate
				// and https://github.com/jquery/globalize#dates for alternative formats used frequently
				// one can find on https://github.com/jquery/globalize/tree/master/lib/cultures many
				// information about date, time, numbers and currency formats used in different countries
				// one should just convert the information in PHP format
				ISO8601Long:"Y-m-d H:i:s",
				ISO8601Short:"Y-m-d",
				// short date:
				//    n - Numeric representation of a month, without leading zeros
				//    j - Day of the month without leading zeros
				//    Y - A full numeric representation of a year, 4 digits
				// example: 3/1/2012 which means 1 March 2012
				ShortDate: "n/j/Y", // in jQuery UI Datepicker: "M/d/yyyy"
				// long date:
				//    l - A full textual representation of the day of the week
				//    F - A full textual representation of a month
				//    d - Day of the month, 2 digits with leading zeros
				//    Y - A full numeric representation of a year, 4 digits
				LongDate: "l, F d, Y", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy"
				// long date with long time:
				//    l - A full textual representation of the day of the week
				//    F - A full textual representation of a month
				//    d - Day of the month, 2 digits with leading zeros
				//    Y - A full numeric representation of a year, 4 digits
				//    g - 12-hour format of an hour without leading zeros
				//    i - Minutes with leading zeros
				//    s - Seconds, with leading zeros
				//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
				FullDateTime: "l, F d, Y g:i:s A", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy h:mm:ss tt"
				// month day:
				//    F - A full textual representation of a month
				//    d - Day of the month, 2 digits with leading zeros
				MonthDay: "F d", // in jQuery UI Datepicker: "MMMM dd"
				// short time (without seconds)
				//    g - 12-hour format of an hour without leading zeros
				//    i - Minutes with leading zeros
				//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
				ShortTime: "g:i A", // in jQuery UI Datepicker: "h:mm tt"
				// long time (with seconds)
				//    g - 12-hour format of an hour without leading zeros
				//    i - Minutes with leading zeros
				//    s - Seconds, with leading zeros
				//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
				LongTime: "g:i:s A", // in jQuery UI Datepicker: "h:mm:ss tt"
				SortableDateTime: "Y-m-d\\TH:i:s",
				UniversalSortableDateTime: "Y-m-d H:i:sO",
				// month with year
				//    Y - A full numeric representation of a year, 4 digits
				//    F - A full textual representation of a month
				YearMonth: "F, Y" // in jQuery UI Datepicker: "MMMM, yyyy"
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

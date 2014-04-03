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
//		recordtext: "총{2}개의 데이터 중 {0}에서 {1}까지",
//		emptyrecords: "표시할 결과가 없습니다.",
	    recordtext: "",
	    emptyrecords: "",
		loadtext: "로딩중...",
		pgtext : "페이지 {0} / {1}"
	},
	search : {
		caption: "검색중...",
		Find: "검색",
		Reset: "초기화",
		odata : ['같음', '같지않음', '미만', '이하','초과','이상', '~로 시작','~로 시작하지 않음','포함','포함하지 않음','~로 끝남','~로 끝나지 않음','contains','does not contain'],
		groupOps: [	{ op: "AND", text: "all" },	{ op: "OR",  text: "any" }	],
		matchText: " 일치",
		rulesText: " rules"
	},
	edit : {
		addCaption: "Add Record",
		editCaption: "Edit Record",
		bSubmit: "Submit",
		bCancel: "Cancel",
		bClose: "Close",
		saveData: "Data has been changed! Save changes?",
		bYes : "Yes",
		bNo : "No",
		bExit : "Cancel",
		msg: {
			required:"Field is required",
			number:"Please, enter valid number",
			minValue:"value must be greater than or equal to ",
			maxValue:"value must be less than or equal to",
			email: "is not a valid e-mail",
			integer: "Please, enter valid integer value",
			date: "Please, enter valid date value",
			url: "is not a valid URL. Prefix required ('http://' or 'https://')",
			nodefined : " is not defined!",
			novalue : " return value is required!",
			customarray : "Custom function should return array!",
			customfcheck : "Custom function should be present in case of custom checking!"
			
		}
	},
	view : {
		caption: "결과 보기",
		bClose: "닫기"
	},
	del : {
		caption: "삭제",
		msg: "선택된 열을 삭제하시겠습니까(s)?",
		bSubmit: "삭제",
		bCancel: "취소"
	},
	nav : {
		edittext: "",
		edittitle: "선택된 열 편집",
		addtext:"",
		addtitle: "새로운 열 추가",
		deltext: "",
		deltitle: "선택된 열 삭제",
		searchtext: "",
		searchtitle: "검색",
		refreshtext: "",
		refreshtitle: "새로고침",
		alertcap: "경고",
		alerttext: "열을 선택해주십시오",
		viewtext: "",
		viewtitle: "선택된 열 보기"
	},
	col : {
		caption: "컬럼을 선택",
		bSubmit: "예",
		bCancel: "아니오"
	},
	errors : {
		errcap : "오류",
		nourl : "URL이 설정되지 않았습니다.",
		norecords: "처리된 레코드가 없습니다.",
		model : "컬럼명과 모델의 길이가 일치하지 않습니다!"
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
});
})(jQuery);

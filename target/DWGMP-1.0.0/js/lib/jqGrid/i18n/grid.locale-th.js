;(function($){
/**
 * jqGrid Thai Translation
 * Kittituch Manakul m.kittituch@Gmail.com
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "仙곟릉錫붲툏 {0} - {1} 錫댽림錫?{2}",
		emptyrecords: "仙꾝륫仙댽툧錫싟툊仙됢릎錫□많錫?,
		loadtext: "錫곟립錫?릴錫뉋르仙됢릎錫뉋툊錫?툊仙됢릎錫□많錫?..",
		pgtext : "錫ム툢仙됢림 {0} 錫댽림錫?{1}"
	},
	search : {
		caption: "錫곟립錫?릴錫뉋툌仙됢툢錫ム림...",
		Find: "錫꾝퉱錫쇸릊錫?,
		Reset: "錫꾝막錫쇸툌仙댽림錫곟른錫긍툣",
		odata: [{ oper:'eq', text:"仙錫쀠퉰錫꿋툈錫긍툣"},{ oper:'ne', text:"仙꾝륫仙댽?錫쀠퉰錫꿋툈錫긍툣"},{ oper:'lt', text:"錫쇸퉱錫?륭錫곟름仙댽림"},{ oper:'le', text:"仙꾝륫仙댽륫錫꿋툈錫곟름仙댽림"},{ oper:'gt', text:"錫□림錫곟툈錫곟름仙댽림"},{ oper:'ge', text:"仙꾝륫仙댽툢仙됢릎錫№툈錫㏅퉰錫?},{ oper:'bw', text:"錫귖마仙됢툢錫뺖퉱錫쇸툝仙됢름錫?},{ oper:'bn', text:"仙꾝륫仙댽툊錫뜩퉱錫쇸툞仙됢툢錫붲퉱錫㏅륭"},{ oper:'in', text:"錫□링錫꾝립仙꺺툝錫꾝립錫ム툢錫뜩퉰錫뉋퉫錫?},{ oper:'ni', text:"仙꾝륫仙댽륫錫듀툌錫녀퉫錫붲툌錫녀릊錫쇸마仙댽툏仙꺺툢"},{ oper:'ew', text:"錫?툏錫쀠퉱錫꿋륭錫붲퉱錫㏅륭"},{ oper:'en', text:"仙꾝륫仙댽른錫뉋툠仙됢림錫№툝仙됢름錫?},{ oper:'cn', text:"錫□링錫꾝립錫㏅퉰錫?},{ oper:'nc', text:"仙꾝륫仙댽륫錫듀툌錫녀름仙댽림"}],
		groupOps: [	{ op: "仙곟른錫?, text: "錫쀠릴仙됢툏錫ム륫錫? },	{ op: "錫ム르錫룅릎",  text: "仙꺺툝仙? }	]
	},
	edit : {
		addCaption: "仙錫왽릿仙댽륫錫귖퉱錫?륫錫밝른",
		editCaption: "仙곟툈仙됢퉬錫귖툊仙됢릎錫□많錫?,
		bSubmit: "錫싟릴錫쇸툠錫뜩툈",
		bCancel: "錫№툈仙錫?릿錫?,
		bClose: "錫쎹릿錫?,
		saveData: "錫꾝만錫볙툞仙됢릎錫뉋툈錫꿋르錫싟릴錫쇸툠錫뜩툈錫꿋르仙곟툈仙됢퉬錫?仙꺺툓仙댽릊錫｀막錫?퉬錫□퉰?",
		bYes : "錫싟릴錫쇸툠錫뜩툈",
		bNo : "錫?린錫쀠릿仙됢툏錫곟림錫｀퉩錫곟퉱仙꾝툊",
		bExit : "錫№툈仙錫?릿錫?,
		msg: {
			required:"錫귖퉱錫?륫錫밝른錫쇸링仙됢툑錫녀?錫쎹퉯錫?,
			number:"錫곟르錫멘툜錫꿋툈錫｀릎錫곟릊錫□림錫№?錫?툊仙꺺릊仙됢툟錫밝툈錫뺖퉱錫?툏",
			minValue:"錫꾝퉰錫꿋툊錫?툏錫귖퉱錫?륫錫밝른錫쇸링仙됢툞仙됢릎錫뉋퉬錫□퉰錫쇸퉱錫?륭錫곟름仙댽림",
			maxValue:"錫꾝퉰錫꿋툊錫?툏錫귖퉱錫?륫錫밝른錫쇸링仙됢툞仙됢릎錫뉋퉬錫□퉰錫□림錫곟툈錫㏅퉰錫?,
			email: "錫?링仙錫□른錫?퉴錫쇸링仙됢퉬錫□퉰錫뽤많錫곟툞仙됢릎錫?,
			integer: "錫곟르錫멘툜錫꿋툈錫｀릎錫곟?錫쎹퉯錫쇸툑錫녀툢錫㏅툢仙錫뺖퉯錫?,
			date: "錫곟르錫멘툜錫꿋툈錫｀릎錫곟름錫긍툢錫쀠링仙댽퉫錫ム퉱錫뽤많錫곟툞仙됢릎錫?,
			url: "URL 仙꾝륫仙댽툟錫밝툈錫뺖퉱錫?툏 URL 錫댽립仙錫쎹퉯錫쇸툞仙됢릎錫뉋툊錫뜩퉱錫쇸툞仙됢툢錫붲퉱錫㏅륭 'http://' 錫ム르錫룅릎 'https://'",
			nodefined : "仙꾝륫仙댽퉬錫붲퉱錫뽤많錫곟툈錫녀릊錫쇸툝錫꾝퉰錫?",
			novalue : "錫뺖퉱錫?툏錫곟림錫｀툈錫꿋르錫꾝막錫쇸툌仙댽림!",
			customarray : "錫잀릴錫뉋툈仙뚟툓錫긍툢錫쀠링仙댽릉錫｀퉱錫꿋툏錫귖마仙됢툢錫뺖퉱錫?툏錫む퉰錫뉋툌仙댽림錫곟른錫긍툣仙錫쎹퉯錫쇸퉩錫싟툣仙곟릎仙錫｀륭仙?,
			customfcheck : "錫｀린錫싟툣錫뺖퉱錫?툏錫곟림錫｀툨錫긍툏錫곟퉴錫듺릴錫쇸툠錫듀퉰錫む르仙됢림錫뉋툊錫뜩퉱錫쇸릉錫녀릊錫｀릴錫싟툈錫꿋르錫뺖르錫㏅툑錫む릎錫?"
			
		}
	},
	view : {
		caption: "仙錫｀링錫№툈錫붲많錫귖퉱錫?륫錫밝른",
		bClose: "錫쎹릿錫?
	},
	del : {
		caption: "錫?툣錫귖퉱錫?륫錫밝른",
		msg: "錫꾝만錫볙툞仙됢릎錫뉋툈錫꿋르錫?툣錫귖퉱錫?륫錫밝른錫쀠링仙댽툟錫밝툈仙錫?막錫?툈 仙꺺툓仙댽릊錫｀막錫?퉬錫□퉰?",
		bSubmit: "錫뺖퉱錫?툏錫곟림錫｀른錫?,
		bCancel: "錫№툈仙錫?릿錫?
	},
	nav : {
		edittext: "",
		edittitle: "仙곟툈仙됢퉬錫귖툊仙됢릎錫□많錫?,
		addtext:"",
		addtitle: "仙錫왽릿仙댽륫錫귖퉱錫?륫錫밝른",
		deltext: "",
		deltitle: "錫?툣錫귖퉱錫?륫錫밝른",
		searchtext: "",
		searchtitle: "錫꾝퉱錫쇸릊錫꿋툊仙됢릎錫□많錫?,
		refreshtext: "",
		refreshtitle: "錫｀링仙錫잀르錫?,
		alertcap: "錫꾝립仙錫뺖막錫?툢",
		alerttext: "錫곟르錫멘툜錫꿋?錫?막錫?툈錫귖퉱錫?륫錫밝른",
		viewtext: "",
		viewtitle: "錫붲많錫｀림錫№른錫겯?錫?링錫№툝錫귖퉱錫?륫錫밝른"
	},
	col : {
		caption: "錫곟르錫멘툜錫꿋?錫?막錫?툈錫꾝릎錫?릴錫□툢仙?,
		bSubmit: "錫뺖툈錫?툏",
		bCancel: "錫№툈仙錫?릿錫?
	},
	errors : {
		errcap : "仙錫곟릿錫붲툌錫㏅림錫□툥錫닮툝錫왽른錫꿋툝",
		nourl : "仙꾝륫仙댽퉬錫붲퉱錫곟립錫ム툢錫?URL",
		norecords: "仙꾝륫仙댽륫錫듀툊仙됢릎錫□많錫?퉫錫ム퉱錫붲립仙錫쇸릿錫쇸툈錫꿋르",
		model : "錫댽립錫쇸름錫쇸툌錫?른錫긍륫錫쇸퉴仙꾝륫仙댽?錫쀠퉰錫꿋툈錫긍툣錫댽립錫쇸름錫쇸툌錫?른錫긍륫錫쇸퉴仙귖륫仙錫붲른!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"錫?림", "錫?, "錫?, "錫?, "錫왽륵", "錫?, "錫?,
				"錫?림錫쀠릿錫뺖륭仙?, "錫댽릴錫쇸툠錫｀퉴", "錫?릴錫뉋툌錫꿋르", "錫왽만錫?, "錫왽륵錫ム릴錫む툣錫붲링", "錫ⓣ많錫곟르仙?, "仙錫む림錫｀퉴"
			],
			monthNames: [
				"錫?錫?", "錫?錫?", "錫□링.錫?", "仙錫?錫?", "錫?錫?", "錫□릿.錫?", "錫?錫?", "錫?錫?", "錫?錫?", "錫?錫?", "錫?錫?", "錫?錫?",
				"錫□툈錫｀림錫꾝륫", "錫곟만錫□툩錫꿋툧錫긍툢錫섁퉴", "錫□링錫쇸림錫꾝륫", "仙錫□릇錫꿋륭錫?, "錫왽륵錫⒯툩錫꿋툌錫?, "錫□릿錫뽤만錫쇸림錫№툢", "錫곟르錫곟툘錫꿋툌錫?, "錫む릿錫뉋릊錫꿋툌錫?, "錫곟릴錫쇸륭錫꿋륭錫?, "錫뺖만錫?림錫꾝륫", "錫왽륵錫ⓣ툑錫닮툈錫꿋륭錫?, "錫섁릴錫쇸름錫꿋툌錫?
			],
			AmPm : ["am","pm","AM","PM"],
			S: function (j) {return ''},
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

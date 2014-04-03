;(function($){
/**
 * jqGrid Turkish Translation
 * Erhan G체ndo휓an (erhan@trposta.net)
 * http://blog.zakkum.com
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = {
	defaults : {
		recordtext: "{0}-{1} listeleniyor. Toplam:{2}",
	    emptyrecords: "Kay캇t bulunamad캇",
		loadtext: "Y체kleniyor...",
		pgtext : "{0}/{1}. Sayfa"
	},
	search : {
	    caption: "Arama...",
	    Find: "Bul",
	    Reset: "Temizle",	    
	    odata : ['e힊it', 'e힊it de휓il', 'daha az', 'daha az veya e힊it', 'daha fazla', 'daha fazla veya e힊it', 'ile ba힊layan', 'ile ba힊lamayan', 'i챌inde', 'i챌inde de휓il', 'ile biten', 'ile bitmeyen', 'i챌eren', 'i챌ermeyen'],
	    groupOps: [	{ op: "VE", text: "t체m" },	{ op: "VEYA",  text: "herhangi" }	],
		matchText: " uyan",
		rulesText: " kurallar"
	},
	edit : {
	    addCaption: "Kay캇t Ekle",
	    editCaption: "Kay캇t D체zenle",
	    bSubmit: "G철nder",
	    bCancel: "캅ptal",
		bClose: "Kapat",
		saveData: "Veriler de휓i힊ti! Kay캇t edilsin mi?",
		bYes : "Evet",
		bNo : "Hay캇t",
		bExit : "캅ptal",
	    msg: {
	        required:"Alan gerekli",
	        number:"L체tfen bir numara giriniz",
	        minValue:"girilen de휓er daha b체y체k ya da buna e힊it olmal캇d캇r",
	        maxValue:"girilen de휓er daha k체챌체k ya da buna e힊it olmal캇d캇r",
	        email: "ge챌erli bir e-posta adresi de휓ildir",
	        integer: "L체tfen bir tamsay캇 giriniz",
			url: "Ge챌erli bir URL de휓il. ('http://' or 'https://') 철n eki gerekli.",
			nodefined : " is not defined!",
			novalue : " return value is required!",
			customarray : "Custom function should return array!",
			customfcheck : "Custom function should be present in case of custom checking!"
		}
	},
	view : {
	    caption: "Kay캇t G철r체nt체le",
	    bClose: "Kapat"
	},
	del : {
	    caption: "Sil",
	    msg: "Se챌ilen kay캇tlar silinsin mi?",
	    bSubmit: "Sil",
	    bCancel: "캅ptal"
	},
	nav : {
		edittext: " ",
	    edittitle: "Se챌ili sat캇r캇 d체zenle",
		addtext:" ",
	    addtitle: "Yeni sat캇r ekle",
	    deltext: " ",
	    deltitle: "Se챌ili sat캇r캇 sil",
	    searchtext: " ",
	    searchtitle: "Kay캇tlar캇 bul",
	    refreshtext: "",
	    refreshtitle: "Tabloyu yenile",
	    alertcap: "Uyar캇",
	    alerttext: "L체tfen bir sat캇r se챌iniz",
		viewtext: "",
		viewtitle: "Se챌ilen sat캇r캇 g철r체nt체le"
	},
	col : {
	    caption: "S체tunlar캇 g철ster/gizle",
	    bSubmit: "G철nder",
	    bCancel: "캅ptal"	
	},
	errors : {
		errcap : "Hata",
		nourl : "Bir url yap캇land캇r캇lmam캇힊",
		norecords: "캅힊lem yap캇lacak bir kay캇t yok",
	    model : "colNames uzunlu휓u <> colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"Paz", "Pts", "Sal", "횉ar", "Per", "Cum", "Cts",
				"Pazar", "Pazartesi", "Sal캇", "횉ar힊amba", "Per힊embe", "Cuma", "Cumartesi"
			],
			monthNames: [
				"Oca", "힇ub", "Mar", "Nis", "May", "Haz", "Tem", "A휓u", "Eyl", "Eki", "Kas", "Ara",
				"Ocak", "힇ubat", "Mart", "Nisan", "May캇s", "Haziran", "Temmuz", "A휓ustos", "Eyl체l", "Ekim", "Kas캇m", "Aral캇k"
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
};
})(jQuery);

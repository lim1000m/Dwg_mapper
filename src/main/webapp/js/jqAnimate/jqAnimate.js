/********************************************************/
/* 	filename	: animatePanel.js						*/
/*	작성자		: 이진형 2009.3.13						*/
/*	수정자		: 이진형 2009.3.17
					- side-panel jQuery plug-in의 함수명을
					    제외한 코드 전면 재작성 및 함수 추가 
	 				- 탭아이디가 특정 아이디만 사용 가능했던것을 
					    탭아이디를 받아 사용자 정의 아이디 사용 
					    가능하도록 변경
					- 위,아래 패널도 사용 가능하도록 기능 추가
					  			  						*/
/* 	설 명 : - 화면의 왼쪽 또는 오른쪽 탭을 이용한 사이드바 플러그인
		   - 패널 탭의 그림 파일의 이름은 반드시 아래 규칙을 사용할 것
		   			filename.확장자 (접힌 탭)
		   			filename-avtive.확장자 (펼쳐진 탭) 		*/
/*	관련 파일(필수): JMap.js (맵 클래스 제공 스크립트)
			  	  animatePanel.css (사이드바 스타일 시트)
														*/
/********************************************************/


//Content Object (탭 설정값 저장용 Object)
function contentObject(contentID, tabID, frameID, contentWidth, contentHeight, browserHeight, extended, tabPos){
	this.contentID = contentID;
	this.tabID = tabID;
	this.frameID = frameID;
	this.contentWidth = contentWidth;
	this.contentHeight = contentHeight;
	this.browserHeight = browserHeight;
	this.isExtended = extended;
	this.tabPos = tabPos;
	
	this.toString = function() {
        var str = this.contentID + "\n";
        	str += this.tabID + "\n";
			str += this.frameID + "\n";
			str += this.contentWidth + "\n";
			str += this.contentHeight + "\n";
			str += this.browserHeight + "\n";
			str += this.isExtended + "\n";
			str += this.tabPos + "\n";
        return str;
    }
};

//Contenet Object 저장을 위한 Map
var contentObjectList = new JMap();

var AnimatePanel={
	/********************************************************/
	/* 함수명 : initSidePanel									*/
	/* Params :												*/
	/*			contentID	: content DIV 태그 id	  			*/
	/*			tabID		: tab (a 태그) id				*/
	/*			contentWidth: content 너비					*/
	/*			contentHieght: content 높이					*/
	/*			position	: 탭 위치							*/
	/* 설 명 : panel 초기화 함수(탭 버튼에 이벤트 등록)				*/
	/* 주의사항 : position이 'bottom'인 경우 브라우저의 페이지 출력되는
				화면을 기준으로 밑에서 표시됨 (위치조정은 distFromBrowser
				값을 조정할것 
				화면이 스크롤되는 경우 탭이 나타다는 위치에 주의		*/
	/********************************************************/
	initSidePanel:function(contentID, tabID, contentWidth, contentHeight, position) {
		distFromBrowser = 25; // 하단탭이 브라우저 화면의 밑에서 떨어져야하는 거리 임....(!! important !!)
		contentID = "#" + contentID;
		tabID = "#" + tabID;
		
		if(jQuery(contentID) == null)
			alert(contentID + "를 찾을 수 없습니다.");
			
		if(jQuery(tabID) == null)
			alert(tabID + "를 찾을 수 없습니다.");
		
		var	browserHeight = jQuery("html").attr('clientHeight')- distFromBrowser; 

		contentOb = new contentObject(contentID, tabID, "", contentWidth, contentHeight, browserHeight, 0);
		contentObjectList.put(tabID, contentOb);
		
		if(position == 'left' || position == 'right') {
			jQuery(tabID).bind("click",	tabID,
								function(e){
									//alert(jQuery(this).attr("id"));
									AnimatePanel.extendContract(e.data);
								});
		}else if (position == 'top') {
			jQuery(contentID).css({height:contentHeight, width:'100%', top:-contentHeight+'px'});
			//jQuery(tabID).parent().css({top:'0px', visibility:'visible'}).children(contentID).animate({height:0, opacity:0});
			jQuery(tabID).bind("click", tabID,
								function(e){
									AnimatePanel.extendContractTop(e.data);
								}).parent().css({top:'0px', visibility:'visible'}).children(contentID).animate({height:0, opacity:0});;
		}else if (position == 'bottom') {
				jQuery(contentID).css({height:contentHeight, width:'100%'}).parent().css({width:contentWidth});
				//jQuery(tabID).parent().css({top:document.body.clientHeight + 'px', visibility:'visible'}).children(contentID).slideUp();
				jQuery(tabID).bind("click", tabID,
									function(e){
										AnimatePanel.extendContractBottom(e.data);
									}).parent().css({top:browserHeight + 'px', visibility:'visible'}).children(contentID).slideUp();;
		}
	},
	
	/********************************************************/
	/* 함수명 : initSideIframePanel									*/
	/* Params :												*/
	/*			contentID	: content DIV 태그 id	  			*/
	/*			tabID		: tab (a 태그) id				*/
	/*			contentWidth: content 너비					*/
	/*			contentHieght: content 높이					*/
	/*			position	: 탭 위치							*/
	/* 설 명 : panel 초기화 함수(탭 버튼에 이벤트 등록)				*/
	/* 주의사항 : position이 'bottom'인 경우 브라우저의 페이지 출력되는
				화면을 기준으로 밑에서 표시됨 (위치조정은 distFromBrowser
				값을 조정할것 
				화면이 스크롤되는 경우 탭이 나타다는 위치에 주의		*/
	/********************************************************/
	initSideIframePanel:function(contentID, tabID, frameID, contentWidth, contentHeight, position) {
		distFromBrowser = 25; // 하단탭이 브라우저 화면의 밑에서 떨어져야하는 거리 임....(!! important !!)
		contentID = "#" + contentID;
		tabID = "#" + tabID;
		
		if(jQuery(contentID) == null)
			alert(contentID + "를 찾을 수 없습니다.");
			
		if(jQuery(tabID) == null)
			alert(tabID + "를 찾을 수 없습니다.");
		
		var	browserHeight = jQuery("html").attr('clientHeight')- distFromBrowser;
		var tabPos = "" 
		
		iframeRef = document.getElementById(frameID);
		iframeRef.contentWindow.tabID = tabID;
		//alert(jQuery(iframeRef).contents().find("html").html());

		if(position == 'left' || position == 'right') {
			jQuery(tabID).bind("click",	tabID,
								function(e){
									//alert(jQuery(this).attr("id"));
									AnimatePanel.extendContract(e.data);		//탭 버튼 클릭시 탭을 펴고 접는 행위를 결정하는 함수
									
								});
			tabPos = 'LR';
		}else if (position == 'top') {
			jQuery(contentID).css({height:contentHeight, width:'100%', top:-contentHeight+'px'});
			//jQuery(tabID).parent().css({top:'0px', visibility:'visible'}).children(contentID).animate({height:0, opacity:0});
			jQuery(tabID).bind("click", tabID,
								function(e){
									AnimatePanel.extendContractTop(e.data);
								}).parent().css({top:'0px', visibility:'visible'}).children(contentID).animate({height:0, opacity:0});;
			tabPos = 'T';
		}else if (position == 'bottom') {
			jQuery(contentID).css({height:contentHeight, width:'100%'}).parent().css({width:contentWidth});
			//jQuery(tabID).parent().css({top:document.body.clientHeight + 'px', visibility:'visible'}).children(contentID).slideUp();
			jQuery(tabID).bind("click", tabID,
								function(e){
									AnimatePanel.extendContractBottom(e.data);
								}).parent().css({top:browserHeight + 'px', visibility:'visible'}).children(contentID).slideUp();;
			tabPos = 'B'
		}
		contentOb = new contentObject(contentID, tabID, frameID, contentWidth, contentHeight, browserHeight, 0, tabPos);
		contentObjectList.put(tabID, contentOb);
	},
	
	/********************************************************/
	/* 함수명 : closeTabPanel									*/
	/* Params :												*/
	/*			tabID	: tab 버튼  id			  			*/
	/* 설 명 : 탭 아이디에 해당하는 탭 패널 닫기						*/
	/********************************************************/
	closeTabPanel:function(tabID){
		tabID = tabID;
		contentOb = contentObjectList.get(tabID);
		
		//alert(tabID + contentObjectList.toString());
		if(contentOb.tabPos == 'LR'){
			this.extendContract(tabID);
		} else if (contentOb.tabPos == 'T'){
			this.extendContractTop(tabID);
		} else if (contentOb.tabPos == 'B'){
			this.extendContractBottom(tabID);
		}
	},
	
	/********************************************************/
	/* 함수명 : extendContract								*/
	/* Params :												*/
	/*			tabID	: tab 버튼  id			  			*/
	/* 설 명 : 탭 버튼 클릭시 탭을 펴고 접는 행위를 결정하는 함수
			(양 사이트 패널용)									*/
	/********************************************************/
	extendContract:function(tabID){
		//alert(tabID);
		
		contentOb = contentObjectList.get(tabID);
		//alert(contentOb.contentID);
		
		height = contentOb.contentHeight; 
		width = contentOb.contentWidth;
		contentID = contentOb.contentID;
		
		jQuery(contentID).stop();			//애니메이션이 실행중인 경우 중지
		
		if(contentOb.isExtended == 0){		//펼쳐지지 않은경우
			if(contentOb.frameID != null)
				jQuery(tabID).show();				//탭버튼 숨기기
			this.slideSidePanel(contentID, 0, height, 0, width, 1);
			contentOb.isExtended = 1;
			jQuery(tabID+">img").attr("src", "/images/jqAnimate/lftTabOpen.png");
			jQuery(tabID+">img").animate({marginLeft: "-310px"}, 600);
			//jQuery(tabID+">img").attr("src", jQuery(tabID+">img").attr("src").replace(/(\.[^.]+)$/, '-active$1'));
		}
		else{								//펼쳐진 경우
			//jQuery(tabID+">img").attr("src", jQuery(tabID+">img").attr("src").replace(/-active(\.[^.]+)$/, '$1'));
			jQuery(tabID+">img").attr("src", "/images/jqAnimate/lftTabClose.png");
			this.slideSidePanel(contentID, height, 0, width, 0, 0);
			jQuery(tabID+">img").animate({marginLeft: "0px"}, 600);
			if(contentOb.frameID != null)
				jQuery(tabID).show();
			contentOb.isExtended = 0;	
		}
	},
	

	/********************************************************/
	/* 함수명 : extendContractBottom							*/
	/* Params :												*/
	/*			tabID	: tab 버튼  id			  			*/
	/* 설 명 : 탭 버튼 클릭시 탭을 펴고 접는 행위를 결정하는 함수
			(아래쪽 패널용)									*/
	/********************************************************/		
	extendContractBottom:function(tabID){
		contentOb = contentObjectList.get(tabID);
		
		height= contentOb.contentHeight;
		contentID = contentOb.contentID;
		browserHeight = contentOb.browserHeight;
		
		jQuery(contentID).stop();			//애니메이션이 실행중인 경우 중지
		
		if(contentOb.isExtended == 0){		//펼쳐지지 않은경우
			if(contentOb.frameID != null)
				jQuery(tabID).show();
			this.slideBottomPanel(contentID, height, browserHeight-height+10 ,1);
			contentOb.isExtended = 1;
			jQuery(tabID+">img").attr("src", "/images/jqAnimate/btmTabClose.png");
			//jQuery(tabID+">img").attr("src", jQuery(tabID+">img").attr("src").replace(/(\.[^.]+)$/, '-active$1'));
		}
		else{								//펼쳐진 경우
			//jQuery(tabID+">img").attr("src", jQuery(tabID+">img").attr("src").replace(/-active(\.[^.]+)$/, '$1'));
			jQuery(tabID+">img").attr("src", "/images/jqAnimate/btmTabOpen.png");
			this.slideBottomPanel(contentID, 0, browserHeight, 0);
			if(contentOb.frameID != null)
				jQuery(tabID).show();
			contentOb.isExtended = 0;	
		}
	},
	

	/********************************************************/
	/* 함수명 : extendContractTop								*/
	/* Params :												*/
	/*			tabID	: tab 버튼  id			  			*/
	/* 설 명 : 탭 버튼 클릭시 탭을 펴고 접는 행위를 결정하는 함수
			(위쪽 패널용)										*/
	/********************************************************/	
	extendContractTop:function(tabID){
		contentOb = contentObjectList.get(tabID);
		
		height= contentOb.contentHeight;
		contentID = contentOb.contentID;
		browserHeight = contentOb.browserHeight;
		
		if(contentOb.isExtended == 0){		//펼쳐지지 않은경우
			this.slideTopPanel(contentID, height, 0 ,1);
			contentOb.isExtended = 1;
			jQuery(tabID+">img").attr("src", jQuery(tabID+">img").attr("src").replace(/(\.[^.]+)$/, '-active$1'));
		}
		else{								//펼쳐진 경우
			jQuery(tabID+">img").attr("src", jQuery(tabID+">img").attr("src").replace(/-active(\.[^.]+)$/, '$1'));
			this.slideTopPanel(contentID, 0, -height , 0);
			contentOb.isExtended = 0;	
		}
	},

	/********************************************************/
	/* 함수명 : slideSidePanel								*/
	/* Params :												*/
	/*			contentID	: content DIV 태그 id	  			*/
	/*			fromHeight	: 현재 content 높이				*/
	/*			toHeight	: 목표 content 높이				*/
	/*			fronWidth	: 현재 content 너비				*/
	/*			toWidth		: 목표 content 너비				*/
	/*			toOpacity	: 목표 투명도 (0 ~ 1)				*/
	/* 설 명 : 탭을 접고 펴는것과 같은 효과의 애니메이션 효과를 수행하는 
	 		   함수(양쪽 사이드 패널용)							*/
	/********************************************************/
	slideSidePanel:function(contentID, fromHeight, toHeight, fromWidth, toWidth, toOpacity){
		jQuery(contentID).animate({ width:toWidth, opacity:toOpacity}, 'slow');
	},
		
	/********************************************************/
	/* 함수명 : slideTopPanel								*/
	/* Params :												*/
	/*			contentID	: content DIV 태그 id	  			*/
	/*			toHeight	: 목표 content 높이				*/
	/*			yCoord		: 패널의 Y좌표값					*/
	/*			toOpacity	: 목표 투명도 (0 ~ 1)				*/
	/* 설 명 : 탭을 접고 펴는것과 같은 효과의 애니메이션 효과를 수행하는 
	 		   함수(위쪽 패널용)									*/
	/********************************************************/
	slideTopPanel:function(contentID, toHeight, yCoord, toOpacity) {
		jQuery(contentID).animate({height:toHeight, opacity:toOpacity}, 'slow');
		//jQuery(contentID).parent.animate({top:yCoord}, 'slow');
	},

	/********************************************************/
	/* 함수명 : slideBottomPanel								*/
	/* Params :												*/
	/*			contentID	: content DIV 태그 id	  			*/
	/*			toHeight	: 목표 content 높이				*/
	/*			yCoord		: 패널의 Y좌표값					*/
	/*			toOpacity	: 목표 투명도 (0 ~ 1)				*/
	/* 설 명 : 탭을 접고 펴는것과 같은 효과의 애니메이션 효과를 수행하는 
	 		   함수(아래쪽 패널용)								*/
	/********************************************************/
	slideBottomPanel:function(contentID, toHeight, yCoord, toOpacity) {
		jQuery(contentID).animate({height:toHeight, opacity:toOpacity}, 'slow').parent().animate({top:yCoord}, 'slow');
		//jQuery(contentID).parent().animate({top:yCoord}, 'slow');
	}
}
/**
 * Map Tool 분리
 */

/**************************************
 * 내    용	: MyMap을 통해 Map객체를 생성
 * 파라미터	:  
 * 리 턴 값	: 
 * 참고사항	: 
***************************************/
function getMap()
{
   	return document.MyMap;
}

/**************************************
 * 내    용	: Hgis '선택'
***************************************/
function Arrow()
{
    var map = getMap();
	map.selectMode();
}
/**************************************
 * 내    용	: Hgis '줌'
***************************************/
function zoom()
{

    var map = getMap();

    map.setAutoRefresh(false);

    getMap().zoomInMode();

    map.setAutoRefresh(true);
}
/**************************************
 * 내    용	: Hgis '줌아웃'
***************************************/
function zoomout()
{
    var map = getMap();

    getMap().zoomOutMode();

    map.setAutoRefresh(true);
}
/**************************************
 * 내    용	: Hgis '전체'
***************************************/
function total()
{
    var map = getMap();

    getMap().zoomOut();

    map.setAutoRefresh(true);

}

/**************************************
 * 내    용	: Hgis '이동'
***************************************/
function pan()
{

    var map = getMap();

    map.setAutoRefresh(false);

    getMap().panMode();

    map.setAutoRefresh(true);

}

/**************************************
 * 내    용	: Hgis '이전'
***************************************/
function previous()
{

    var map = getMap();

    map.zoomPrevious();

}
/**************************************
 * 내    용	: Hgis '거리'
***************************************/
function distance()
{
    var map = getMap();
    var totalDistance;
    var distances;
    var units = "M";
    map.viewDistance("M");
}
/**************************************
 * 내    용	: Hgis '스케일'
***************************************/
function ScaleDlgCall()
{
	var map = getMap();
	getMap().zoomScaleDlg();
}

/**********************************************
* 내    용	: 조건에 해당하는 도엽 목록 조회 
* 파라미터	:
* 리 턴 값	: 
* 참고사항	: 
**********************************************/
function uf_getObjects()
{
    var map = getMap();
    var reCallFunc;
    var ngisName = "";
    var ngisKey  = "";  
    var ngisMap  = "";  
	  
    if (map.isbusy() == false){
        var mLayer = map.getMapLayer(ngisLayer);
        if (!mLayer.isVisible()){
   			parent.uf_search(ngisMap, ngisKind);
        	return;
        }
        var mapObjects = mLayer.getMapObjectsEx();
        var objCount = mapObjects.size();
        for (var i = 0; i < objCount; i++){
	        var obj = mapObjects.item(i); 
	        ngisName = ngisName + obj.getName() + ","; 
	        ngisKey  = ngisKey + obj.getKey() + ","; 
			ngisMap = ngisMap + obj.getKey() + ";" + obj.getName() + "-";
   		}if (ngisName.length >= 1){
      		ngisName = ngisName.substr(0,ngisName.length-1);
   			ngisKey  = ngisKey.substr(0,ngisKey.length-1);
   			ngisMap  = ngisMap.substr(0,ngisMap.length-1);
   		}
   		parent.uf_search(ngisMap, ngisKind);
	}else{
		reCallFunc = "uf_getObjects()";
		mim = setTimeout(reCallFunc, 500);
	}
}

/**************************************
 * 내    용	: 맵이 바쁜지 보는거
 * 파라미터	:  
 * 리 턴 값	: 
 * 참고사항	: 
***************************************/
function uf_check_busy(a) {
	timeFlag++;
	if (timeFlag <= 500) {
     		setTimeout(a, 500);    
   	} else {
  		alert("MapServer가 응답하지 않습니다. 잠시 후에 다시 시도하여 주십시오.");
     		return;
   	}
}


/**********************************************
* 내    용	: 해당 좌표로 지도 이동
* 파라미터	:
* 리 턴 값	: 
* 참고사항	: 
**********************************************/
function uf_zoomLocate()
{
	var pos = y_pos;
	if (pos=="") {
		alert("NGIS 1:50000에 도엽명이 존재하지 않습니다.");
		return;
	}

	var map =  getMap();
	if (map.isbusy()){
	    var a  = "uf_zoomLocate();";
	    uf_check_busy(a);
	} else{
		map.setAutoRefresh(false);
		var lat = y_pos;
		var lon = x_pos;
		map.zoomScale(eval(lat), eval(lon), scale);
		map.setAutoRefresh(true);
		map.refresh();
	}
	
	uf_rebuildNgisLayer();
	uf_removeNgisLayer(); 
	uf_getObjects();
	   
}

/**********************************************
* 내    용	: 레이어 재빌드 
* 파라미터	:
* 리 턴 값	: 
* 참고사항	: 
**********************************************/
function uf_rebuildNgisLayer()
{
	var map      = getMap();
	var reCallFunc;
	if (map.isbusy() == false) {
		var mLayer   = map.getMapLayer(ngisLayer);
		if (mLayer) {
			mLayer.setVisibility (false);
			mLayer.setVisibility (true);
			mLayer.setRebuild (true);
		}
		map.setAutoRefresh(true);
		map.refresh(); 
	} else {
        	reCallFunc = "uf_rebuildNgisLayer()";
        	mim = setTimeout(reCallFunc, 500);	
	}
	
}

/**********************************************
* 내    용	: 레이어 삭제 
* 파라미터	:
* 리 턴 값	: 
* 참고사항	: 
**********************************************/
function uf_removeNgisLayer()
{
	var map      = getMap();
	var reCallFunc;
	var mim;
	if (map.isbusy() == false) {
		map.setAutoRefresh(false);
		for(var i=0;i<NGIS_LAYER_COUNT;++i) {
			var mLayer   = map.getMapLayer("ngis"+i);
			if (mLayer) {
				mLayer.setVisibility (false);
				mLayer.setRebuild (true);
			}
		}
		map.setAutoRefresh(true);
		map.refresh(); 
	} else {
        	reCallFunc = "uf_removeNgisLayer()";
        	mim = setTimeout(reCallFunc, 500);	
	}
}

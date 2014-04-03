/**
 * @author polyam
 */

var menuMap = new JMap(); 

/**
 * @description : 메뉴 맵 초기화
 * @param {Object} menuNum (왼쪽 메뉴 번호)
 */
function gf_initMenuMap(menuNum){
	try {
		parent.parent.page = "1";
	} catch (e) {
	}
	switch(menuNum){
			case 1:{
				menuMap.put("111", "/DWGMP/dwg/objectmgt/main.do");	
			
				menuMap.put("1111", "/DWGMP/dwg/objectmgt/main.do");					
				menuMap.put("1121", "/DWGMP/dwg/objectmgt/main.do");		
				break;
			}
	}
}

function gf_getContentsUrl(menuID){
	return menuMap.get(menuID);
}

//////////////////////////////////////////////////////////////
/**		           String 사용자 function  정의              **/
/**    		속성을 정의하면 변수.function으로 사용할 수 있다.     **/
//////////////////////////////////////////////////////////////

// String 변수에 replaceAll 속성 사용
String.prototype.replaceAll = function( searchStr, replaceStr ) {
    var temp = this;

    while( temp.indexOf( searchStr ) != -1 ){
        temp = temp.replace( searchStr, replaceStr );
    }
    return temp;
}

// HTML 특수문자를 변환
String.prototype.htmlChars = function () {
       var str = ((this.replace('"', '&amp;')).replace('"', '&quot;')).replace('\'', '&#39;');
       return (str.replace('<', '&lt;')).replace('>', '&gt;'); 
}

// 좌우 공백없애는 함수
String.prototype.trim = function () { return this.replace(/(^s*)|(s*$)/g, ""); }

// 왼쪽 공백없애는 함수
String.prototype.ltrim = function () { return this.replace(/^s*/g, ""); }

// 오른쪽 공백없애는 함수
String.prototype.rtrim = function () { return this.replace(/s*$/g, ""); }

// 태그만 제거
String.prototype.stripTags = function () {
       var str = this;
       var pos1 = str.indexOf('<');

    if (pos1 == -1) return str;
    else {
        var pos2 = str.indexOf('>', pos1);
        if (pos2 == -1) return str;
        return (str.substr(0, pos1) + str.substr(pos2+1)).stripTags();
    }
}

// 문자열을 배열로
String.prototype.toArray = function () {
       var len = this.length;
       var arr = new Array;
       
       for (var i=0; i<len; i++) 
       	arr[i] = this.charAt(i);
       	
       return arr;
}

// '-' 제거 후 리턴(여러문자를 제거시에 사용)
String.prototype.removeChars = function () {
	    varReturnStr = "" ;
	
	    for ( var inx = 0 ; inx < this.length ; inx++ ) {
	        if ( this.substring( inx, inx+1 ) != "-")
	        	// if ( this.substring( inx, inx+1 ) != "-") - 여기에 다른문자를 계속 추가하여 여러문자를 제거할 수 있다.
	                    varReturnStr = varReturnStr + this.substring( inx, inx+1 ) ;
	    }
	
	    return varReturnStr;
}

// 특정문자 제거 후 리턴( 특정문자 한개 제거시 사용)
String.prototype.removeChar = function (character) {
	    return this.replaceAll(character, "");
}
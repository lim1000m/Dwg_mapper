// js calendar by jaewon
// last_modified : 2009/08/06
// Usage : <script type="text/javascript" src="calendar.js"></script>
//         <input type="text" id="start_date" name="start_date" value="20081027|null">
//         <input type="button" name="?щ젰" onClick="calendar(event, 'start_date')">
var calendar_div;
var calendar_obj;
var calendar_tt;

// ex) calendar(event, 'object_name', 'YYYYMMDD')
// fmt option???놁쑝硫?湲곕낯?쇰줈 ?ㅼ젙.
// YYYY : ??
// MM : ??
// DD : ??
var calendar_fmt = "YYYY-MM-DD";

// ?④꺼???섎뒗 select element ??λ???Array)
var hidden_select;
// element??x, y, width, height瑜?媛?몄샂. (select?몄뿉 object瑜??몄닔濡??ъ슜?대룄 ??ex:div)
function get_pos(selectObj)
{
    var pos = new Array();
    
    var pos_x = 0, pos_y = 0;
    
    // while?먯꽌 offsetParent瑜?李얠븘媛??諛⑹떇?대씪
    // ?ㅻⅨ 吏?뺤옄???몄닔濡??섏뼱??object瑜??섍꺼以?
    var obj = selectObj;
    
    // 醫뚰몴怨꾩궛
    while(obj.offsetParent)
    {
        pos_y += parseInt(obj.offsetTop);
        pos_x += parseInt(obj.offsetLeft);
        
        obj = obj.offsetParent;
    }
    pos_x += parseInt(obj.offsetLeft);
    pos_y += parseInt(obj.offsetTop);
    
    // 醫뚰몴???
    pos.x = pos_x;
    pos.y = pos_y;
    pos.x2 = pos_x + selectObj.offsetWidth;
    pos.y2 = pos_y + selectObj.offsetHeight;
    
    return pos;
}

// IE? Maxton?먯꽌 select elements瑜??④?
// ?щ젰 ?덉씠?댁쓽 醫뚰몴瑜??몄닔濡??섍꺼???대떦 醫뚰몴?댁뿉 select element媛 ?덈뒗吏 泥댄겕?섎뒗 諛⑹떇
function hide_select(x, y, x2, y2)
{
    var selects = document.getElementsByTagName('select');
    var hidden_count = 0;
    
    x = parseInt(x);
    y = parseInt(y);
    x2 = parseInt(x2);
    y2 = parseInt(y2);
    
    // X異뺤씠 寃뱀튂?붿? 泥댄겕?섍린 ?꾪븳 蹂??
    var x_cross = false;
    // Y異뺤씠 寃뱀튂?붿? 泥댄겕?섍린 ?꾪븳 蹂??
    var y_cross = false;
    
    // ?④꺼????select elements瑜?諛곗뿴濡??깅줉??
    hidden_select = new Array();
    
    for(var i=0; i<selects.length; i++)
    {
        // select element??醫뚰몴瑜?媛?몄샂.
        selects[i].pos = new Array();
        selects[i].pos = get_pos(selects[i]);
        
        // X異뺤씠 ?щ젰 ?곸뿭???ы븿 ?섏뼱 ?덈뒗吏 泥댄겕
        if((x <= selects[i].pos.x && x2 >= selects[i].pos.x) || (x <= selects[i].pos.x2 && x2 >= selects[i].pos.x2))
            x_cross = true;
        else
            x_cross = false;
        
        // Y異뺤씠 ?щ젰 ?곸뿭???ы븿?섏뼱 ?덈뒗吏 泥댄겕
        if((y <= selects[i].pos.y && y2 >= selects[i].pos.y) || (y <= selects[i].pos.y2 && y2 >= selects[i].pos.y2))
            y_cross = true;
        else
            y_cross = false;
        
        // X異뺤씠??Y異뺤씠 ?щ젰 ?덉씠?댁? 寃뱀퀜吏硫??대떦 select element瑜??④?
        if(x_cross == true && y_cross == true)
        {
            selects[i].style.visibility = "hidden";
            hidden_select[hidden_count++] = i;
        }
    }
}

// IE? Maxton?먯꽌 ?④꺼吏?select elements瑜??ㅼ떆 ?쒖떆?댁쨲.
function show_select()
{
    var selects = document.getElementsByTagName('select');
    
    // hide_select function?먯꽌 ?④릿 select elements瑜??ㅼ떆 蹂댁뿬以?
    for(var i=0; i<hidden_select.length; i++)
    {
        selects[hidden_select[i]].style.visibility = "visible";
    }
    hidden_select = null;
}

// ?щ젰 ?덉씠??珥덇린??
// ?щ젰 ?덉씠?대? 留뚮뱾怨??대┃??object???꾩튂瑜?怨꾩궛?댁꽌 ?щ젰???쒖떆???꾩튂瑜?怨꾩궛??
function calendar_set(e)
{
    if(!e) var e = window.event;
    var click_obj = e.target || e.srcElement;
    
    // ?붾㈃??理쒕??ш린瑜?援ы븿.
    try
    {
        var s_width = parseInt(window.scrollMaxX) + parseInt(docElement.clientWidth);
    }
    catch(e)
    {
        var s_width = (document.body.scrollWidth > document.body.clientWidth)?  document.body.scrollWidth : document.body.clientWidth;
    }
    
    // ?대┃??object??醫뚰몴瑜?媛?몄샂
    var pos_x = -140;
    var pos_y = 0;
    var obj = click_obj;
    
    while(obj.offsetParent)
    {
        pos_y += parseInt(obj.offsetTop);
        pos_x += parseInt(obj.offsetLeft);
        
        obj = obj.offsetParent;
    }
    pos_x += parseInt(obj.offsetLeft);
    pos_y += parseInt(obj.offsetTop);
    
    pos_y += click_obj.offsetHeight;
    
    if(s_width < pos_x + 163)
    {
        pos_x -= 163;
        pos_x += parseInt(click_obj.offsetWidth);
    }
    
    // 湲곗〈??留뚮뱺 ?щ젰 ?덉씠?닿? ?덉쑝硫??ъ궗??醫뚰몴???ㅼ떆 怨꾩궛???섍퀬 ?놁쑝硫??앹꽦
    calendar_div = document.getElementById('calendar_div');
    
    if(!calendar_div)
    {
        calendar_div = document.createElement("DIV");
        document.body.appendChild(calendar_div);
    }
    calendar_div.id = "calendar_div";
    calendar_div.style.cssText = "width:140px; background-color:#efefef; z-index:50; padding:10px;";
    calendar_div.style.position = "absolute";
    calendar_div.style.top = pos_y + 'px';
    calendar_div.style.left = pos_x + 'px';
    
    calendar_div.style.visibility = "visible";
    
    // mouseover ?곹깭?먯꽌??李쎈떕湲???대㉧瑜??쒓굅??
    calendar_div.onmouseover = function(e) {
        if(calendar_tt)
            window.clearTimeout(calendar_tt);
    }
    
    // mouseout???섎㈃ 李쎈떕湲???대㉧瑜??ㅼ젙??
    // ?ㅼ젙???쒓컙 ?꾩뿉 李쎌씠 ?ロ옒
    calendar_div.onmouseout = function() {
        if(calendar_tt)
            window.clearTimeout(calendar_tt);
        calendar_tt = window.setTimeout("calendar_hide()", 300);
    }
    
    calendar_div.focus();
    
    // ?붾툝?대┃?대룄 李쎌씠 ?ロ엳?꾨줉..
    //calendar_div.ondblclick = calendar_close;
}

// ?щ젰 ?덉씠?대? ?レ쓬(130315)
function calendar_close()
{
    document.getElementById('calendar_div').style.visibility = "hidden";
    document.getElementById('calendar_months').style.visibility = "hidden";
    document.getElementById('calendar_years').style.visibility = "hidden";
    
    if(hidden_select)
        show_select();
    
    return false;
}

function calendar_years_change(calendar_y, calendar_m)
{
    var calendar_years = document.getElementById('calendar_years');
    var html = calendar_years_html(calendar_y, calendar_m);
    calendar_years.innerHTML = html;
}

// ?꾨룄 ?덉씠??130315)
function calendar_years_html(calendar_y, calendar_m)
{
    var html = "";
    var margin_top = 0;
    var margin_left = 0;
    var prev_year, next_year;
    
    var year = Number(parseInt((Number(calendar_y) - 1)  / 10) * 10 + 1);
    // ?꾨룄?좏깮 ?덉씠???ㅼ젙
    for(var i=0; i<10; i++)
    {
        margin_top = (i >= 4)? 2 : 0;
        margin_left = (i % 4 == 0)? 0 : 2;
        html += "<div style=\"margin-top:"+margin_top+"px; margin-left:"+margin_left+"px; float:left; width:19px; height:20px; text-align:center; padding-top:2px; border:0px solid #c2c2c2; background-color:#e5e5e5; color:#3a3a3a; font-size:11px; cursor:pointer;\" onClick=\"calendar_draw('"+String(year+i)+String(calendar_m)+"01')\" onMouseOver=\"this.style.backgroundColor='#c2c2c2';\" onMouseOut=\"this.style.backgroundColor='#e5e5e5';\">"+String(year+i)+"</div>";
    }
    
    prev_year = (year - i);
    next_year = (year + i);
    html += "<div style=\"margin-top:"+margin_top+"px; margin-left:"+margin_left+"px; float:left; width:19px; height:20px; text-align:center; padding-top:2px; border:0px solid #c2c2c2; background-color:#e5e5e5; color:#3a3a3a; font-size:11px; cursor:pointer;\" onClick=\"calendar_years_change('"+String(prev_year)+"', '"+String(calendar_m)+"')\" onMouseOver=\"this.style.backgroundColor='#c2c2c2';\" onMouseOut=\"this.style.backgroundColor='#e5e5e5';\">?댁쟾</div>";
    html += "<div style=\"margin-top:"+margin_top+"px; margin-left:"+margin_left+"px; float:left; width:19px; height:20px; text-align:center; padding-top:2px; border:0px solid #c2c2c2; background-color:#e5e5e5; color:#3a3a3a; font-size:11px; cursor:pointer;\" onClick=\"calendar_years_change('"+String(next_year)+"', '"+String(calendar_m)+"')\" onMouseOver=\"this.style.backgroundColor='#c2c2c2';\" onMouseOut=\"this.style.backgroundColor='#e5e5e5';\">?ㅼ쓬</div>";
    
    return html;
}

// ?щ젰 ?덉씠?댁뿉 ?щ젰??異쒕젰??
function calendar_draw(set_date)
{
    var days_arr = new Array(31,28,31,30,31,30,31,31,30,31,30,31);   
    var html = "<table border=\"0\" width=\"137\" align=\"center\" bgcolor=\"#ffffff\">";
    var calendar_date, calendar_t;
    
    // ?щ젰???낅젰??input box???レ옄留?寃異쒗븳 媛믪쓽 ?먮┸?섍? 6?먮━ YYYYMM ?닿굅??8?먮━ YYYYMMDD?쇰㈃ ?대떦 ?꾩썡??留욊쾶 ?щ젰???쒖떆??
    if(set_date && (set_date.length == 6 || set_date.length == 8))
    {
        calendar_date = set_date;
        var y = calendar_date.substring(0, 4);
        var m = calendar_date.substring(4, 6);
        var s_t = new Date(y, m-1, 1);
        if(s_t.getMonth()+1 != Number(m))
            calendar_t = null;
        else
            calendar_t = new Date(y, m-1, 1);
    }
    
    // ?ㅻ뒛 ?좎쭨瑜?援ы븿. (?ㅻ뒛?좎쭨??font-weight:bold; ?ㅽ???吏??
    var t = new Date();
    var today = t.getFullYear();
    
    if(t.getMonth()+1 < 10)
        today += '0' + String(t.getMonth()+1);
    else
        today += String(t.getMonth()+1);
    
    if(t.getDate() < 10)
        today += '0' + String(t.getDate());
    else
        today += String(t.getDate());
    
    // ?щ젰???낅젰??input box??媛믪쑝濡?湲곕낯媛믪씠 ?ㅼ젙?섏? ?딆븯?ㅻ㈃ ?ㅻ뒛??湲곗??쇰줈 ?щ젰???쒖떆??
    if(!calendar_t)
    {
        var y = t.getFullYear();
        var m = t.getMonth();
        
        calendar_t = new Date(y, m, 1);
    }
    
    // ?쒖떆???щ젰???꾩썡
    var calendar_yymm = calendar_t.getFullYear();
    calendar_yymm += (calendar_t.getMonth()+1 < 10)? String('0' + (calendar_t.getMonth() + 1)) : String(calendar_t.getMonth()+1);
    
    // ?쒖떆???щ젰???곕룄
    var calendar_y = Number(calendar_yymm.substring(0, 4));
    // ?쒖떆???щ젰????
    var calendar_m = Number(calendar_yymm.substring(4, 6));
    
    // ?댁쟾??留곹겕 媛?(??대┃)
    var prev_m;
    if(Number(calendar_m) == 1)
    {
        prev_m = String(calendar_y - 1);
        prev_m += '12';
    }
    else
    {
        prev_m = String(calendar_y);
        prev_m += (calendar_m - 1 < 10)? '0' + (calendar_m - 1) : calendar_m - 1;
    }
    
    // ?ㅼ쓬??留곹겕媛?(?띤겢由?
    var next_m;
    if(Number(calendar_m) == 12)
    {
        next_m = String(calendar_y + 1);
        next_m += '01';
    }
    else
    {
        next_m = String(calendar_y);
        next_m += (calendar_m + 1 < 10)? '0' + (calendar_m + 1) : calendar_m + 1;
    }
    
    // ?댁쟾 ?ㅼ쓬??媛믪쓣 怨꾩궛?섍린 ?꾪빐 ?щ젰?쒖떆 ?붿쓽 媛믪쓣 ?꾨옒?먯꽌 ?ㅽ듃留곸쑝濡?蹂寃?
    calendar_m = (calendar_m < 10)? String('0' + calendar_m) : String(calendar_m);
    // ?꾨뀈??
    var prev_y = String(calendar_y-1) + calendar_m;
    // ?꾨뀈??
    var next_y = String(calendar_y+1) + calendar_m;
    
    // ?? ?? ?リ린 踰꾪듉 html
    html += "<tr>";
    html += "<td width=\"20\" align=\"left\" valign=\"center;\" bgcolor=\"#f3f3f3\">";
    html += "<img src=\"images/btn_arrow-01.jpg\" width=\"12\" height=\"11\" onClick=\"calendar_draw('"+prev_m+"')\">";
    html += "</td>";
    html += "<td colspan=\"5\" align=\"center\" valign=\"center;\" bgcolor=\"#f3f3f3\">";
    html += "<span style=\"font-size:12px; font-family:Dotum; color:#303030; cursor:pointer;\" bgcolor=\"#f3f3f3\">"+calendar_y+"??/span>";
    html += "<span style=\"font-size:12px; font-family:Dotum; color:#303030; cursor:pointer;\" bgcolor=\"#f3f3f3\">"+calendar_m+"??/span>";
    html += "</td>";
    html += "<td width=\"20\" align=\"right\" valign=\"center;\" bgcolor=\"#f3f3f3\">";
    html += "<img src=\"images/btn_arrow-02.jpg\" width=\"12\" height=\"11\" onClick=\"calendar_draw('"+next_m+"')\">";
    html += "</td>";
	html += "</tr>";
    html += "<tr>";
    html += "<td colspan=\"7\" width=\"100%\" align=\"center\" valign=\"center;\" height=\"7\" bgcolor=\"#f3f3f3\">";
    html += "</tr>";
    html += "</table>";
    // ?붿씪?쒖떆 html
    html += "<table style=\"border:1px solid #e1e1e1\" bgcolor=\"#ffffff\">";
	html += "<tr>";
    html += "<td colspan=\"7\" width=\"100%\" align=\"center\" valign=\"center;\" height=\"5\">";
    html += "</tr>";
    html += "<tr>";
    html += "<td width=\"20\" align=\"center\"><img src=\"images/calendar_date01.gif\" width=\"11\" height=\"10\" /></td>";
    html += "<td width=\"20\" align=\"center\"><img src=\"images/calendar_date02.gif\" width=\"11\" height=\"10\" /></td>";
    html += "<td width=\"20\" align=\"center\"><img src=\"images/calendar_date04.gif\" width=\"11\" height=\"10\" /></td>";
    html += "<td width=\"20\" align=\"center\"><img src=\"images/calendar_date03.gif\" width=\"11\" height=\"10\" /></td>";
    html += "<td width=\"20\" align=\"center\"><img src=\"images/calendar_date05.gif\" width=\"11\" height=\"10\" /></td>";
    html += "<td width=\"20\" align=\"center\"><img src=\"images/calendar_date06.gif\" width=\"11\" height=\"10\" /></td>";
    html += "<td width=\"20\" align=\"center\"><img src=\"images/calendar_date07.gif\" width=\"11\" height=\"10\" /></td>";
    html += "</tr>";
    html += "<tr>";
    html += "<td colspan=\"7\" width=\"100%\" align=\"center\" valign=\"center;\" height=\"5\">";
    html += "</tr>";
    html += "<tr>";
    
    // ?щ젰 ?쒖옉?쇱쓽 ?붿씪??援ы븿
    var week = calendar_t.getDay();
    // ?쒖옉?쇱씠 ?쇱슂?쇱씠 ?꾨땲硫?鍮?TD 異쒕젰
    for(var i=0; i<week; i++)
    {
        html += "<td>&nbsp;</td>\n";
    }
    
    // ?대떦?붿쓽 留덉?留??좎쓣 媛?몄샂.
    if(String(calendar_t.getMonth()+1) == '2')
        max_days = ((( calendar_y % 4 == 0) && (calendar_y % 100 != 0)) || (calendar_y % 400 == 0))? 29 : 28;
    else
        max_days = days_arr[calendar_t.getMonth()];
    
    // ?щ젰 異쒕젰
    var this_date = "";
    var style = "";
    for(var i=1; i<=max_days; i++)
    {
        if(week > 6)
        {
            html += "</tr>";
            week = 0;
        }
        if(week == 0)
        {
            html += "<tr height=\"20\">";
        }
        
        // ?щ젰???꾩썡
        this_date = calendar_yymm;
        // ?쒖떆??
        this_date += (i <= 9)? String('0' + i) : String(i);
        
		style = " font-family:Dotum; font-size:11px; text-align:center;";
	
		//if(today <= this_date)
            style += " cursor:pointer;";
		// input box??媛믨낵 ?숈씪???좎? underline ?쒖떆
        if(set_date == this_date)
            style += " text-decoration:underline;";
        // ?ㅻ뒛?좎쭨??吏꾪븯寃??쒖떆
        if(today == this_date)
            style += " font-weight:bold;";
        // ?쇱슂?쇱? 鍮④컙??
        if(week == 0)
            style += " color:#ff3399;";
        // ?좎슂?쇱? ?뚮???
        if(week == 6)
            style += " color:#3366ff;";

		/*if(today <= this_date){
			html += "<td style=\""+style+"\" onClick=\"calendar_set_date('"+this_date+"');\">"+i+"</td>";
        }else{
			html += "<td style=\""+style+"\">"+i+"</td>";
		}*/


		html += "<td style=\""+style+"\" onClick=\"calendar_set_date('"+this_date+"');\">"+i+"</td>";

		week ++;
    }
    
    // ?좎슂?쇰줈 ?앸굹吏 ?딆븯?쇰㈃ 鍮?TD 異쒕젰
    if(week < 6)
    {
        for(var i=week; i<=6; i++)
        {
            html += "<td>&nbsp;</td>\n";
        }
    }
    html += "</tr>";
    html += "</table>";
    
    html += "<div id=\"calendar_years\" style=\"position:absolute; margin-left:3px; width:154px; visibility:hidden; background-color:#ffffff;\">";
    html += calendar_years_html(calendar_y, calendar_m);
    html += "</div>";
    
    // ?붿꽑???덉씠???ㅼ젙
    html += "<div id=\"calendar_months\" style=\"position:absolute; margin-left:3px; width:154px; visibility:hidden; background-color:#ffffff;\">";
    html += "<div style=\"float:left; width:22px; height:20px; text-align:center; padding-top:2px; border:0px solid #c2c2c2; background-color:#e5e5e5; font-size:11px; cursor:pointer;\" onClick=\"calendar_draw('"+calendar_y+"01')\" onMouseOver=\"this.style.backgroundColor='#c2c2c2';\" onMouseOut=\"this.style.backgroundColor='#e5e5e5';\">1</div>";
    html += "<div style=\"float:left; margin-left:2px; width:22px; height:20px; text-align:center; padding-top:2px; border:0px solid #c2c2c2; background-color:#e5e5e5; font-size:11px; cursor:pointer;\" onClick=\"calendar_draw('"+calendar_y+"02')\" onMouseOver=\"this.style.backgroundColor='#c2c2c2';\" onMouseOut=\"this.style.backgroundColor='#e5e5e5';\">2</div>";
    html += "<div style=\"float:left; margin-left:2px; width:22px; height:20px; text-align:center; padding-top:2px; border:0px solid #c2c2c2; background-color:#e5e5e5; font-size:11px; cursor:pointer;\" onClick=\"calendar_draw('"+calendar_y+"03')\" onMouseOver=\"this.style.backgroundColor='#c2c2c2';\" onMouseOut=\"this.style.backgroundColor='#e5e5e5';\">3</div>";
    html += "<div style=\"float:left; margin-left:2px; width:22px; height:20px; text-align:center; padding-top:2px; border:0px solid #c2c2c2; background-color:#e5e5e5; font-size:11px; cursor:pointer;\" onClick=\"calendar_draw('"+calendar_y+"04')\" onMouseOver=\"this.style.backgroundColor='#c2c2c2';\" onMouseOut=\"this.style.backgroundColor='#e5e5e5';\">4</div>";
    html += "<div style=\"float:left; margin-left:2px; width:22px; height:20px; text-align:center; padding-top:2px; border:0px solid #c2c2c2; background-color:#e5e5e5; font-size:11px; cursor:pointer;\" onClick=\"calendar_draw('"+calendar_y+"05')\" onMouseOver=\"this.style.backgroundColor='#c2c2c2';\" onMouseOut=\"this.style.backgroundColor='#e5e5e5';\">5</div>";
    html += "<div style=\"float:left; margin-left:2px; width:22px; height:20px; text-align:center; padding-top:2px; border:0px solid #c2c2c2; background-color:#e5e5e5; font-size:11px; cursor:pointer;\" onClick=\"calendar_draw('"+calendar_y+"06')\" onMouseOver=\"this.style.backgroundColor='#c2c2c2';\" onMouseOut=\"this.style.backgroundColor='#e5e5e5';\">6</div>";
    html += "<div style=\"float:left; margin-top:1px; width:22px; height:20px; text-align:center; padding-top:2px; border:0px solid #c2c2c2; background-color:#e5e5e5; font-size:11px; cursor:pointer;\" onClick=\"calendar_draw('"+calendar_y+"07')\" onMouseOver=\"this.style.backgroundColor='#c2c2c2';\" onMouseOut=\"this.style.backgroundColor='#e5e5e5';\">7</div>";
    html += "<div style=\"float:left; margin-left:2px; margin-top:1px; width:22px; height:20px; text-align:center; padding-top:2px; border:0px solid #c2c2c2; background-color:#e5e5e5; font-size:11px; cursor:pointer;\" onClick=\"calendar_draw('"+calendar_y+"08')\" onMouseOver=\"this.style.backgroundColor='#c2c2c2';\" onMouseOut=\"this.style.backgroundColor='#e5e5e5';\">8</div>";
    html += "<div style=\"float:left; margin-left:2px; margin-top:1px; width:22px; height:20px; text-align:center; padding-top:2px; border:0px solid #c2c2c2; background-color:#e5e5e5; font-size:11px; cursor:pointer;\" onClick=\"calendar_draw('"+calendar_y+"09')\" onMouseOver=\"this.style.backgroundColor='#c2c2c2';\" onMouseOut=\"this.style.backgroundColor='#e5e5e5';\">9</div>";
    html += "<div style=\"float:left; margin-left:2px; margin-top:1px; width:22px; height:20px; text-align:center; padding-top:2px; border:0px solid #c2c2c2; background-color:#e5e5e5; font-size:11px; cursor:pointer;\" onClick=\"calendar_draw('"+calendar_y+"10')\" onMouseOver=\"this.style.backgroundColor='#c2c2c2';\" onMouseOut=\"this.style.backgroundColor='#e5e5e5';\">10</div>";
    html += "<div style=\"float:left; margin-left:2px; margin-top:1px; width:22px; height:20px; text-align:center; padding-top:2px; border:0px solid #c2c2c2; background-color:#e5e5e5; font-size:11px; cursor:pointer;\" onClick=\"calendar_draw('"+calendar_y+"11')\" onMouseOver=\"this.style.backgroundColor='#c2c2c2';\" onMouseOut=\"this.style.backgroundColor='#e5e5e5';\">11</div>";
    html += "<div style=\"float:left; margin-left:2px; margin-top:1px; width:22px; height:20px; text-align:center; padding-top:2px; border:0px solid #c2c2c2; background-color:#e5e5e5; font-size:11px; cursor:pointer;\" onClick=\"calendar_draw('"+calendar_y+"12')\" onMouseOver=\"this.style.backgroundColor='#c2c2c2';\" onMouseOut=\"this.style.backgroundColor='#e5e5e5';\">12</div>";
    html += "</div>";
    
    // ?щ젰 ?쒖떆
    calendar_div.innerHTML = html;
    
    // IE/Maxton?쇰븣 ?④꺼吏?select elements ?쒖떆
    if(hidden_select)
        show_select();
    
    // Crome, Firefox, Safari媛 ?꾨땲硫??щ젰 ?곸뿭怨?寃뱀튂??select elements ?④?
    if(navigator.userAgent.indexOf('Chrome') == -1 && navigator.userAgent.indexOf('Firefox') == -1 && navigator.userAgent.indexOf('Safari') == -1)
    {
        hide_select(parseInt(calendar_div.style.left), parseInt(calendar_div.style.top), parseInt(calendar_div.style.left) + parseInt(calendar_div.offsetWidth), parseInt(calendar_div.style.top) + parseInt(calendar_div.offsetHeight));
    }
}

// ?좏깮???좎쭨瑜?input box???ｌ뼱以?
function calendar_set_date(set_date)
{
    var week_arr_han = new Array("??, "??, "??, "??, "紐?, "湲?, "??);
    var week_arr_eng = new Array("Sun", "Mon", "Tue", "Wed", "The", "Fri", "Sat");
    
    // FMT 蹂寃?(YYYY-MM-DD)
    if(calendar_obj)
    {
        var year = set_date.substring(0,4);
        var month = set_date.substring(4,6);
        var day = set_date.substring(6,8);
        var sel_date = new Date(year, month - 1, day);
        var week = sel_date.getDay();
        
        var calendar_value = calendar_fmt;
        calendar_value = calendar_value.replace(/yyyy/i, year);
        calendar_value = calendar_value.replace(/mm/i, month);
        calendar_value = calendar_value.replace(/dd/i, day);
        calendar_value = calendar_value.replace(/wh/i, week_arr_han[week]);
        calendar_value = calendar_value.replace(/we/i, week_arr_eng[week]);
        
        calendar_obj.value = calendar_value;
    }
    calendar_close();
    
    // input object???좎쭨瑜??뗮똿?섍퀬 異붽??곸쑝濡??묒뾽?댁빞??寃쎌슦媛 ?덉뼱??
    // document??calendar_set_date_after function???덉쑝硫??ㅽ뻾?섍쾶 ??
    // calendar_set_date_after() ?덉젣
    // if(document.getElementById('sdate').value < '2009-09-14')
    // {
    //     alert('9??14??蹂대떎 ?댁쟾???좏깮?????놁뒿?덈떎');
    // }
    if(typeof calendar_set_date_after == 'function')
    {
        calendar_set_date_after(calendar_obj);
    }
}

// ?щ젰???④?
function calendar_hide()
{
    if(calendar_tt)
        window.clearTimeout(calendar_tt);
    calendar_close();
}

// 300ms ?꾩뿉 ?щ젰???④?
// mouseout??諛붾줈 ?ロ엳吏 ?딄퀬 ?쎄컙??????먯뼱 ?ㅼ떆 留덉슦?ㅺ? 媛붿쓣???щ젰 ?덉씠?대? ?좎??섍린 ?꾪븿
function calendar_afterHide()
{
    if(calendar_tt)
        window.clearTimeout(calendar_tt);
    calendar_tt = window.setTimeout("calendar_hide()", 300);
}

// ?щ젰 ?④? ??대㉧瑜???젣??
function calendar_clearT()
{
    if(calendar_tt)
        window.clearTimeout(calendar_tt);
}

// ?꾨룄 ?대┃???붿꽑???덉씠?대? ?쒖떆/媛먯땄
// on -> off
// off -> on
function calendar_years_toggle()
{
    var calendar_div = document.getElementById('calendar_div');
    var calendar_years = document.getElementById('calendar_years');
    var calendar_months = document.getElementById('calendar_months');
    
    calendar_months.style.visibility = "hidden";
    
    // ?щ젰???????リ린 遺遺꾩? ?쒖떆?섎룄濡??곷떒?먯꽌 20px ?대젮???쒖떆??
    var top = parseInt(calendar_div.style.top) + 20;
    var left = parseInt(calendar_div.style.left);
    
    // position:absolute; ?댁?留??щ젰 ?덉씠?댁쓽 ?곷????덈?醫뚰몴濡??몄떇??
    calendar_years.style.top = '20px';
    calendar_years.style.left = '0px';
    
    // ?붿꽑???덉씠???좉?
    if(calendar_years.style.visibility == "hidden")
        calendar_years.style.visibility = "visible";
    else
        calendar_years.style.visibility = "hidden";
}

// ???대┃???꾨룄?좏깮 ?덉씠?대? ?쒖떆/媛먯땄
// on -> off
// off -> on
function calendar_months_toggle()
{
    var calendar_div = document.getElementById('calendar_div');
    var calendar_months = document.getElementById('calendar_months');
    var calendar_years = document.getElementById('calendar_years');
    
    calendar_years.style.visibility = "hidden";
    
    // ?щ젰???????リ린 遺遺꾩? ?쒖떆?섎룄濡??곷떒?먯꽌 20px ?대젮???쒖떆??
    var top = parseInt(calendar_div.style.top) + 20;
    var left = parseInt(calendar_div.style.left);
    
    // position:absolute; ?댁?留??щ젰 ?덉씠?댁쓽 ?곷????덈?醫뚰몴濡??몄떇??
    calendar_months.style.top = '20px';
    calendar_months.style.left = '0px';
    
    // ?붿꽑???덉씠???좉?
    if(calendar_months.style.visibility == "hidden")
        calendar_months.style.visibility = "visible";
    else
        calendar_months.style.visibility = "hidden";
}

// ?щ젰?쒖떆 ?몄텧?⑥닔 onClick="calendar(event, 'ID')"濡??몄텧
function calendar(e, obj_name, fmt)
{
    if(!e) var e = window.event;
    calendar_obj = document.getElementById(obj_name);
    // input object??媛믪뿉???レ옄留?異붿텧??
    var default_date = calendar_obj.value.replace(/[^0-9]/g, '');
    
    // YYYYMM ?뱀? YYYYMMDD ?뺤떇???꾨땲硫?臾댁떆??
    if(default_date.length != 6 && default_date.length != 8)
        default_date = '';
    
    // onClick="calendar(event, 'ID')"??ID Object媛 ?놁쑝硫??щ젰???쒖떆?대룄 ?ｌ쓣怨녹씠 ?놁쑝誘濡??ㅻ쪟泥섎━
    if(!calendar_obj)
    {
        alert(obj_name + ' object undefined');
        return;
    }
    
    if(fmt)
        calendar_fmt = fmt;
    else
        calendar_fmt = "YYYY-MM-DD";
    
    // ?щ젰 ?덉씠??珥덇린??
    calendar_set(e);
    // ?щ젰 ?쒖떆
    calendar_draw(default_date);
}
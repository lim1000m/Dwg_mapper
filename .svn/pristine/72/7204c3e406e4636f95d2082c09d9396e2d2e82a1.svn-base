package kr.mp.dwg.domain;

import org.apache.commons.lang.builder.ToStringBuilder;
import org.apache.commons.lang.builder.ToStringStyle;

public class BasicGridVO { 
	
	/** 현재 페이지 번호 */ 
	private int page = 1;
	/** 페이지당 조회 Row */
	private int rows = 200;
	/** 정렬 기준 컬럼 */
	private String sidx;
	/** 정렬 방식 */
	private String sord;
	/** 조회 시작 rownum */
	private int startNum = 1;
	/** 조회 종료 rownum */
	private int endNum = 200;
	
	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public int getRows() {
		return rows;
	}

	public void setRows(int rows) {
		this.rows = rows;
	}

	public String getSidx() {
		return sidx;
	}

	public void setSidx(String sidx) {
		this.sidx = sidx;
	}

	public String getSord() {
		return sord;
	}

	public void setSord(String sord) {
		this.sord = sord;
	}

	public int getStartNum() {
		return startNum;
	}

	public void setStartNum(int startNum) {
		this.startNum = startNum;
	}

	public int getEndNum() {
		return endNum;
	}

	public void setEndNum(int endNum) {
		this.endNum = endNum;
	}

	public String toString() { 
		return ToStringBuilder.reflectionToString(this, ToStringStyle.MULTI_LINE_STYLE);
	}

}

package kr.mp.dwg.domain;

import java.io.Serializable;
import java.util.List;

import egovframework.rte.psl.dataaccess.util.EgovMap;

public class JqGridVO implements Serializable { 

	private static final long serialVersionUID = 1L;

	private int page = 1;		// 현재 페이지 정보
	private int total;			// 총 페이지 수
	private int records;		// 전체 데이터 개수
	private List<EgovMap> rows;

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		
		this.page = page;
		
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public int getRecords() {
		return records;
	}

	public void setRecords(int records) {
			this.records = records;
	}

	public List<EgovMap> getRows() {
		return rows;
	}

	public void setRows(List<EgovMap> rows) {
		this.rows = rows;
	}

}
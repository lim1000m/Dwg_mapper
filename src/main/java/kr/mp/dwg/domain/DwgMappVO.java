package kr.mp.dwg.domain;

public class DwgMappVO {
	int objId;
	int mpDwgSerno;
	String mpDwgNm;
	String mpGroupCd;
	String drwngKind;
	int drwngSerno;
	String drwngNm;
	String groupCd;
	
	public String getDrwngKind() {
		return drwngKind;
	}
	public void setDrwngKind(String drwngKind) {
		this.drwngKind = drwngKind;
	}
	public int getDrwngSerno() {
		return drwngSerno;
	}
	public void setDrwngSerno(int drwngSerno) {
		this.drwngSerno = drwngSerno;
	}
	public String getDrwngNm() {
		return drwngNm;
	}
	public void setDrwngNm(String drwngNm) {
		this.drwngNm = drwngNm;
	}
	public String getGroupCd() {
		return groupCd;
	}
	public void setGroupCd(String groupCd) {
		this.groupCd = groupCd;
	}
	public int getObjId() {
		return objId;
	}
	public void setObjId(int objId) {
		this.objId = objId;
	}
	public int getMpDwgSerno() {
		return mpDwgSerno;
	}
	public void setMpDwgSerno(int mpDwgSerno) {
		this.mpDwgSerno = mpDwgSerno;
	}
	public String getMpDwgNm() {
		return mpDwgNm;
	}
	public void setMpDwgNm(String mpDwgNm) {
		this.mpDwgNm = mpDwgNm;
	}
	public String getMpGroupCd() {
		return mpGroupCd;
	}
	public void setMpGroupCd(String mpGroupCd) {
		this.mpGroupCd = mpGroupCd;
	}
}

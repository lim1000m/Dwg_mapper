package kr.mp.dwg.cmmn.util;

import java.util.ArrayList;

/**
 * 
 * @Class Name : ColumnSet.java
 * @Description : Grid 형태의 데이터 처리를 위한 DataSet
 * @Modification Information  
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 11.12.07     길기용       최초생성
 * 
 * @author 이에스이 길기용
 * @since 2011. 12. 7.
 * @version 1.0
 * @see
 * 
 *  Copyright (C) by ESE All right reserved.
 */

public class ColumnSet {
	private String setName = null;
	private String dataKind = null;
	private ArrayList<String> columnTypeList = null;
	private ArrayList<String> codeList = null;
	private ArrayList<String> nameList = null;
	private ArrayList<String> typeList = null;
	private ArrayList<String> lengthList = null;
	private ArrayList<String> alignList = null;
	private ArrayList<String> sortList = null;
	private ArrayList<String> hiddenList = null;
	private ArrayList<FunctionSet> funcList = null;
	
	public ColumnSet() {
		columnTypeList = new ArrayList<String>(); 
		codeList = new ArrayList<String>();
		nameList = new ArrayList<String>();
		typeList = new ArrayList<String>();
		lengthList = new ArrayList<String>();
		alignList = new ArrayList<String>();
		sortList = new ArrayList<String>();
		hiddenList = new ArrayList<String>();
		funcList = new ArrayList<FunctionSet>();
		
	}
	
	public ColumnSet(String setName, String dataKind) {
		this();
		this.setName = setName;
		this.dataKind = dataKind;
	}
	
	public void setSetName(String setName) {
		this.setName = setName;
	}
	
	public void setDataKind(String dataKind) {
		this.dataKind = dataKind;
	}
	
	public void addCodeList(String code) {
		codeList.add(code);
	}
	
	public void addNameList(String name) {
		nameList.add(name);
	}
	
	public void addTypeList(String type) {
		typeList.add(type);
	}
	
	
	public void addLengthList(String length) {
		lengthList.add(length);
	}
	
	public void addAlignList(String align) {
		alignList.add(align);
	}
	
	public void addSortList(String sort) {
		sortList.add(sort);
	}
	
	public void addHiddenList(String hidden) {
		hiddenList.add(hidden);
	}
	
	public void addFuncList(FunctionSet func) {
		funcList.add(func);
	}
	
	public void addColumnTypeList(String columnType) {
		columnTypeList.add(columnType);
	}
	
	public void addColumnSetValue(String columnType, String code, String name, String type, String length, 
			String align, String sort, String hidden, FunctionSet func) {
		addColumnTypeList(columnType);
		addCodeList(code);
		addNameList(name);
		addTypeList(type);
		addLengthList(length);
		addAlignList(align);
		addSortList(sort);
		addHiddenList(hidden);
		addFuncList(func);
	}
	
	public String getSetName() {
		return this.setName;
	}
	
	public String getDataKind() {
		return this.dataKind;
	}
	
	public int size() {
		return codeList.size();
	}
	
	public ArrayList<String> getColumnTypeList() {
		return columnTypeList;
	}

	public ArrayList<String> getCodeList() {
		return codeList;
	}

	public ArrayList<String> getNameList() {
		return nameList;
	}

	public ArrayList<String> getTypeList() {
		return typeList;
	}

	public ArrayList<String> getLengthList() {
		return lengthList;
	}

	public ArrayList<String> getAlignList() {
		return alignList;
	}

	public ArrayList<String> getSortList() {
		return sortList;
	}

	public ArrayList<String> getHiddenList() {
		return hiddenList;
	}

	public String getCode(int index, int kind) {
		return getSplitString(codeList.get(index), kind);
	}
	
	public String getCode(int index) {
		return getCode(index, 0);
	}
	
	public String getName(int index, int kind) {
		return getSplitString(nameList.get(index), kind);
	}

	public String getName(int index) {
		return getName(index, 0);
	}
	
	public String getType(int index, int kind) {
		String columnType = "string";
		String type = getSplitString(typeList.get(index), kind);
		if ("string".equals(type.toLowerCase()))
			columnType = "string";
		else if ("int".equals(type.toLowerCase()))
			columnType = "int";
		else if ("number".equals(type.toLowerCase()))
			columnType = "number";
		else if ("checkbox".equals(type.toLowerCase()))
			columnType = "checkbox";
		else if ("function".equals(type.toLowerCase()))
			columnType = "function";
		return columnType;
	}
	
	public String getType(int index) {
		return getType(index, 0);
	}
	
	public int getLength(int index, int kind) {
		int ret = 0;
		
		String tmp = getSplitString(lengthList.get(index), kind);
		try {
			ret = Integer.parseInt(tmp);
		} catch (Exception e) {
			ret = 0;
		}
		return ret;
	}
	
	public int getLength(int index) {
		return getLength(index, 0);
	}
	
	public String getAlign(int index, int kind) {
		return getSplitString(alignList.get(index), kind);
	}
	
	public String getAlign(int index) {
		return getAlign(index, 0);
	}
	
	public String getSort(int index, int kind) {
		return getSplitString(sortList.get(index), kind);
	}
	
	public String getSort(int index) {
		return getSort(index, 0);
	}
	
	public String getHidden(int index, int kind) {
		return getSplitString(hiddenList.get(index), kind);
	}
	
	public String getHidden(int index) {
		return getHidden(index, 0);
	}

	public ArrayList<FunctionSet> getFuncList() {
		return funcList;
	}
	
	
	public FunctionSet getFunc(int index) {
		return funcList.get(index);
	}
	
	public String getColumnType(int index, int kind) {
		return getSplitString(columnTypeList.get(index), kind);
	}
	
	public String getColumnType(int index) {
		return getColumnType(index, 0);
	}
	
	public String getSplitString(String value, int kind) {
		String[] tmp = value.split(",");
		if (kind > tmp.length - 1)
			return tmp[0];
		else
			return tmp[kind];        
	}

}
package kr.mp.dwg.cmmn.util;

import java.util.ArrayList;

public class FunctionSet{
	String func = "";
	String funcCode = "";
	String funcValue = "";
	
	ArrayList<String> paramList = null;
	
	public FunctionSet(){
		paramList = new ArrayList<String>();
	}

	public FunctionSet(String function){
		func = function;
		paramList = new ArrayList<String>();
	}
	
	
	/**
	 * @return the function
	 */
	public String getFunc() {
		return func;
	}

	/**
	 * @param function the function to set
	 */
	public void setFunc(String function) {
		this.func = function;
	}
	
	public String getFuncCode() {
		return funcCode;
	}

	public void setFuncCode(String funcCode) {
		this.funcCode = funcCode;
	}

	public String getFuncValue() {
		return funcValue;
	}

	public void setFuncValue(String funcValue) {
		this.funcValue = funcValue;
	}

	/**
	 * @return the paramList
	 */
	public ArrayList<String> getParamList() {
		return paramList;
	}

	/**
	 * @param paramList the paramList to set
	 */
	public void setParamList(ArrayList<String> paramList) {
		this.paramList = paramList;
	}
	
	public void addParam(String param){
		paramList.add(param);
	}
	
	public String getJavaScriptFunc(ArrayList<String> value){
		String function = func;
		for(int i=0; i<value.size(); i++){
			int index = i+1;
			function = function.replace("%"+index, String.valueOf(value.get(i)));
		}
		return function;
	}

	
	
}
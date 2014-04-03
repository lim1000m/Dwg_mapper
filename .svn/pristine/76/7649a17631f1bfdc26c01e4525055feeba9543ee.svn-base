package kr.mp.dwg.cmmn.validation.impl;

import javax.validation.ConstraintValidator;

import javax.validation.ConstraintValidatorContext;

import java.util.regex.Matcher; 

import kr.mp.dwg.cmmn.validation.EngNum;

public class EngNumValidator implements ConstraintValidator<EngNum, String> {
	private java.util.regex.Pattern pattern = java.util.regex.Pattern.compile("^[a-zA-Z0-9]+$");
    
    public void initialize(EngNum annotation) {
    }

    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (value == null || value.length() == 0) {
            return true;
        }
        Matcher m = pattern.matcher(value);
        return m.matches();
    }
}
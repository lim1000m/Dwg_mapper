package kr.mp.dwg.cmmn.validation.impl;

import javax.validation.ConstraintValidator;

import javax.validation.ConstraintValidatorContext;

import java.util.regex.Matcher; 

import kr.mp.dwg.cmmn.validation.Kor;

public class KoreanValidator implements ConstraintValidator<Kor, String> {
	private java.util.regex.Pattern pattern = java.util.regex.Pattern.compile("^[\uAC00-\uD7A3]+$");
    
    public void initialize(Kor annotation) {
    }

    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (value == null || value.length() == 0) {
            return true;
        }
        Matcher m = pattern.matcher(value);
        return m.matches();
    }
}
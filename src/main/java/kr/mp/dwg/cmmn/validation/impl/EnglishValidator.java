package kr.mp.dwg.cmmn.validation.impl;

import javax.validation.ConstraintValidator;


import javax.validation.ConstraintValidatorContext;

import java.util.regex.Matcher; 

import kr.mp.dwg.cmmn.validation.Eng;

public class EnglishValidator implements ConstraintValidator<Eng, String> {
	private java.util.regex.Pattern pattern = java.util.regex.Pattern.compile("^[a-zA-Z]+$");
    
    public void initialize(Eng annotation) {
    }

    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (value == null || value.length() == 0) {
            return true;
        }
        Matcher m = pattern.matcher(value);
        return m.matches();
    }
}
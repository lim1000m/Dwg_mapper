package kr.mp.dwg.cmmn.validation.impl;

import javax.validation.ConstraintValidator;

import javax.validation.ConstraintValidatorContext;

import java.util.regex.Matcher; 

import kr.mp.dwg.cmmn.validation.UserId;

public class UserIdValidator implements ConstraintValidator<UserId, String> {
	private java.util.regex.Pattern pattern = java.util.regex.Pattern.compile("^[a-zA-z]{1}[0-9a-zA-Z]+$");
    
    public void initialize(UserId annotation) {
    }

    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (value == null || value.length() == 0) {
            return true;
        }
        Matcher m = pattern.matcher(value);
        return m.matches();
    }
}
package kr.mp.dwg.cmmn.validation;

import java.lang.annotation.Documented;


import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
 
import javax.validation.Constraint;
import javax.validation.Payload;

import kr.mp.dwg.cmmn.validation.impl.EnglishValidator;

@Documented
@Target( { ElementType.METHOD, ElementType.FIELD })
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = EnglishValidator.class)
public @interface Eng {
	String message() default "{valid.eng.message}";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
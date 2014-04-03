package kr.mp.dwg.cmmn.validation;

import java.lang.annotation.Documented;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
 
import javax.validation.Constraint;
import javax.validation.Payload;

import kr.mp.dwg.cmmn.validation.impl.EngNumValidator;
 
@Documented
@Target( { ElementType.METHOD, ElementType.FIELD })
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = EngNumValidator.class)
public @interface EngNum {
	String message() default "{valid.engNum.message}";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
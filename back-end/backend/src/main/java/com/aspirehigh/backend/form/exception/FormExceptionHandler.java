package com.aspirehigh.backend.form.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.aspirehigh.backend.common.exception.model.ErrorResponse;
import com.aspirehigh.backend.form.exception.types.FormValidationException;

@RestControllerAdvice
public class FormExceptionHandler {

	@ExceptionHandler(FormValidationException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public ErrorResponse handleFormValidationException(FormValidationException ex) {
		return new ErrorResponse(ex.getMessage(), HttpStatus.BAD_REQUEST);
	}

}

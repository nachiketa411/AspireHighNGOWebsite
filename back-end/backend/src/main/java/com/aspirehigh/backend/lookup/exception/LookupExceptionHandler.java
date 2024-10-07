package com.aspirehigh.backend.lookup.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.aspirehigh.backend.common.exception.model.ErrorResponse;
import com.aspirehigh.backend.lookup.exception.types.EntityAlreadyExistsException;
import com.aspirehigh.backend.lookup.exception.types.EntityNotFoundException;
import com.aspirehigh.backend.lookup.exception.types.InvalidLookupStateException;

@RestControllerAdvice
public class LookupExceptionHandler {

	@ExceptionHandler(EntityNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public ErrorResponse handleEntityNotFoundException(EntityNotFoundException ex) {
		return new ErrorResponse(ex.getMessage(), HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(EntityAlreadyExistsException.class)
	@ResponseStatus(HttpStatus.CONFLICT)
	public ErrorResponse handleEntityAlreadyExistsException(EntityAlreadyExistsException ex) {
		return new ErrorResponse(ex.getMessage(), HttpStatus.CONFLICT);
	}

	@ExceptionHandler(InvalidLookupStateException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public ErrorResponse handleInvalidLookupStateException(InvalidLookupStateException ex) {
		return new ErrorResponse(ex.getMessage(), HttpStatus.BAD_REQUEST);
	}

}

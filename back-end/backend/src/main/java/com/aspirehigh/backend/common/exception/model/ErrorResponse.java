package com.aspirehigh.backend.common.exception.model;

import java.time.Instant;

import org.springframework.http.HttpStatus;

public class ErrorResponse {

	private String message;
	private String timestamp;
	private int status;
	private String details;

	public ErrorResponse(String message, HttpStatus status) {
		this.message = message;
		this.timestamp = Instant.now().toString();
		this.status = status.value();
		this.details = null;
	}

	public ErrorResponse(String message, HttpStatus status, String details) {
		this.message = message;
		this.timestamp = Instant.now().toString();
		this.status = status.value();
		this.details = details;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(String timestamp) {
		this.timestamp = timestamp;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

}

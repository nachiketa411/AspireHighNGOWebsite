package com.aspirehigh.backend.lookup.exception.types;

public class InvalidLookupStateException extends RuntimeException {

	/**
	 * This is a unique identifier for your class that ensures the correct version
	 * of the class is used during deserialization. The value 1L is often used as a
	 * default for serialVersionUID in classes that are unlikely to change
	 * frequently. However, if your class evolves over time (for example, if you add
	 * fields or methods), you may want to update this value to reflect a new
	 * version of the class.
	 */
	private static final long serialVersionUID = 1L;

	public InvalidLookupStateException(String entityName, String state) {
		super(entityName + " is in an invalid state: " + state);
	}

}

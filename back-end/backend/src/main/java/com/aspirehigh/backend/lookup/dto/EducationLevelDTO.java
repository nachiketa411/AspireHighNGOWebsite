package com.aspirehigh.backend.lookup.dto;

public class EducationLevelDTO {

	private Long educationLevelId;
	private String educationLevelName;

	public EducationLevelDTO(Long educationLevelId, String educationLevelName) {
		this.educationLevelId = educationLevelId;
		this.educationLevelName = educationLevelName;
	}

	public Long getEducationLevelId() {
		return educationLevelId;
	}

	public void setEducationLevelId(Long educationLevelId) {
		this.educationLevelId = educationLevelId;
	}

	public String getEducationLevelName() {
		return educationLevelName;
	}

	public void setEducationLevelName(String educationLevelName) {
		this.educationLevelName = educationLevelName;
	}

}

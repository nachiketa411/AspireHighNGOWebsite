package com.aspirehigh.backend.lookup.dto;

public class DisabilityDTO {

	private Long disabilityId;
	private String disabilityName;

	public DisabilityDTO(Long disabilityId, String disabilityName) {
		this.disabilityId = disabilityId;
		this.disabilityName = disabilityName;
	}

	public Long getDisabilityId() {
		return disabilityId;
	}

	public void setDisabilityId(Long disabilityId) {
		this.disabilityId = disabilityId;
	}

	public String getDisabilityName() {
		return disabilityName;
	}

	public void setDisabilityName(String disabilityName) {
		this.disabilityName = disabilityName;
	}

}
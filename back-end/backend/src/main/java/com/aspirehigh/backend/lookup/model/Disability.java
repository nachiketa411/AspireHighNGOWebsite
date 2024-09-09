package com.aspirehigh.backend.lookup.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "disability", schema = "lookup")
public class Disability extends BaseLookupEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "disability_id")
	private Long disablityId;

	@Column(name = "disability_name", nullable = false)
	private String disabilityName;

	public Long getDisablityId() {
		return disablityId;
	}

	public void setDisablityId(Long disablityId) {
		this.disablityId = disablityId;
	}

	public String getDisabilityName() {
		return disabilityName;
	}

	public void setDisabilityName(String disabilityName) {
		this.disabilityName = disabilityName;
	}

}

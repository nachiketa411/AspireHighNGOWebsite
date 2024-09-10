package com.aspirehigh.backend.lookup.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "ethnicity", schema = "lookup")
public class Ethnicity extends BaseLookupEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ethnicity_id")
	private Long ethnicityId;

	@Column(name = "ethnicity_label", nullable = false)
	private String ethnicityLabel;

	@Column(name = "ethnicity_code", nullable = true)
	private String ethnicityCode;

	@Column(name = "description", nullable = true)
	private String description;

	public Long getEthnicityId() {
		return ethnicityId;
	}

	public void setEthnicityId(Long ethnicityId) {
		this.ethnicityId = ethnicityId;
	}

	public String getEthnicityLabel() {
		return ethnicityLabel;
	}

	public void setEthnicityLabel(String ethnicityLabel) {
		this.ethnicityLabel = ethnicityLabel;
	}

	public String getEthnicityCode() {
		return ethnicityCode;
	}

	public void setEthnicityCode(String ethnicityCode) {
		this.ethnicityCode = ethnicityCode;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}

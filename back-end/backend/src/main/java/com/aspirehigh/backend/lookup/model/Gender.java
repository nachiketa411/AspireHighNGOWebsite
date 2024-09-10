package com.aspirehigh.backend.lookup.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "gender", schema = "lookup")
public class Gender extends BaseLookupEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "gender_id")
	private Long genderId;

	@Column(name = "gender_label", nullable = false)
	private String genderLabel;

	@Column(name = "gender_code", nullable = true)
	private String genderCode;

	@Column(name = "sort_order", nullable = false)
	private Integer sortOrder;

	@Column(name = "synonyms", nullable = true)
	private String[] synonyms;

	public Long getGenderId() {
		return genderId;
	}

	public void setGenderId(Long genderId) {
		this.genderId = genderId;
	}

	public String getGenderLabel() {
		return genderLabel;
	}

	public void setGenderLabel(String genderLabel) {
		this.genderLabel = genderLabel;
	}

	public String getGenderCode() {
		return genderCode;
	}

	public void setGenderCode(String genderCode) {
		this.genderCode = genderCode;
	}

	public Integer getSortOrder() {
		return sortOrder;
	}

	public void setSortOrder(Integer sortOrder) {
		this.sortOrder = sortOrder;
	}

	public String[] getSynonyms() {
		return synonyms;
	}

	public void setSynonyms(String[] synonyms) {
		this.synonyms = synonyms;
	}

}

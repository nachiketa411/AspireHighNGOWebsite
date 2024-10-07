package com.aspirehigh.backend.lookup.model;

import com.aspirehigh.backend.lookup.utilities.Constants.AttributeTypes;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "academic_attribute", schema = "lookup")
public class AcademicAttribute extends BaseLookupEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "attribute_id")
	private Long attributeId;

	@Enumerated(EnumType.STRING)
	@Column(name = "attribute_type", nullable = false)
	private AttributeTypes attributeType;

	@Column(name = "category", nullable = false)
	private String category;

	@Column(name = "attribute_name", nullable = false)
	private String attributeName;

	public Long getAttributeId() {
		return attributeId;
	}

	public void setAttributeId(Long attributeId) {
		this.attributeId = attributeId;
	}

	public AttributeTypes getAttributeType() {
		return attributeType;
	}

	public void setAttributeType(AttributeTypes attributeType) {
		this.attributeType = attributeType;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getAttributeName() {
		return attributeName;
	}

	public void setAttributeName(String attributeName) {
		this.attributeName = attributeName;
	}

}

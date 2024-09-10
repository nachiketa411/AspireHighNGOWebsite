package com.aspirehigh.backend.lookup.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "proficiency_level", schema = "lookup")
public class ProficiencyLevel extends BaseLookupEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "proficiency_id")
	private Long proficiencyId;

	@Column(name = "level_name", nullable = false)
	private String levelName;

	public Long getProficiencyId() {
		return proficiencyId;
	}

	public void setProficiencyId(Long proficiencyId) {
		this.proficiencyId = proficiencyId;
	}

	public String getLevelName() {
		return levelName;
	}

	public void setLevelName(String levelName) {
		this.levelName = levelName;
	}

}

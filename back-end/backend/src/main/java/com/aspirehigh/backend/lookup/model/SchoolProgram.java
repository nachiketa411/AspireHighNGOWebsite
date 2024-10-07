package com.aspirehigh.backend.lookup.model;

import com.aspirehigh.backend.lookup.utilities.Constants.SchoolProgramName;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "school_program", schema = "lookup")
public class SchoolProgram extends BaseLookupEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "program_id")
	private Long programId;

	@Enumerated(EnumType.STRING)
	@Column(name = "program_name", nullable = false)
	private SchoolProgramName programName;

	public Long getProgramId() {
		return programId;
	}

	public void setProgramId(Long programId) {
		this.programId = programId;
	}

	public SchoolProgramName getProgramName() {
		return programName;
	}

	public void setProgramName(SchoolProgramName programName) {
		this.programName = programName;
	}

}

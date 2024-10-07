package com.aspirehigh.backend.lookup.utilities;

import com.aspirehigh.backend.lookup.dto.EducationLevelDTO;
import com.aspirehigh.backend.lookup.model.EducationLevel;

public class EducationLevelMapper {

	public EducationLevelDTO mapEducationLevelToDTO(EducationLevel educationLevel) {

		if (educationLevel == null) {
			return null;
		}
		return new EducationLevelDTO(educationLevel.getEducationLevelId(), educationLevel.getEducationLevelName());
	}

	public static EducationLevel mapDTOToEducationLevelEntity(EducationLevelDTO educationLevelDTO) {

		if (educationLevelDTO == null) {
			return null;
		}
		EducationLevel educationLevel = new EducationLevel();
		educationLevel.setEducationLevelName(educationLevelDTO.getEducationLevelName());
		return educationLevel;
	}

}

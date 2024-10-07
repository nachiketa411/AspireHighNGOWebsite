package com.aspirehigh.backend.lookup.utilities;

import com.aspirehigh.backend.lookup.dto.DisabilityDTO;
import com.aspirehigh.backend.lookup.model.Disability;

public class DisabilitiesMapper {

	public static DisabilityDTO mapDisabilityToDTO(Disability disability) {

		if (disability == null) {
			return null;
		}
		return new DisabilityDTO(disability.getDisabilityId(), disability.getDisabilityName());

	}

	public static Disability mapDTOToDisabilityEntity(DisabilityDTO disabilityDTO) {

		if (disabilityDTO == null) {
			return null;
		}
		Disability disability = new Disability();
		disability.setDisabilityName(disabilityDTO.getDisabilityName());
		return disability;
	}

}

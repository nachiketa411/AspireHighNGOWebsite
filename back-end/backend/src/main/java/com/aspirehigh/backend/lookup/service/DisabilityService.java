package com.aspirehigh.backend.lookup.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.aspirehigh.backend.lookup.dto.DisabilityDTO;

@Service
public interface DisabilityService {

	// Method to fetch all disabilities
	List<DisabilityDTO> getAllDisabilities();

	// Method to fetch a disability by ID
	Optional<DisabilityDTO> getDisabilityById(Long id);

	DisabilityDTO createDisability(DisabilityDTO disabilityDTO);

	// Method to update an existing disability
	Optional<DisabilityDTO> updateDisability(Long id, DisabilityDTO disabilityDTO);

	// Method to delete a disability by ID
	boolean deleteDisability(Long id);

}

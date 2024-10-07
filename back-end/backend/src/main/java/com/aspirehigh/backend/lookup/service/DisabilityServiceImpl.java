package com.aspirehigh.backend.lookup.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;

import com.aspirehigh.backend.lookup.dto.DisabilityDTO;
import com.aspirehigh.backend.lookup.exception.types.EntityAlreadyExistsException;
import com.aspirehigh.backend.lookup.exception.types.EntityNotFoundException;
import com.aspirehigh.backend.lookup.model.Disability;
import com.aspirehigh.backend.lookup.repository.DisabilityRepository;
import com.aspirehigh.backend.lookup.utilities.DisabilitiesMapper;

public class DisabilityServiceImpl implements DisabilityService {

	private final DisabilityRepository disabilityRepository;

	@Autowired
	public DisabilityServiceImpl(DisabilityRepository disabilityRepository) {
		this.disabilityRepository = disabilityRepository;
	}

	@Override
	public List<DisabilityDTO> getAllDisabilities() {
		List<Disability> disabilities = disabilityRepository.findAllByIsActiveTrue();
		return disabilities.stream().map(DisabilitiesMapper::mapDisabilityToDTO).collect(Collectors.toList());
	}

	@Override
	public Optional<DisabilityDTO> getDisabilityById(Long id) {
		Optional<Disability> disability = disabilityRepository.findByIdAndIsActiveTrue(id);

		if (disability.isPresent()) {
			return Optional.of(DisabilitiesMapper.mapDisabilityToDTO(disability.get()));
		} else {
			// You can throw a custom exception or return an empty Optional
			throw new EntityNotFoundException("Disability: ", id);
		}
	}

	@Override
	public DisabilityDTO createDisability(DisabilityDTO disabilityDTO) {
		// Check if a disability with the same name already exists
		if (disabilityRepository.existsByDisabilityName(disabilityDTO.getDisabilityName())) {
			throw new EntityAlreadyExistsException("Disability", "name: " + disabilityDTO.getDisabilityName()); // Handle
																												// exception
		}

		// If not, create a new disability
		Disability disability = DisabilitiesMapper.mapDTOToDisabilityEntity(disabilityDTO);
		Disability savedDisability = disabilityRepository.save(disability);
		return DisabilitiesMapper.mapDisabilityToDTO(savedDisability);
	}

	@Override
	public Optional<DisabilityDTO> updateDisability(Long id, DisabilityDTO disabilityDTO) {

		Optional<Disability> optionalDisability = disabilityRepository.findByIdAndIsActiveTrue(id);

		// If disability is found, update it; otherwise, throw an exception
		if (optionalDisability.isPresent()) {
			Disability disability = optionalDisability.get();
			disability.setDisabilityName(disabilityDTO.getDisabilityName());
			disabilityRepository.save(disability);
			return Optional.of(DisabilitiesMapper.mapDisabilityToDTO(disability));
		} else {
			throw new EntityNotFoundException("Disability: ", id); // Handle exception
		}
	}

	@Override
	public boolean deleteDisability(Long id) {

		Optional<Disability> disability = disabilityRepository.findByIdAndIsActiveTrue(id);

		// If disability exists, mark it as inactive instead of deleting it
		if (disability.isPresent()) {
			Disability existingDisability = disability.get();
			existingDisability.setIsActive(false); // Set the is_active flag to false
			disabilityRepository.save(existingDisability); // Save the updated entity
			return true;
		} else {
			throw new EntityNotFoundException("Disability: ", id); // Handle exception
		}
	}

}

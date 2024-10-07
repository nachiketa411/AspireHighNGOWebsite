package com.aspirehigh.backend.lookup.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aspirehigh.backend.lookup.model.Disability;

@Repository
public interface DisabilityRepository extends JpaRepository<Disability, Long> {

	// Fetch all active disabilities
	List<Disability> findAllByIsActiveTrue();

	// Find a disability by ID if it is active
	Optional<Disability> findByIdAndIsActiveTrue(Long id);

	// Check if a disability with a specific name exists
	boolean existsByDisabilityName(String disabilityName);

}

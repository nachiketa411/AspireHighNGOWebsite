package com.aspirehigh.backend.lookup.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aspirehigh.backend.lookup.model.Gender;

@Repository
public interface GenderRepository extends JpaRepository<Gender, Long> {
}

package com.aspirehigh.backend.lookup.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aspirehigh.backend.lookup.model.Language;

@Repository
public interface LanguageRepository extends JpaRepository<Language, Long> {
}

package com.example.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.project.model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    // Basic CRUD operations are provided by JpaRepository
} 
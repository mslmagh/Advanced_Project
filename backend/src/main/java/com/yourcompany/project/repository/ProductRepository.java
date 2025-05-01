package com.yourcompany.project.repository;

import com.yourcompany.project.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    // Basic CRUD operations are provided by JpaRepository
} 
package com.yourcompany.project.service;

import com.yourcompany.project.model.Product;
import com.yourcompany.project.model.User;
import com.yourcompany.project.repository.ProductRepository;
import com.yourcompany.project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;

    public Product createProduct(Product product) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User seller = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
        product.setSeller(seller);
        return productRepository.save(product);
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
    }

    public List<Product> getProductsByCategory(Long categoryId) {
        return productRepository.findByCategoryId(categoryId);
    }

    public List<Product> getProductsBySeller(Long sellerId) {
        return productRepository.findBySellerId(sellerId);
    }

    public Product updateProduct(Long id, Product productDetails) {
        Product product = getProductById(id);
        
        // Check if the current user is the seller
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        if (!product.getSeller().getUsername().equals(username)) {
            throw new RuntimeException("You can only update your own products");
        }

        product.setName(productDetails.getName());
        product.setDescription(productDetails.getDescription());
        product.setPrice(productDetails.getPrice());
        product.setStock(productDetails.getStock());
        product.setCategory(productDetails.getCategory());
        product.setImageUrl(productDetails.getImageUrl());
        return productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        Product product = getProductById(id);
        
        // Check if the current user is the seller
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        if (!product.getSeller().getUsername().equals(username)) {
            throw new RuntimeException("You can only delete your own products");
        }

        productRepository.deleteById(id);
    }
} 
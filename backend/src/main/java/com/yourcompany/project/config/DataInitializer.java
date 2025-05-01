package com.yourcompany.project.config;

import com.yourcompany.project.model.Category;
import com.yourcompany.project.model.ERole;
import com.yourcompany.project.model.Role;
import com.yourcompany.project.model.User;
import com.yourcompany.project.repository.CategoryRepository;
import com.yourcompany.project.repository.RoleRepository;
import com.yourcompany.project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {
        // Initialize roles if they don't exist
        for (ERole role : ERole.values()) {
            if (!roleRepository.findByName(role).isPresent()) {
                roleRepository.save(new Role(role));
            }
        }

        // Initialize default categories if they don't exist
        List<String> defaultCategories = Arrays.asList(
            "Elektronik",
            "Giyim",
            "Kitap",
            "Spor",
            "Ev & Yaşam",
            "Kozmetik",
            "Oyuncak",
            "Otomotiv"
        );

        for (String categoryName : defaultCategories) {
            if (categoryRepository.findByName(categoryName).isEmpty()) {
                Category category = new Category(categoryName);
                categoryRepository.save(category);
            }
        }

        // Create default seller account if it doesn't exist
        if (!userRepository.existsByUsername("seller1")) {
            User seller = new User(
                "seller1",
                "seller1@example.com",
                passwordEncoder.encode("12345678")
            );

            Role sellerRole = roleRepository.findByName(ERole.ROLE_SELLER)
                .orElseThrow(() -> new RuntimeException("Error: Role SELLER is not found."));
            
            Set<Role> roles = new HashSet<>();
            roles.add(sellerRole);
            seller.setRoles(roles);

            userRepository.save(seller);
        }
    }
} 
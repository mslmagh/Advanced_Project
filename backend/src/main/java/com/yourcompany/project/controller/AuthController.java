package com.yourcompany.project.controller;

import com.yourcompany.project.model.User;
import com.yourcompany.project.service.UserService;
import com.yourcompany.project.util.JwtUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class AuthController {
    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtils jwtUtils;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        logger.info("Received registration request for email: {}", user.getEmail());
        logger.debug("Registration data: firstName={}, lastName={}, email={}", 
                    user.getFirstName(), user.getLastName(), user.getEmail());
        
        try {
            if (userService.existsByEmail(user.getEmail())) {
                logger.warn("Registration failed - Email already exists: {}", user.getEmail());
                return ResponseEntity.badRequest().body(Map.of("message", "Email is already in use!"));
            }

            User registeredUser = userService.registerUser(user);
            logger.info("User registered successfully: {}", user.getEmail());
            
            Map<String, Object> response = new HashMap<>();
            response.put("message", "User registered successfully");
            response.put("user", registeredUser);
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            logger.error("Registration failed for email: {} - Error: {}", user.getEmail(), e.getMessage());
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> loginRequest) {
        logger.info("Received login request for email: {}", loginRequest.get("email"));
        
        try {
            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                    loginRequest.get("email"),
                    loginRequest.get("password")
                )
            );

            SecurityContextHolder.getContext().setAuthentication(authentication);
            String jwt = jwtUtils.generateJwtToken((UserDetails) authentication.getPrincipal());

            Map<String, Object> response = new HashMap<>();
            response.put("token", jwt);
            response.put("user", userService.getCurrentUser());

            logger.info("User logged in successfully: {}", loginRequest.get("email"));
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            logger.error("Login failed for email: {} - Error: {}", loginRequest.get("email"), e.getMessage());
            return ResponseEntity.badRequest().body(Map.of("message", "Invalid email or password"));
        }
    }

    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser() {
        try {
            User currentUser = userService.getCurrentUser();
            logger.info("Retrieved current user: {}", currentUser.getEmail());
            return ResponseEntity.ok(currentUser);
        } catch (Exception e) {
            logger.error("Failed to get current user - Error: {}", e.getMessage());
            return ResponseEntity.badRequest().body(Map.of("message", "Failed to get current user"));
        }
    }
} 
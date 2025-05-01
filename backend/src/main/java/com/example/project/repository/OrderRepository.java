package com.example.project.repository;

import com.example.project.model.Order;
import com.example.project.model.OrderStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    Page<Order> findByCustomerId(Long customerId, Pageable pageable);
    Page<Order> findByStatus(OrderStatus status, Pageable pageable);
    
    @Query("SELECT o FROM Order o WHERE " +
           "o.customer.id = :customerId AND " +
           "(:status IS NULL OR o.status = :status)")
    Page<Order> findByCustomerIdAndStatus(
            @Param("customerId") Long customerId,
            @Param("status") OrderStatus status,
            Pageable pageable);
} 
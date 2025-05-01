package com.example.project.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Table(name = "orders")
@Data
@NoArgsConstructor
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User customer;

    @NotNull
    private LocalDateTime orderDate;

    @NotNull
    private BigDecimal totalAmount;

    @NotNull
    @Enumerated(EnumType.STRING)
    private OrderStatus status;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private Set<OrderItem> orderItems;

    public Order(User customer, BigDecimal totalAmount) {
        this.customer = customer;
        this.orderDate = LocalDateTime.now();
        this.totalAmount = totalAmount;
        this.status = OrderStatus.PENDING;
    }
} 
package com.example.project.service;    

import com.example.project.model.Order;
import com.example.project.model.OrderItem;
import com.example.project.model.OrderStatus;
import com.example.project.model.Product;
import com.example.project.repository.OrderItemRepository;
import com.example.project.repository.OrderRepository;
import com.example.project.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserService userService;

    @Transactional
    public Order createOrder(Order order) {
        order.setCustomer(userService.getCurrentUser());
        order.setStatus(OrderStatus.PENDING);
        
        Order savedOrder = orderRepository.save(order);
        
        for (OrderItem item : order.getOrderItems()) {
            Product product = productRepository.findById(item.getProduct().getId())
                    .orElseThrow(() -> new RuntimeException("Product not found"));
            
            if (product.getStock() < item.getQuantity()) {
                throw new RuntimeException("Insufficient stock for product: " + product.getName());
            }
            
            product.setStock(product.getStock() - item.getQuantity());
            productRepository.save(product);
            
            item.setOrder(savedOrder);
            orderItemRepository.save(item);
        }
        
        return savedOrder;
    }

    public Order getOrderById(Long id) {
        return orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found"));
    }

    public Page<Order> getCustomerOrders(Long customerId, OrderStatus status, Pageable pageable) {
        return orderRepository.findByCustomerIdAndStatus(customerId, status, pageable);
    }

    public List<OrderItem> getOrderItems(Long orderId) {
        return orderItemRepository.findByOrderId(orderId);
    }

    @Transactional
    public Order updateOrderStatus(Long id, OrderStatus status) {
        Order order = getOrderById(id);
        order.setStatus(status);
        return orderRepository.save(order);
    }
} 
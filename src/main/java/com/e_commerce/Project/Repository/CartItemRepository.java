package com.e_commerce.Project.Repository;

import com.e_commerce.Project.Model.CartItem;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
/*
public interface CartItemRepository extends JpaRepository<CartItem,Long> {
    List<CartItem> findByUserId(Long userId);

}*/
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {

    List<CartItem> findByUserId(Long userId);
}



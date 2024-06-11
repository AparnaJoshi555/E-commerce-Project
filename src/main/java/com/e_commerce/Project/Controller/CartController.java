package com.e_commerce.Project.Controller;

import com.e_commerce.Project.Exception.ProductNotFoundException;
import com.e_commerce.Project.Exception.UserNotFoundException;
import com.e_commerce.Project.Model.CartItem;
import com.e_commerce.Project.Model.Product;
import com.e_commerce.Project.Model.User;
import com.e_commerce.Project.Repository.CartItemRepository;
import com.e_commerce.Project.Repository.ProductRepository;
import com.e_commerce.Project.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3001")
@RequestMapping("/cart")
public class CartController {
    @Autowired
    private CartItemRepository cartItemRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ProductRepository productRepository;

    @PostMapping("/add")
    public CartItem addToCart(@RequestParam Long userId, @RequestParam Long productId, @RequestParam int quantity) {
        // Logic to add product to user's cart
        User user = userRepository.findById(userId).orElseThrow(() -> new UserNotFoundException("User not found"));
        Product product = productRepository.findById(productId).orElseThrow(() -> new ProductNotFoundException("Product not found"));

        CartItem cartItem = new CartItem();
        cartItem.setUser(user);
        cartItem.setProduct(product);
        cartItem.setQuantity(quantity);

        return cartItemRepository.save(cartItem);
    }
    @GetMapping("/all")
    public List<CartItem> getAllCarts(){
        return cartItemRepository.findAll();
    }

    @GetMapping("/user/{userId}")
    public List<CartItem> getCartItemsByUser(@PathVariable Long userId) {
        // Logic to get cart items by user id
        return cartItemRepository.findByUserId(userId);
    }

    @DeleteMapping("/{cartItemId}")
    public void removeFromCart(@PathVariable Long cartItemId) {
        // Logic to remove item from cart
        cartItemRepository.deleteById(cartItemId);
    }
   /* @GetMapping("/{id}")
    public ResponseEntity<CartItem> getCartItem(@PathVariable Long id) {
        // Call the service layer to retrieve the cart item by its ID
        CartItem cartItem = cartItemRepository.getCartItemById(id);

        if (cartItem != null) {
            return ResponseEntity.ok().body(cartItem);
        } else {
            return ResponseEntity.notFound().build();

        }

    }*/
}
package com.e_commerce.Project.Model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;

    private String productPrice;
    private String imageurl;
    private String brand;
    private String timePeriod;
    private String size;
    private String rating;

    @OneToOne(mappedBy = "product", cascade = CascadeType.ALL)
    private List<CartItem> cartItems;


    public Product() {
    }

    public Product(Long id, String name, String description, String productPrice,String imageurl,String brand,
                   String timePeriod,String size,String rating) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.productPrice = productPrice;
        this.imageurl=imageurl;
        this.timePeriod=timePeriod;
        this.brand=brand;
        this.size=size;
        this.rating=rating;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }



    public String getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(String productPrice) {
        this.productPrice = productPrice;
    }

    public String getImageurl() {
        return imageurl;
    }

    public void setImageurl(String imageurl) {
        this.imageurl = imageurl;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getTimePeriod() {
        return timePeriod;
    }

    public void setTimePeriod(String timePeriod) {
        this.timePeriod = timePeriod;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }
}


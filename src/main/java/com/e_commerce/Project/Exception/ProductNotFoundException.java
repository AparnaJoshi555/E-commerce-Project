package com.e_commerce.Project.Exception;



public class ProductNotFoundException extends RuntimeException{
    public ProductNotFoundException(Long id,Class<?> entity){
        super("The"+ entity.getSimpleName().toLowerCase() +" with id "+id+"not present.");
    }
    public ProductNotFoundException(String name, Class<?> entity){
        super("The"+ entity.getSimpleName().toLowerCase() +" with name "+name+"not present.");
    }
    public ProductNotFoundException(String msg){
        super(msg);
    }

}
package com.e_commerce.Project.Repository;




import com.e_commerce.Project.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;


public interface ProductRepository extends CrudRepository<Product,Long> {
    Product findByName(String name);
}

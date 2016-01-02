package be.g00glen00b.repository;

import be.g00glen00b.model.Property;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Created by yushah on 1/2/2016.
 */
public interface PropertyRepository extends MongoRepository<Property, String> {

    List<Property> findByPropertyType(@Param("propertyType") String propertyType);

}

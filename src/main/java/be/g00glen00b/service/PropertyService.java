package be.g00glen00b.service;

import be.g00glen00b.model.Property;
import be.g00glen00b.repository.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by yushah on 1/2/2016.
 */
@Service
public class PropertyService {

    @Autowired
    PropertyRepository propertyRepository;

    public List<Property> findAll() {
        return propertyRepository.findAll();
    }

    public String save(Property property) {
        property = propertyRepository.save(property);
        return property.getId();
    }

}

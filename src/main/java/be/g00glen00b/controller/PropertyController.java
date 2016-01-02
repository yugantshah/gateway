package be.g00glen00b.controller;

import be.g00glen00b.model.Property;
import be.g00glen00b.service.PropertyService;
import com.mongodb.util.StringParseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by yushah on 1/2/2016.
 */
@Controller
@RequestMapping("/property")
@ResponseBody
public class PropertyController {

    @Autowired
    private PropertyService propertyService;

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<Property> getAll() {
        return propertyService.findAll();

    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public String save(@RequestBody Property p ) {
        return propertyService.save(p);
    }


}

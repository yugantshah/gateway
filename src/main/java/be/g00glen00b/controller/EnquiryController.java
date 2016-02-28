package be.g00glen00b.controller;

/**
 * Created by dsavla on 1/2/2016.
 */
import java.util.List;

import be.g00glen00b.model.Enquiry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import be.g00glen00b.repository.EnquiryRepository;

@RestController
@RequestMapping("/enquiries")
public class EnquiryController {
    @Autowired
    private EnquiryRepository repo;

    @RequestMapping(method = RequestMethod.GET)
    public List<Enquiry> findEnquiries() {
        return repo.findAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public Enquiry addEnquiry(@RequestBody Enquiry enquiry) {
        enquiry.setId(null);
        System.out.println("Test Add :" + enquiry.toString());

        return repo.save(enquiry);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Enquiry updateEnquiry(@RequestBody Enquiry updatedEnquiry, @PathVariable String id) {
        updatedEnquiry.setId(id);
        return repo.save(updatedEnquiry);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteEnquiry(@PathVariable String id) {
        repo.delete(id);
    }
}

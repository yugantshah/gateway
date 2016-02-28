package be.g00glen00b.controller;

import be.g00glen00b.model.User;
import be.g00glen00b.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by dsavla on 1/5/2016.
 */

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository repo;

    @RequestMapping(method = RequestMethod.POST)
    public User addUser(@RequestBody User user) {
        user.setId(null);
        System.out.println("Test Add :" + user.toString());

        return repo.save(user);
    }
}

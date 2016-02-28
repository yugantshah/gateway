package be.g00glen00b.model;

/**
 * Created by dsavla on 1/2/2016.
 */
import org.springframework.data.annotation.Id;

public class Enquiry {
    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private String mobile;
    private String location;
    private String purpose;
    private String propertyType;
    private String subPropertyType;
    private String city;
    private String propertyLocation;
    private String message;
    private String status;
    private String requestor;
    private String sender;
    private boolean emailRecieved;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getRequestor() {
        return requestor;
    }

    public void setRequestor(String requestor) {
        this.requestor = requestor;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public boolean isEmailRecieved() {
        return emailRecieved;
    }

    public void setEmailRecieved(boolean emailRecieved) {
        this.emailRecieved = emailRecieved;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getPurpose() {
        return purpose;
    }

    public void setPurpose(String purpose) {
        this.purpose = purpose;
    }

    public String getPropertyType() {
        return propertyType;
    }

    public void setPropertyType(String propertyType) {
        this.propertyType = propertyType;
    }

    public String getSubPropertyType() {
        return subPropertyType;
    }

    public void setSubPropertyType(String subPropertyType) {
        this.subPropertyType = subPropertyType;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPropertyLocation() {
        return propertyLocation;
    }

    public void setPropertyLocation(String propertyLocation) {
        this.propertyLocation = propertyLocation;
    }

    @Override
    public String toString() {
        return "Enquiry{" +
                "id='" + id + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", mobile='" + mobile + '\'' +
                ", location='" + location + '\'' +
                ", purpose='" + purpose + '\'' +
                ", propertyType='" + propertyType + '\'' +
                ", subPropertyType='" + subPropertyType + '\'' +
                ", city='" + city + '\'' +
                ", propertyLocation='" + propertyLocation + '\'' +
                ", message='" + message + '\'' +
                ", status='" + status + '\'' +
                ", requestor='" + requestor + '\'' +
                ", sender='" + sender + '\'' +
                ", emailRecieved=" + emailRecieved +
                '}';
    }
}

package be.g00glen00b.model;

import be.g00glen00b.util.*;
import org.springframework.data.annotation.Id;

/**
 * Created by yushah on 12/26/2015.
 */
public class Property {

    @Id
    private String id;
    private PropertyState propertyState;
    private String proximity;
    private String location; //city
    private String area;
    private String unit;
    private String bath;
    private String bed;
    private String parking;
    private String description;
    private YesNo exclusive;
    private Amenitites[] amenitites;
    private String img_thumbnail;
    private String[] img_surrounding;
    private String img_design;
    private String img_location;
    private int rate;
    private AvailableFor availableFor;
    private PurposeOfProperty purposeOfProperty;
    private String propertyType;
    private boolean showOnLandingPage;

    public String getId() {
        return id;
    }

    public PropertyState getPropertyState() {
        return propertyState;
    }

    public void setPropertyState(PropertyState propertyState) {
        this.propertyState = propertyState;
    }

    public String getProximity() {
        return proximity;
    }

    public void setProximity(String proximity) {
        this.proximity = proximity;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public String getBath() {
        return bath;
    }

    public void setBath(String bath) {
        this.bath = bath;
    }

    public String getBed() {
        return bed;
    }

    public void setBed(String bed) {
        this.bed = bed;
    }

    public String getParking() {
        return parking;
    }

    public void setParking(String parking) {
        this.parking = parking;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public YesNo getExclusive() {
        return exclusive;
    }

    public void setExclusive(YesNo exclusive) {
        this.exclusive = exclusive;
    }

    public Amenitites[] getAmenitites() {
        return amenitites;
    }

    public void setAmenitites(Amenitites[] amenitites) {
        this.amenitites = amenitites;
    }

    public String getImg_thumbnail() {
        return img_thumbnail;
    }

    public void setImg_thumbnail(String img_thumbnail) {
        this.img_thumbnail = img_thumbnail;
    }

    public String[] getImg_surrounding() {
        return img_surrounding;
    }

    public void setImg_surrounding(String[] img_surrounding) {
        this.img_surrounding = img_surrounding;
    }

    public String getImg_design() {
        return img_design;
    }

    public void setImg_design(String img_design) {
        this.img_design = img_design;
    }

    public String getImg_location() {
        return img_location;
    }

    public void setImg_location(String img_location) {
        this.img_location = img_location;
    }

    public int getRate() {
        return rate;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }

    public AvailableFor getAvailableFor() {
        return availableFor;
    }

    public void setAvailableFor(AvailableFor availableFor) {
        this.availableFor = availableFor;
    }

    public PurposeOfProperty getPurposeOfProperty() {
        return purposeOfProperty;
    }

    public void setPurposeOfProperty(PurposeOfProperty purposeOfProperty) {
        this.purposeOfProperty = purposeOfProperty;
    }

    public String getPropertyType() {
        return propertyType;
    }

    public void setPropertyType(String propertyType) {
        this.propertyType = propertyType;
    }

    public boolean isShowOnLandingPage() {
        return showOnLandingPage;
    }

    public void setShowOnLandingPage(boolean showOnLandingPage) {
        this.showOnLandingPage = showOnLandingPage;
    }
}

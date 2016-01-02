package be.g00glen00b;

import be.g00glen00b.model.Property;
import be.g00glen00b.util.*;
import com.google.gson.Gson;

/**
 * Created by yushah on 1/2/2016.
 */
public class Test {
    public static void main1(String[] args) {
        Property p = new Property();
        p.setAmenitites(new Amenitites[]{Amenitites.Air_Conditioning, Amenitites.Balcony});
        p.setArea("100sq mts");
        p.setAvailableFor(AvailableFor.Buy);
        p.setBath("2");
        p.setBed("2");
        p.setDescription("Lovely");
        p.setExclusive(YesNo.Yes);
        p.setImg_design("/img_design");
        p.setImg_location("/img_location");
        p.setImg_surrounding(new String[]{"/img_surrounding"});
        p.setParking("3");
        p.setPropertyState(PropertyState.AVAILABLE);
        p.setProximity("Neat");
        p.setPurposeOfProperty(PurposeOfProperty.Residential);
        p.setRate(24555);
        p.setShowOnLandingPage(false);

        Gson gson = new Gson();
        System.out.println(gson.toJson(p));


    }
}

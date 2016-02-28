angular.module('myApp')
    .controller('EnquiryController', ['$rootScope', '$scope', '$location','$http' , 'Enquiry',

    function ($rootScope, $scope, $location, $http, Enquiry ) {
        $scope.displayErrors=false;


        $scope.Cities = [
            {'ID': 'Mumbai', 'Name':'Mumbai'}, {'ID': 'Goa', 'Name':'Goa'}
        ];

        $scope.Locations = [];
        $scope.Locations.Mumbai = [
            {'ID': 'Bandra', 'Name':'Bandra'}, {'ID': 'Powai', 'Name':'Powai'} ,
            {'ID': 'Malad', 'Name':'Malad'}, {'ID': 'Chembur', 'Name':'Chembur'}
        ];

        $scope.Locations.Goa = [
            {'ID': 'Panjim', 'Name':'Panjim'}, {'ID': 'Dona Paula', 'Name':'Dona Paula'} ,
            {'ID': 'Baga', 'Name':'Baga'}, {'ID': 'Calangute', 'Name':'Calangute'},
            {'ID': 'Arpora', 'Name':'Arpora'}, {'ID': 'Pororovim', 'Name':'Pororovim'}
        ];


        $scope.SubProperty = [
            "Commercial",
            "Residential",
            "Land"
        ];

        $scope.SubPropertyType = [];
        $scope.SubPropertyType.Commercial = [
                {'ID': 'Warehouse', 'Name':'Warehouse'} ,{'ID': 'Furnished Office', 'Name':'Furnished Office'},
                {'ID': 'Un-furnished Office', 'Name':'Un-furnished Office'} ,{'ID': 'Gala', 'Name':'Gala'}];

        $scope.SubPropertyType.Residential = [
                {'ID': 'Row House', 'Name':'Row House'} ,{'ID': 'Villa', 'Name':'Villa'},
                {'ID': 'Apartment', 'Name':'Apartment'} ,{'ID': 'Pent House', 'Name':'Pent House'},
                {'ID': 'Farm House', 'Name':'Farm House'} ,{'ID': 'Plot', 'Name':'Plot'}];

        $scope.SubPropertyType.Land = [
                {'ID': 'Agriculture', 'Name':'Agriculture'} ,{'ID': 'Non-Agriculture', 'Name':'Non-Agriculture'}];


        $scope.phoneNumberPattern = (function() {
            var regexp = /^\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})$/;
            return {
                test: function(value) {
                    return regexp.test(value);
                }
            };
        })();

        $scope.addEnquiry = function() {
            $scope.displayErrors= true;
            if($scope.enquiryForm.$valid) {
                new Enquiry({
                    firstName: $scope.FirstName,
                    lastName: $scope.LastName,
                    email: $scope.EmailAddr,
                    mobile: $scope.MobileNo,
                    location: $scope.Location,
                    purpose: $scope.Purpose,
                    propertyType: $scope.PropertyType,
                    subPropertyType: $scope.SubPropertyTypeValue,
                    city: $scope.PropertyCity,
                    propertyLocation:$scope.PropertyLocation,
                    message: $scope.Message
                }).$save();
            }
            //$scope.newItem = "";
        };
    }]);




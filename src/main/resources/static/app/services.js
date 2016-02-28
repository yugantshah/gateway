(function(angular) {
  var ItemFactory = function($resource) {
    return $resource('/items/:id', {
      id: '@id'
    }, {
      update: {
        method: "PUT"
      },
      remove: {
        method: "DELETE"
      }
    });
  };

  var EnquiryFactory = function($resource) {
    return $resource ( '/enquiries/:id', {
          id: '@id'
        }, {
          update: {
            method:"PUT"
          }
        }, {
          remove: {
            method:"DELETE"
          }
        }
    );
  };

  var UserFactory = function($resource) {
    return $resource ( '/users/:id', {
          id: '@id'
        }, {
          update: {
            method:"PUT"
          }
        }, {
          remove: {
            method:"DELETE"
          }
        }
    );
  };
  ItemFactory.$inject = ['$resource'];

  angular.module("myApp.services").factory("Item", ItemFactory);
  angular.module("myApp.services").factory("Enquiry", EnquiryFactory);
  angular.module("myApp.services").factory("User", UserFactory);

}(angular));
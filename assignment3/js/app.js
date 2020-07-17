(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItems);

  function FoundItems() {
    var ddo = {
      templateUrl: 'founditems.html',
      scope: {
        found: '<',
        onRemove: '&',
        error: '<'
      }
    };
    return ddo;
  }

  NarrowItDownController.$inject = ["MenuSearchService"];
  function NarrowItDownController(MenuSearchService) {
    var narrow = this;

    narrow.search = "";
    narrow.found = [];
    narrow.getMatching = function(search) {
      if (search.trim() === "") {
        narrow.message = 'Nothing found!';
        return;
      }
      search = search.toLowerCase();
      var promise = MenuSearchService.getMatchedMenuItems(search);
      promise.then(function(items) {
        if (items.length > 0) {
            narrow.message = '';
            narrow.found = items;
        } else {
            narrow.message = 'Nothing found!';
            narrow.found = [];
        }
      });
      // console.log(narrow.found);
    }

    narrow.removeItem = function(idx) {
      narrow.found.splice(idx, 1);
    }

  }


  MenuSearchService.$inject = ["$http"];
  function MenuSearchService($http) {
    var service = this;
    service.getMatchedMenuItems = function(searchTerm) {

      return $http({
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
      }).then(function (response) {
        //console.log(response.data);
        var foundItems = [];
        var menuData = response.data.menu_items;
        //console.log(menuData);
        for (var idx in menuData) {
          //console.log(menuData[idx].description);
          if (menuData[idx].description.toLowerCase().indexOf(searchTerm) != -1) {
            foundItems.push(menuData[idx]);
          }
        }
        //console.log(service.found);
        return foundItems;
      });
    }


  }


})();
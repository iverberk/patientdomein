angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Chats, $ionicFilterBar) {

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

  $scope.showFilterBar = function () {
      filterBarInstance = $ionicFilterBar.show({
        items: $scope.chats,
        update: function (filteredItems, filterText) {
          if (filteredItems.length == Chats.all().length) {
            $scope.dsply = false
          } else {
            $scope.dsply = true;  
          }
          $scope.chats = filteredItems;
        },
        filterProperties: 'name'
      });
    };

})

.controller('Dash2Ctrl', function($scope, $ionicModal, $ionicFilterBar) {

  

})

.controller('Dash3Ctrl', function($scope, $ionicPopover) {

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('templates/popover.html', {
    scope: $scope,
    backdropClickToClose: false
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });

  

})

.controller('ChatsCtrl', function($scope, Transactions, $ionicFilterBar) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.transactions = Transactions.all();
  $scope.remove = function(transaction) {
    Transactions.remove(transaction);
  };

  $scope.showFilterBar = function () {
      filterBarInstance = $ionicFilterBar.show({
        items: $scope.transactions,
        update: function (filteredItems, filterText) {
          $scope.transactions = filteredItems;
        },
        filterProperties: 'name'
      });
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Transactions) {
  $scope.transaction = Transactions.get($stateParams.transactionId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

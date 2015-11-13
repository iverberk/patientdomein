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
          $scope.chats = filteredItems;
        },
        filterProperties: 'name'
      });
    };

})

.controller('Dash2Ctrl', function($scope, Chats2, $ionicFilterBar) {

  $scope.chats = Chats2.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

  $scope.showFilterBar = function () {
      filterBarInstance = $ionicFilterBar.show({
        items: $scope.chats,
        update: function (filteredItems, filterText) {
          $scope.chats = filteredItems;
        },
        filterProperties: 'name'
      });
    };

})

.controller('Dash3Ctrl', function($scope, $ionicFilterBar) {

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

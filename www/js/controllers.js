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

.controller('Dash3Ctrl', function($scope, $state, $ionicPopup, $ionicHistory) {
  $scope.showConfirm = function() {
    $ionicPopup.alert({
      title: 'Verzending succesvol',
      template: '<p>Uw afspraakverzoek is verzonden, wij bellen u binnen 2 werkdagen voor het maken van een afspraak.</p><p>Neem uw identiteitsbewijs, zorgverzekeringspas en eventuele hulpmiddelen mee naar deze afspraak.</p>'
    }).then(function() {
      $ionicHistory.nextViewOptions({
        disableAnimate: true,
        disableBack: true
      });
      $state.transitionTo('tab.dash');
    });
 };


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

.controller('SignInCtrl', function($scope, $state) {
  
  $scope.signIn = function(user) {
    console.log('Sign-In', user);
    $state.go('tab.dash');
  };
  
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

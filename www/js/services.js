angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Knie'
  }, {
    id: 1,
    name: 'Rug'
  }, {
    id: 2,
    name: 'Kiespijn'
  }, {
    id: 3,
    name: 'Been'
  }, {
    id: 4,
    name: 'Schouder'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})


.factory('Chats2', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'sdBen Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'sdMax Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Transactions', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var transactions = [{
    id: 0,
    name: 'Gidopraktor',
    date: '13 nov 2015',
    logo: 'img/gidopractor.jpg',
    reden: 'Na hardlopen last van rug',
    urgentie: 'Normaal',
    medicalBackground: ''
  },{
    id: 1,
    name: 'Praktijk de kromme knie',
    date: '1 nov 2015',
    logo: 'img/krommeknie.jpg',
    reden: 'Nog steeds pijn aan knie!',
    urgentie: 'Hoog',
    medicalBackground: ''
  }, {
    id: 2,
    name: 'Praktijk de kromme knie',
    date: '24 okt 2015',
    logo: 'img/krommeknie.jpg',
    reden: 'Mijn knie doet pijn.',
    urgentie: 'Normaal',
    medicalBackground: ''
  }, {
    id: 3,
    name: 'Praktijk tandplak',
    date: '22 aug 2015',
    logo: 'img/tandplak.png',
    reden: 'Verstandskies verdwenen!',
    urgentie: 'Normaal',
    medicalBackground: ''
  }];

  return {
    all: function() {
      return transactions;
    },
    remove: function(transaction) {
      transactions.splice(transactions.indexOf(transaction), 1);
    },
    get: function(transactionId) {
      for (var i = 0; i < transactions.length; i++) {
        if (transactions[i].id === parseInt(transactionId)) {
          return transactions[i];
        }
      }
      return null;
    }
  };
});

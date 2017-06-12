(function () {
    'use strict';
    angular.module('airbnb', [])
        .service('airbnbModel', require('./models/airbnbModel'))
        .controller('airbnbCtrl', require('./controllers/airbnbCtrl'))
        .directive('appHeader', require('./directives/appHeader'))
        .directive('listingCard', require('./directives/listingCard'))
        .directive('listingModal', require('./directives/listingModal'))
        .directive('singleReview', require('./directives/singleReview'))

})();
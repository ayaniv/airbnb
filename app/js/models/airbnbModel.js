var moment = require('moment');

function airbnbModel($http, $q) {
    var cached = {};
    const url_listings = 'https://api.airbnb.com/v2/search_results?client_id=3092nxybyb0otqw18e8nh5nty&location=';
    const url_reviews = 'https://api.airbnb.com/v2/reviews?client_id=3092nxybyb0otqw18e8nh5nty&role=all&listing_id='
    this.getDataByCity = function (city) {
        if (cached[city]) {
            return $q.when(cached[city]);
        }
        return $http.get(url_listings + city).then(function (response) {
            cached[city] = _.map(response.data.search_results, _mapListings);
            return cached[city];
        });
    };

    this.getReviewsById = function (id) {
        if (cached[id]) {
            return $q.when(cached[id]);
        }
        return $http.get(url_reviews + id).then(function (response) {
            cached[id] = _.map(response.data.reviews, _mapReviews);
            return cached[id];
        });
    };

    function _mapReviews(review) {
        return {
            created_at: moment(review.created_at.toString()).format('DD MMM YYYY'),
            name: review.author.first_name,
            review: review.comments,
            id : review.author.id,
            avatar: review.author.thumbnail_url
        };
    }

    function _mapListings(listing) {
        return {
            picture: listing.listing.picture_url,
            title: listing.listing.name,
            address: listing.listing.public_address,
            id : listing.listing.id
        };
    }
}

module.exports = airbnbModel;
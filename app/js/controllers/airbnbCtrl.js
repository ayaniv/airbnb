function airbnbCtrl(airbnbModel) {
    var _this = this;

    _this.ListingsHeader = {
        title: "Airbnb Listings"
    };

    _this.tabsData = [
        {name: 'London', value: 'london'},
        {name: 'Paris', value: 'paris'},
        {name: 'Tel Aviv', value: 'tel-aviv'},
        {name: 'NYC', value: 'nyc'}];

    _this.getDataByCity = function (city) {
        _this.isLoading = true;
        airbnbModel.getDataByCity(city)
            .then(successCallback.bind(this, "currListingsResult"), errorCallback)
            .finally(finallyCallback);
    };

    function errorCallback(response) {
        console.log(response)
    }

    function successCallback(item, results) {
        _this[item] = results || [];
    }

    function finallyCallback() {
        _this.isLoading = false;
    }

    _this.getReviewsById = function (listing) {
        _this.selectedListing = listing;
        _this.isLoading = true;
        _this.selectedListingReviews = "";
        airbnbModel.getReviewsById(listing.id)
            .then(successCallback.bind(this, "selectedListingReviews"), errorCallback)
            .finally(finallyCallback);
    };

    _this.getDataByCity();
}

module.exports = airbnbCtrl;
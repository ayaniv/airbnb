function listingModal() {
    return {
        restrict: 'E',
        scope: {
            listing: '=data',
            reviews: '=reviews',
            isLoading: '=isLoading'
        },
        template: require('../../templates/listingModalTemplate.html')
    };
}

module.exports = listingModal;
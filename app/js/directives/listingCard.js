function listingCard() {
    return {
        restrict: 'E',
        scope: {
            listing: '=data',
            click: '&'
        },
        template: require('../../templates/listingCardTemplate.html')
    };
}

module.exports = listingCard;
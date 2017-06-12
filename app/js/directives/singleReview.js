function singleReview() {
    return {
        restrict: 'E',
        scope: {
            review: '=',
        },
        template: require('../../templates/singleReviewTemplate.html')
    };
}

module.exports = singleReview;
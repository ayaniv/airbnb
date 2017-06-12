function appHeader() {
    return {
        restrict: 'E',
        scope: {
            header: '=data',
            isLoading: '=isLoading',
            tabsData: '=',
            getDataFunction: '&'
        },
        template: require('../../templates/appHeaderTemplate.html'),
        link: function(scope){
            scope.getData = function(location) {
                scope.getDataFunction({city: location})
            };

        }
    };
}

module.exports = appHeader;
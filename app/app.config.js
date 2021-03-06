// Principalmente questo file conterrà le route
angular.module('sitotranquillo').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        // imposto il carattere che mi farà capire che sono in una route
        //$locationProvider.hashPrefix('!');

        // aggiungo le route
        $routeProvider.
        when('/', {
            template: '<home></home>'
        }).
        when('/:id', {
            template: '<dettaglio></dettaglio>'
        }).
        when('/404', {
            template: '<404></404>'
        }).
        otherwise('/404');

        // tolgo l'hashbang
        $locationProvider.html5Mode(true);
    }
]);
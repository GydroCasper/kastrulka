app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : './src/html/startpage.html',
            controller  : 'startpageCtrl'
        })
        .when('/players', {
            templateUrl : './src/html/players.html',
            controller  : 'playersCtrl'
        })
        .when('/heroes', {
            templateUrl : './src/html/heroes.html',
            controller  : 'heroesCtrl'
        })
        .when('/teams', {
            templateUrl: './src/html/teams.html',
            controller: 'teamsCtrl'
        })
        .when('/game', {
            templateUrl: './src/html/game.html',
            controller: 'gameCtrl'
        })
        .when('/results', {
            templateUrl: './src/html/results.html',
            controller: 'resultsCtrl'
        })
        .when('/rules', {
            templateUrl: './src/html/rules.html',
            controller: 'rulesCtrl'
        });
});
// Définition des routes
monApp.config(function ($routeProvider) {
    $routeProvider
        .when('/accueil', {
            templateUrl: 'pages/accueil.html',
            controller: 'accueilTitre'
        })
        .when('/films', {
            templateUrl: 'pages/filmographie.html',
            controller: 'filmTitre'
        })
        .when('/bio', {
            templateUrl: 'pages/biographie.html',
            controller: 'bioTitre'
        })
        .when('/recompense', {
            templateUrl: 'pages/recompense.html',
            controller: 'recompenseTitre'
        })
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactTitre'
        })
        .when('/donnee', {
            templateUrl: 'pages/analyse_donnee.html',
            controller: 'donneeTitre'
        })
        .otherwise({
            redirectTo: "/accueil"
        });
});

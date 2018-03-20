// création des contrôleurs 

monApp.controller('accueilTitre', function ($scope, $rootScope) {
    $rootScope.titre = "";
});

monApp.controller('filmTitre', function ($scope, $rootScope, $http) {
    $rootScope.titre = '- filmographie';
    $scope.realisations = null;
    $http.get("json/films.json")
        .then(function(response) {
            $scope.realisations = response.data;
        });
});

monApp.controller('bioTitre', function ($scope, $rootScope) {
    $rootScope.titre = '- Biographie';
});

monApp.controller('contactTitre', function ($scope, $rootScope) {
    $rootScope.titre = '- Contact';
});

monApp.controller('recompenseTitre', function ($scope, $rootScope, $http) {
    $rootScope.titre = '- Récompense';
    $scope.recompense = null;
    $http.get("json/recompense.json")
        .then(function(response) {
            $scope.recompense = response.data;
        });
});

monApp.controller('donneeTitre', function ($scope, $rootScope) {
    $rootScope.titre = '- Analyse de données';
});
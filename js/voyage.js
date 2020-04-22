"use strict";
// • Créer une classe Sejour avec les propriétés privées suivantes :
console.log("--- VOYAGE.TS ---");
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "getNom", {
        // • Ajouter des getters permettant d’accéder aux propriétés privées.
        get: function () {
            return this._nom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "getPrice", {
        get: function () {
            return this._prix;
        },
        enumerable: true,
        configurable: true
    });
    return Sejour;
}());
// • Créer une classe SejourService qui possède une propriété privée de type Sejour[];
var SejourService = /** @class */ (function () {
    function SejourService() {
        //• Dans le constructeur de la classe SejourService, initialiser la propriété Sejour[] avec plusieurs objets de type Sejour.
        this._sejour = [new Sejour("Paris", 250), new Sejour("Marseille", 210)];
    }
    // • Dans la classe SejourService, ajouter une méthode de recherche de séjour par nom :
    SejourService.prototype.rechercheSejoursParNoms = function (nomSejour) {
        //let flag:boolean = false;
        for (var _i = 0, _a = this._sejour; _i < _a.length; _i++) {
            var sejour = _a[_i];
            if (sejour.getNom == nomSejour) {
                console.log("trouvé !");
                return sejour;
            }
            else {
                console.log("Pas trouvé :(");
            }
        }
    };
    return SejourService;
}());
// • Créer une instance de la classe SejourService, invoquer la méthode de recherche créée et afficher le résultat dans la console.
var ss = new SejourService();
ss.rechercheSejoursParNoms("Marseille");

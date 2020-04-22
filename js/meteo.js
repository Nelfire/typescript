"use strict";
console.log("--- METEO.TS ---");
// 1 • Créer une classe Meteo.
var Meteo = /** @class */ (function () {
    // 3 • Supprimer le champ ville. Ajouter le constructeur suivant :
    function Meteo(_ville, _temperature) {
        this._ville = _ville;
        this._temperature = _temperature;
    }
    // 6 • Ajouter la méthode toString et afficher son résultat dans le console.
    Meteo.prototype.toString = function () {
        return this._ville + " - " + this._temperature + " \u00B0C";
    };
    return Meteo;
}());
// 4 • Créer un objet Meteo
//let nantesCeMatin = new Meteo()
// 5 • Corriger l’erreur de compilation :
var nantesCeMatin = new Meteo('Nantes', 12);
// 6 • Ajouter la méthode toString et afficher son résultat dans le console.
console.log(nantesCeMatin.toString());

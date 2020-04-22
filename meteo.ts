
console.log("--- METEO.TS ---");
// 1 • Créer une classe Meteo.
class Meteo {

    // 3 • Supprimer le champ ville. Ajouter le constructeur suivant :
    constructor(private _ville:string, private _temperature:number) {
    }

    // 6 • Ajouter la méthode toString et afficher son résultat dans le console.
    toString():string{
        return `${this._ville} - ${this._temperature} °C`;
    }
}

// 4 • Créer un objet Meteo
//let nantesCeMatin = new Meteo()

// 5 • Corriger l’erreur de compilation :
let nantesCeMatin = new Meteo('Nantes', 12);

// 6 • Ajouter la méthode toString et afficher son résultat dans le console.
console.log(nantesCeMatin.toString());
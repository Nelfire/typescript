// • Créer une classe Sejour avec les propriétés privées suivantes :

console.log("--- VOYAGE.TS ---");
class Sejour{
    constructor(private _nom:string, private _prix:number) {
    
    }

    // • Ajouter des getters permettant d’accéder aux propriétés privées.
    get getNom(): string {
        return this._nom;
    }

    get getPrice(): number {
        return this._prix;
    }
}

// • Créer une classe SejourService qui possède une propriété privée de type Sejour[];
class SejourService{
    private _sejour:Sejour[]
    constructor(){
        //• Dans le constructeur de la classe SejourService, initialiser la propriété Sejour[] avec plusieurs objets de type Sejour.
        this._sejour = [new Sejour("Paris",250),new Sejour("Marseille",210)];
    }

    // • Dans la classe SejourService, ajouter une méthode de recherche de séjour par nom :
    rechercheSejoursParNoms(nomSejour:string):Sejour|void{
        //let flag:boolean = false;
        for (const sejour of this._sejour) {
            if(sejour.getNom == nomSejour){
                console.log("trouvé !");
                return sejour;
            } else {
                console.log("Pas trouvé :(")
            }
        }
    }
}
 // • Créer une instance de la classe SejourService, invoquer la méthode de recherche créée et afficher le résultat dans la console.
const ss:SejourService = new SejourService();
ss.rechercheSejoursParNoms("Marseille");
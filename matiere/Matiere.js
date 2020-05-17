var db = require('../db');

var Matiere = {
    getMatiere: (callback)=>{
        return db.query('SELECT * FROM matiere', callback);
    },
    createMatiere: (Matiere,callback)=>{
        return db.query('INSERT INTO matiere(nom_matiere,coef_matiere) VALUES(?,?)',[Matiere.nom_matiere,Matiere.coef_matiere],callback);
    }
}
module.exports = Matiere;

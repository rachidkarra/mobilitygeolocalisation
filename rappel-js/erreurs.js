let jsonFile = '{"nom": "fraise"}';

try {
    let fruit = JSON.parse(jsonFile);
    if (!fruit.prix) {
        throw new SyntaxError('----------------Crée erreur------------------');     // throw créer des erreurs,  génère une exception
    }
    console.log(fruit.prix);

} catch (error) {
    console.log("----------------Block error------------------");
    console.log(error);
} finally {
    console.log("----------------Block finally------------------");
}
var table = document.querySelector('table');
var Nom = document.getElementById('Article');
var Marque = document.getElementById('Marque');
var Prix = document.getElementById('prix');
var Type = document.getElementById('TYpe');
var date = document.getElementById('date');
var noPromo = document.getElementById('non');
var Promo = document.getElementById('oui');
var addButton = document.getElementById('ajouter');
var ModiButton = document.getElementById('modifier');

class Article {
    constructor(_Nom, _Marque,_Prix,_date, _Type,promotion) {
      this.Nom = _Nom;   
      this.Marque = _Marque;
      this.Prix = _Prix;
      this.date = _date;
      this.Type = _Type;
      this.promotion = promotionCheck();
    }
    
    promotionCheck() {
        var getSelectedValue = document.querySelector( 'input[name="promotion"]:checked');
        getSelectedValue = getSelectedValue.value;
        return getSelectedValue;
    }
  }
  
  function Ajouter(){
    let Produit = new Article (Nom.value, Marque.value, Prix.value, date.value, Type.value);
    consol.log(Produit.promotionCheck());


}
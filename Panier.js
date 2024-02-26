//DEBUT DU SCRIPT //
//RECUPERATION DES ELEMENTS DANS LA PAGE HTML // 
var article = document.querySelectorAll('.item');
var ParentArticle = document.querySelector('.parent');
var prixTotal = document.getElementById('total-price'); 

//AUGMENTER,DIMINUER,SUPPRIMER ET FAVORITE //
//Parcourir chaque element //
for (var i = 0; i < article.length; i++) {

//RECUPERATION DES BOUTONS ET DES PRIX //
    let minus = article[i].children[1]; //BOUTONS MOINS
    let plus = article[i].children[3]; // BOUTONS PLUS
    let btnDelete = article[i].children[4];// BOUTON DELETE
    let articleNum = article[i].children[2];//NOMBRE D'ARTICLE
    let quantity = parseInt(articleNum.innerText);//LA QUANTITE
    let price = article[i].children[7].children[0];//PRIX TOTAL DES ARTICLES
    let priceUnit = article[i].children[6];//PRIX UNITAIRE
    let ArticlePrice = parseInt(priceUnit.innerText);//PRIX DE L'ARTICLE EN TEXTE
    let Fav = article[i].children[5];//BOUTON FAVORIS


//DECREMENTATION DU NOMBRE D'ARTICLE ET MISE A JOUR DU PRIX
    minus.addEventListener('click', function () {
        if (quantity > 0) {
            quantity--;
            articleNum.innerHTML = quantity;
            price.innerText = quantity * ArticlePrice;
            calSum(); 
        }
    });


//AUGMENTATION  DU NOMBRE D'ARTICLE ET MISE A JOUR
    plus.addEventListener('click', function () {
        quantity++;
        articleNum.innerHTML = quantity;
        price.innerText = quantity * ArticlePrice;
        calSum(); 
    });

//SUPPRESSIOBN D'UN ARTICLE ET MISE A JOUR
    btnDelete.addEventListener('click', function (e) {
        e.target.parentElement.remove();
        calSum(); // Mettez à jour le total à chaque suppression
    });

//AJOUT EN FAVORIS ET CHANGEMENT DE COULEUR
    const colors = ['red', 'transparent']; // Liste de couleurs
    let currentIndex = 0;

    Fav.addEventListener('click', function () {
        Fav.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
        return alert(`Added to favorite`)
    });

}

//FOMNCTION SOMME POUR LE CALCUL DES PRIX TOTAUX//
function calSum() {
    let total = 0;

    // Parcours des articles pour calculer leurs prix totaux 
    for (var i = 0; i < article.length; i++) {
        total += parseInt(article[i].querySelector('.price').innerText.replace('$', '')) * parseInt(article[i].querySelector('.quantity').innerText);
    }

    prixTotal.textContent = total.toFixed(2) + ' $'; 
   
   
}


                                  /*FIN DU SCRIPT*/   

  

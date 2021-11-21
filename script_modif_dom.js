
//modification n°1
function changeTitles(){
  document.getElementsByClassName("jumbotron-heading")[0].innerHTML = "Ce que j'ai appris à THP";
  document.getElementsByClassName("lead text-muted")[0].innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";

}

//modification n°2
function changeCallToActions(){
  document.getElementsByClassName("btn btn-primary my-2")[0].innerHTML = "Ok je veux tester!";
  /*ou
  document.getElementsByTagName("main")[0].getElementsByTagName("section")[0].getElementsByTagName("div")[0].getElementsByTagName("p")[1].getElementsByTagName("a")[0].innerHTML = "Ok je veux tester !";
  */
  document.getElementsByClassName("btn btn-primary my-2")[0].href = "http://www.thehackingproject.org";
  document.getElementsByClassName("btn btn-secondary my-2")[0].innerHTML = "No Merci";
  document.getElementsByClassName("btn btn-secondary my-2")[0].href = "https://www.pole-emploi.fr/accueil/"

}

//modification n°3
function changeLogoName(){
    document.getElementsByClassName("container d-flex justify-content-between")[0].getElementsByTagName("a")[0].innerHTML = "The THP Experience";
    document.getElementsByClassName("container d-flex justify-content-between")[0].getElementsByTagName("a")[0].style.fontSize = '2em';

}

//modification n°4
let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
function populateImages(){
  let img = document.getElementsByTagName("img");
  for(let i=0; i<img.length;i++){
    img[i].src = imagesArray[i];
  }
}

//modification n°5
function deleteLastCards(){
  let cards = document.getElementsByClassName("card mb-4 box-shadow");
  for(let i = 0; i < 3;i++){
    cards[cards.length-1].remove();
  }
}

//modification n°6
function changeCardsText(){
  let cards = document.getElementsByClassName("card-text");
  cards[0].innerHTML = "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web";
  cards[1].innerHTML = "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML";
  cards[2].innerHTML = "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype.";
  cards[3].innerHTML = "Ruby est un langage open-source dynamique qui met l'accent sur la simplicité et la productivité. Sa syntaxe élégante en facilite la lecture et l'écriture.";
  cards[4].innerHTML = "Bootstrap est un framework open source de développement web orienté interface graphique.";
  cards[5].innerHTML = "GitHub est une plate-forme d'hébergement de code pour le contrôle de version et la collaboration. Il vous permet, à vous et à d'autres, de travailler ensemble sur des projets de n'importe où.";
}

//modification n°7
function changeViewButtons(){
  let buttons = document.getElementsByClassName("btn-group");
  for(let i = 0; i < 6;i++){
    buttons[i].getElementsByTagName("button")[0].classList.remove('btn-outline-secondary');
    buttons[i].getElementsByTagName("button")[0].classList.add('btn-success');
  }

}

//modification n°8
function changeNewsNode(){
  /*const newElt = document.createElement("div");
  let elt = document.getElementsByClassName("album py-5 bg-light");

  elt.appendChild(newElt);*/
  let node = document.createElement("div");
  node.className = "row";
  //node.classList = row.classList.add("album py-5 bg-light");
  //node.appendChild(document.getElementsByClassName("album py-5 bg-light"));
  //document.getElementsByClassName("row")[1].appendChild(node);
  document.getElementsByClassName("album py-5 bg-light")[0].getElementsByTagName("div")[0].appendChild(node);
  //document.getElementsByClassName("row")[1].appendChild(node);
  //document.getElementsByClassName("row")[1].appendChild(document.getElementsByClassName("card mb-4 box-shadow")[2]);
  document.getElementsByClassName("row")[1].appendChild(document.getElementsByClassName("row")[0].getElementsByClassName("card mb-4 box-shadow")[2]);
  /*let parentDiv = document.getElementsByClassName("container");
  let theFirstChild = parentDiv.firstChild;
  let div = document.createElement('div');
  div.className = "row";
  parentDiv.insertBefore(div, theFirstChild);


  //document.getElementsByClassName("col-md-4")[2].appendChild(document.getElementsByClassName("row")[1]);
  //document.getElementsByClassName("col-md-4")[2].getElementsByTagName("div")[0].appendChild(div);
  //document.getElementsByClassName("row")[1].appendChild(document.getElementsByClassName("row")[0].getElementsByTagName("div")[2] )


  /* for (let i=0; i<1; i++) {
     let clone=document.querySelectorAll("div.fils").cloneNode(true);
     document.getElementById("conteneur").appendChild(clone);
   }*/
  /* let node = document.getElementsByClassName("container");
   let newDiv = document.createElement("div");
   newDiv.className = "row";
   node.prepend(newDiv);*/
}


changeTitles();
changeCallToActions();
changeLogoName();
populateImages();
deleteLastCards();
changeCardsText();
changeViewButtons();
changeNewsNode();

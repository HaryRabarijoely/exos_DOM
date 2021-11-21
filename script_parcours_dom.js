

//let elementFromDOM = document.getElementsByTagName('p').length;
console.log(document.getElementsByTagName('p').length);

//let elementFromDOM = document.getElementById('coucou').textContent;
console.log(document.getElementById("coucou").textContent);

console.log("URL " +document.getElementsByTagName('a')[2]);

console.log(document.getElementsByClassName("compte-moi").length);

console.log(document.querySelectorAll('li.compte-moi').length);

console.log(document.querySelectorAll('ul.li, li.compte-moi').length);

console.log(document.getElementsByTagName('div')[0].getElementsByTagName('ul')[1].getElementsByTagName('li')[0].textContent);

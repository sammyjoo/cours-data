const Express = require("express");
const Axios = require("axios");
const Cheerio = require("cheerio");
const fs = require("fs");

const App = Express();

const server = App.listen(process.env.PORT, () => {
  console.log("server is running");
});

let request = "https://fr.wikipedia.org/wiki/Jeux_olympiques_d%27%C3%A9t%C3%A9_de_2024";

Axios(request)
  .then(response => {
    //console.log(response.data);
  
    // avec Axios, le html est dans response.data 
    const webpage = response.data;
    // charger le contexte grâce à Cheerio
    const $ = Cheerio.load(webpage);
    
    // Récupérer les paragraphes du contenu de l'article Wikipédia
    // const content = $('#content', webpage);
    // const paragraphs = [];
    // $("p", content).each( function(){
    //   let txt = $(this).text();
    //   paragraphs.push(txt);
    // });
    // console.log(paragraphs.length, " paragraphes dans l'article");
    
    // Récupérer le tableau qui affiche tous les sports des JO
    const wikitables = [];
    $('.wikitable', webpage).each(function(){
      wikitables.push($(this));
    });
    const disciplineTable = wikitables[1];
    const caption = $("caption", disciplineTable).text();
    const tbodys = [];
    $("tbody", disciplineTable).each(function(){
      tbodys.push($(this));
    });
    console.log(tbodys.length, ' tbody(s)');
    
    const headers = [];
    $('th', tbodys[0]).each(function() {
      headers.push($(this).text());
    })
    console.log(headers);
  
    const disciplines = []; 
    $('tr', tbodys[1]).each( (index, element) => {
      let ico   = $(element).find('img').toArray().map(elem => $(elem).attr('src'));
      let names = $($(element).find('td')[0]).text().split('•').map(str => str.trim());
      //console.log(names);
      let men   = $($(element).find('td')[1]).text().split('•');
      let women = $($(element).find('td')[2]).text().split('•');
      let mixt  = $($(element).find('td')[3]).text().split('•');
      let total = $($(element).find('td')[4]).text().split('•').map(str => str.replace('\n', ''));
      //console.log(typeof men);
      
      let discipline = {
        ico, names, men, women, mixt, total
      };
      
      disciplines.push(discipline);
    });
  
    console.log(disciplines);
  
  
    // Fin de la requête Axios
    console.log('requête terminée');
    
    // Enregistrer l'objet JSON dans un fichier JSON
    console.log('enregistrement du fichier JSON...');
    const data = {
      caption, headers, disciplines
    }  
    let sdata = JSON.stringify(data);
    fs.writeFileSync("./JO2024-Disciplines.json", sdata, () => {
      console.log('fichier JSON enregistré.');
    });
  
  
  
  })
  .catch(err => {
    console.error(err);
  });

console.log("Hello world !");


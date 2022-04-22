const PORT = 8000
const axios = require ('axios')
const cheerio = require ('cheerio')
const express = require ('express')
const fs = require("fs");
const app = express()

const tab = [];

// lefigaro 
const url = 'https://www.lefigaro.fr/flash-actu'
axios(url)
.then(response =>{
    const html = response.data
    const $ = cheerio.load(html)
    let articles = []
   

    //titres 
    $('.fig-flash__item', html).each(function(){
        const titres = $(this).find('h2').text().split(' ');
        const times = $(this).find('.fig-flash__hour').attr('datetime')
        articles.push( {
            titres,
            times
        })
    }) 

    console.log(articles)
    console.log(articles.length)//69
    




            // Fin de la requête Axios
            console.log('requête terminée');
    
            // Enregistrer l'objet JSON dans un fichier JSON
            console.log('enregistrement du fichier JSON...');
            const data = {
              articles
            }  
            let sdata = JSON.stringify(data);
            fs.writeFileSync("./JournalInfo.json", sdata, () => {
              console.log('fichier JSON enregistré.');
            });
          
          

})
.catch(err=> console.log(err))





  //BFM  
    const url2 = 'https://www.bfmtv.com/news-24-7/'
    axios(url2)
    .then(response =>{
        const html = response.data
        const $ = cheerio.load(html)
        console.log('------ JOURNAL BFM ------');

        


        function greet(){
            console.count(tab);
            return tab;
        }
        //titres 
        $('.content_live_block', html).each(function(){

            

            const titres2 = $(this).find('h2').text().split(' ');
            const times2 = $(this).find('.content_live_time').attr('datetime');
            

            let tabs = {
                titres2, times2
            };
            tab.push(tabs);


            //articles.push( {
            //    titres2,
            //    times2
            //})
        }); 
    
        console.log(tab)
        console.log(tab.length)//400

        //filtre pour récuperer les mots qui contient covid
        console.count("covid")

        


            // Fin de la requête Axios
    console.log('requête terminée');
    
    // Enregistrer l'objet JSON dans un fichier JSON
    console.log('enregistrement du fichier JSON...');
    const data = {
      tab
    }  
    let sdata = JSON.stringify(data);
    fs.writeFileSync("./JournalInfo.json", sdata, () => {
      console.log('fichier JSON enregistré.');
    });
  
  
  
})

.catch(err => {
    console.error(err);
  });

console.log("Hello world !");

app.listen(PORT, ()=>console.log('server running on PORT ${PORT}'))


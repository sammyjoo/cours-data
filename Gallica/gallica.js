let gallicaAPIURL           = "https://gallica.bnf.fr/SRU?version=1.2&operation=searchRetrieve&query="
let cql                     =["dc.type","dc.title","dc.creator","dc.relation","dc.publisher","dc,language"];
 let operator               = ["all", "any", "adj", "prox"];
 let and                    = "&";
 let separator              = "%20";
 let types                  = [
     "monographe",
     "carte",
     "image",
     "fascicule",
    "manuscrit",
    "partition",
    "sonore",
    "objet",
    "video"
 ];

 let prenom                 =["hugo"]
 let boole                  =["and","or","not"]

 let collapse           ="collapsing=true";

 let request = gallicaAPIURL + cql[2] + separator + operator[0] + separator + types[4] + and +collapse; 
 // le créateur dans le manuscrit //
 


 LoadData(request)
      .then(data =>{
          console.log(request);
          console.log(data);

          let paragraphe = document.querySelectorAll("#data1");
          console.log(paragraphe)
          let oaiData = data.getElementsByTagName("oai_dc:dc");

          for(let i=0; i<oaiData.length; i++){
              let gallicadata = oaiData[i];
              for(let j=0; j<gallicadata.children.length; j++){
                  let value = gallicadata.children[j].textContent;
                  console.log(value)
                  paragraphe[j].innerHTML= value;
              }
          }
      })

      let request2 = gallicaAPIURL + cql[2] + separator + operator[0] + separator + types[0] + and +collapse; 

      // createur all 

      LoadData(request2)
           .then(data =>{
               console.log(request2);
               console.log(data2);
             
                 let paragraphe = document.querySelectorAll("#data2");
                 console.log(paragraphe);
               let oaiData = data.getElementsByTagName("oai_dc:dc");
                 console.log(oaiData);
               for(let i=0; i<oaiData.length; i++){
                   let gallicadata = oaiData[i];
                   for(let j=0; j<gallicadata.children.length; j++){
                       let value = gallicadata.children[j].textContent;
                       console.log(value);
     
                       paragraphe[j].innerHTML= value;
                   }
               }
     
               
     
               
     
           })


           let request3 = gallicaAPIURL + cql[0] + separator + operator[0] + separator + types[6] + and +collapse; 
           LoadData(request3)
           .then(data =>{
               console.log(request3);
               console.log(data3);
             
                 let paragraphe = document.querySelectorAll("#data3");
                 console.log(paragraphe);
               let oaiData = data.getElementsByTagName("oai_dc:dc");
                 console.log(oaiData);
               for(let i=0; i<oaiData.length; i++){
                   let gallicadata = oaiData[i];
                   for(let j=0; j<gallicadata.children.length; j++){
                       let value = gallicadata.children[j].textContent;
                       console.log(value);
     
                       paragraphe[j].innerHTML= value;
                   }
               }
     
               
     
               
     
           })


      async function LoadData(request){
        const response  = await fetch(request);
        const rawdata   = await response.text();
        const xml       = await new window.DOMParser().parseFromString(rawdata,"text/xml");
        return xml;
    }
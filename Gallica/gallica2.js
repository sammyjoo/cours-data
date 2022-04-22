let gallicaAPIURL           = "https://gallica.bnf.fr/SRU?version=1.2&operation=searchRetrieve&query="
let cql                     =["dc.type","dc.title","dc.creator"];
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

 let collapse           ="collapsing=true";

 let request2 = gallicaAPIURL + cql[1] + separator + operator[0] + separator + types[5] + and +collapse; 

 LoadData(request2)
      .then(data =>{
          console.log(request2);
          console.log(data);
        
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
      async function LoadData(request){
        const response  = await fetch(request);
        const rawdata   = await response.text();
        const xml       = await new window.DOMParser().parseFromString(rawdata,"text/xml");
        return xml;
    }


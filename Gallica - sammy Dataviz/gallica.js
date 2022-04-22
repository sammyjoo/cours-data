//infos : https://api.bnf.fr/fr/api-gallica-de-recherche
let gallicaAPIURL = "https://gallica.bnf.fr/SRU?version=1.2&operation=searchRetrieve&query="
let cql = "dc.creator";
let operator = ["all", "any", "adj", "prox"];
let and = "&";
let separator = "%20";
let types = [
    "monographie",
    "carte",
    "image",
    "fascicule",
    "manuscrit",
    "partition",
    "sonore",
    "objet",
    "video"
];
let collapse = "collapsing=true";
let maxRecord = "maximumRecords=1";
let tab       = [];
let tab2       = [];
let tab3       = [];



let request = gallicaAPIURL + cql + separator + operator[0] + separator + "Molière" + and + collapse + and + maxRecord;
let request2 = gallicaAPIURL + cql + separator + operator[0] + separator + "Labrouste" + and + collapse + and + maxRecord;
let request3 = gallicaAPIURL + cql + separator + operator[0] + separator + "Voltaire" + and + collapse + and + maxRecord;

LoadData(request)
    .then(data => {
        console.log(request);
        console.log(data);
        // j'appel dans L'xml de l'api gallica, dans les records
        let records = data.getElementsByTagName("srw:record");

        // J'appel dans mon HTML
        let target = document.getElementById("datadisplay");

        let maxrecords = Number(data.getElementsByTagName("srw:numberOfRecords")[0].textContent)
        console.log(maxrecords)
       


        for (let i = 0; i < records.length; i++) {
            let element = records[i];

            let imageurl = element.getElementsByTagName("medres")[0].textContent;
            let title = element.getElementsByTagName("dc:title")[0].textContent;
            let date = element.getElementsByTagName("dc:date");

            let creators = element.getElementsByTagName("dc:creator");
            let contributors = element.getElementsByTagName("dc:contributor");
            let publishers = element.getElementsByTagName("dc:publisher");

            let container = document.createElement("div");
            container.id = `record${i}`;
            container.className = "srwrecord";

            let imgcontainer = document.createElement("div");
            imgcontainer.className= 'pixels'; // className en js //
            let infocontainer = document.createElement("div");
            infocontainer.className= 'textes';

            //img
            let img = document.createElement("img");
            img.src = imageurl;
            img.alt = `Cover of ${title}`
            

            //info
            let h1 = document.createElement("h1");
            h1.innerHTML = `${title}`;

            let datepublish = date.length > 0 ? date[0].textContent : "Date is unknown";
            // let datepublish = "Date is unknown";
            // if(data.length>0){
            //     datepublish = date[0].textContent;
            // }
            let h2 = document.createElement("h2");
            h2.innerHTML = `${datepublish}`;

            let creatorp = document.createElement("p");
            creatorp.innerHTML = `Creators: ${AggregateDataAsString(creators)}`;

            let contribp = document.createElement("p");
            contribp.innerHTML = `Contributors: ${AggregateDataAsString(contributors)}`;
            contribp.className="contributors";

            let publishp = document.createElement("p");
            publishp.innerHTML = `Publisher: ${AggregateDataAsString(publishers)}`;

            imgcontainer.appendChild(h1);
            imgcontainer.appendChild(img);
            imgcontainer.appendChild(h2);
            

            infocontainer.appendChild(creatorp);
            infocontainer.appendChild(contribp);
            infocontainer.appendChild(publishp);
            

            container.appendChild(imgcontainer);
            container.appendChild(infocontainer);
            target.appendChild(container);

            tab.push(maxrecords);
            console.log(tab);

        };
    })



    LoadData(request2)
    .then(data => {
        console.log(request2);
        console.log(data);
        // j'appel dans L'xml de l'api gallica, dans les records
        let records = data.getElementsByTagName("srw:record");

        // J'appel dans mon HTML
        let target = document.getElementById("datadisplay");

        let maxrecords2 = Number(data.getElementsByTagName("srw:numberOfRecords")[0].textContent)
        console.log(maxrecords2)
 

        for (let i = 0; i < records.length; i++) {
            let element = records[i];

            let imageurl = element.getElementsByTagName("medres")[0].textContent;
            let title = element.getElementsByTagName("dc:title")[0].textContent;
            let date = element.getElementsByTagName("dc:date");

            let creators2 = element.getElementsByTagName("dc:creator");
            let contributors = element.getElementsByTagName("dc:contributor");
            let publishers = element.getElementsByTagName("dc:publisher");

            let container = document.createElement("div");
            container.id = `record${i}`;
            container.className = "srwrecord";

            let imgcontainer = document.createElement("div");
            imgcontainer.className= 'pixels'; // className en js //
            let infocontainer = document.createElement("div");
            infocontainer.className= 'textes';

            //img
            let img = document.createElement("img");
            img.src = imageurl;
            img.alt = `Cover of ${title}`
            

            //info
            let h1 = document.createElement("h1");
            h1.innerHTML = `${title}`;

            let datepublish = date.length > 0 ? date[0].textContent : "Date is unknown";
            // let datepublish = "Date is unknown";
            // if(data.length>0){
            //     datepublish = date[0].textContent;
            // }
            let h2 = document.createElement("h2");
            h2.innerHTML = `${datepublish}`;

            let creatorp = document.createElement("p");
            creatorp.innerHTML = `Creators: ${AggregateDataAsString(creators2)}`;

            let contribp = document.createElement("p");
            contribp.innerHTML = `Contributors: ${AggregateDataAsString(contributors)}`;
            contribp.className="contributors";

            let publishp = document.createElement("p");
            publishp.innerHTML = `Publisher: ${AggregateDataAsString(publishers)}`;

            imgcontainer.appendChild(h1);
            imgcontainer.appendChild(img);
            imgcontainer.appendChild(h2);
            

            infocontainer.appendChild(creatorp);
            infocontainer.appendChild(contribp);
            infocontainer.appendChild(publishp);
            

            container.appendChild(imgcontainer);
            container.appendChild(infocontainer);
            target.appendChild(container);

            tab2.push(maxrecords2);
            console.log(tab2);


        };
    })

    LoadData(request3)
    .then(data => {
        console.log(request3);
        console.log(data);
        // j'appel dans L'xml de l'api gallica, dans les records
        let records = data.getElementsByTagName("srw:record");

        // J'appel dans mon HTML
        let target = document.getElementById("datadisplay");

        let maxrecords3 = Number(data.getElementsByTagName("srw:numberOfRecords")[0].textContent)
        console.log(maxrecords3)
 

        for (let i = 0; i < records.length; i++) {
            let element = records[i];

            let imageurl = element.getElementsByTagName("medres")[0].textContent;
            let title = element.getElementsByTagName("dc:title")[0].textContent;
            let date = element.getElementsByTagName("dc:date");

            let creators3 = element.getElementsByTagName("dc:creator");
            let contributors = element.getElementsByTagName("dc:contributor");
            let publishers = element.getElementsByTagName("dc:publisher");

            let container = document.createElement("div");
            container.id = `record${i}`;
            container.className = "srwrecord";

            let imgcontainer = document.createElement("div");
            imgcontainer.className= 'pixels'; // className en js //
            let infocontainer = document.createElement("div");
            infocontainer.className= 'textes';

            //img
            let img = document.createElement("img");
            img.src = imageurl;
            img.alt = `Cover of ${title}`
            

            //info
            let h1 = document.createElement("h1");
            h1.innerHTML = `${title}`;

            let datepublish = date.length > 0 ? date[0].textContent : "Date is unknown";
            // let datepublish = "Date is unknown";
            // if(data.length>0){
            //     datepublish = date[0].textContent;
            // }
            let h2 = document.createElement("h2");
            h2.innerHTML = `${datepublish}`;

            let creatorp = document.createElement("p");
            creatorp.innerHTML = `Creators: ${AggregateDataAsString(creators3)}`;

            let contribp = document.createElement("p");
            contribp.innerHTML = `Contributors: ${AggregateDataAsString(contributors)}`;
            contribp.className="contributors";

            let publishp = document.createElement("p");
            publishp.innerHTML = `Publisher: ${AggregateDataAsString(publishers)}`;

            imgcontainer.appendChild(h1);
            imgcontainer.appendChild(img);
            imgcontainer.appendChild(h2);
            

            infocontainer.appendChild(creatorp);
            infocontainer.appendChild(contribp);
            infocontainer.appendChild(publishp);
            

            container.appendChild(imgcontainer);
            container.appendChild(infocontainer);
            target.appendChild(container);

            tab3.push(maxrecords3);
            console.log(tab3);


        };
    })

function AggregateDataAsString(data) {
    let aggregate = "";
    Array.from(data).forEach(value => {
        aggregate += `${value.textContent}<br>`;
    })

    return aggregate;
}

async function LoadData(request, request2, request3) {
    const response = await fetch(request, request2, request3);
    const rawdata = await response.text();
    const xml = await new window.DOMParser().parseFromString(rawdata, "text/xml");
    return xml;
}


document.getElementById('title').innerHTML = 'Les meilleurs resultats renvoyés dans gallica entre :';


const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    
    type: 'doughnut',
    data: {
        labels: ["Molière", "Labrouste", "Voltaire"],
        datasets: [{
            label: "My First dataset",
            data: tab, tab2, tab3,
            backgroundColor: [
                'rgba(100, 50, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 200, 86, 0.2)'
            ],
            borderColor: [
                'rgba(100, 50, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 200, 86, 1)'
            ],
            borderWidth: 2
        }]
    },

});

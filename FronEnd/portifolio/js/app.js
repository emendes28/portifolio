var HTMLwork = "";
var HTMLworks = "";
var i = 0;
while(i < data.works.length){
    HTMLwork =  `
                    <figure class="col">
                        <img class="fig-project" src="%data.img%" alt="%data.alt%">                     
                        <h2>%data.description%</h2>
                        <figcaption>
                           <a href="%data.link%" target="_blank"> <blockquote><em>%data.link%</em></blockquote></a>
                        </figcaption>
                    </figure>`;
    HTMLwork = HTMLwork.replace("%data.img%",data.works[i].img);
    HTMLwork = HTMLwork.replace("%data.alt%",data.works[i].alt);
    HTMLwork = HTMLwork.replace("%data.description%",data.works[i].description);
    HTMLwork = HTMLwork.replace("%data.link%",data.works[i].link).replace("%data.link%",data.works[i].link);
    HTMLworks = HTMLworks +HTMLwork;
    i++;
}

document.getElementById('main').innerHTML = HTMLworks;
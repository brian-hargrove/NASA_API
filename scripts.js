let dailyURL = 'https://api.nasa.gov/planetary/apod'; //APOD - Astronomy photo of the day
let imageURL = 'https://images-api.nasa.gov';  //NASA Image library
let epicURL = 'https://api.nasa.gov/EPIC/api/natural/'; //EPIC image 
let epicSearch = 'date/'
let imageSearch = '/search?q=apollo';
let key = '?api_key=gWQwU9oVIst5HeoryDnfutr5hdZCaIkRB3h8mSpo';

let pictureShow = document.querySelector('src');
const searchTerm = document.querySelector('.search-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

searchForm.addEventListener('submit',fetchEpic);

//fetch APOD
// fetch(dailyURL+key)  
// .then(function(adop){
   
//     return adop.json();
// }).then(function(json){
//     console.log('apod:',json);
//     //displayAPOD(json);
    
//    });

//fetch NASA Image Libray
// fetch(imageURL+imageSearch)
// .then(function(imageLibrary){
//     return imageLibrary.json();
// }).then(function(json){
//     console.log('imageLib:',json);
// });

//fetch EPIC
function fetchEpic(e){
    e.preventDefault();
    url = epicURL + epicSearch + searchTerm.value + key;
    console.log('url:',url);

fetch(url)
    .then(function(result){
        return result.json();
        
    }).then(function(json){
       displayImage(json);
        console.log('epic:',json)
    });
}

function displayImage(json){
    let photos=json;
    console.log('photo:',photos);

    if(photos.length === 0){
        console.log('No Results');
    }else {
        for (let i=0; i<photos.length; i++){
            let photo = photos[i].image;
            console.log('oct',photo);
            let picture = document.getElementsByTagName('src');
            picture.innerHTML=`https://epic.gsfc.nasa.gov/archive/natural/ + ${searchTerm.value}+'png'+${photos[i]}+.png`;

            pictureShow.appendChild('src');
            
/*
this is the address of the file location.  api only show epic_1b_20200930001751
https://epic.gsfc.nasa.gov/archive/natural/2020/09/30/png/epic_1b_20200930001751.png


so did interpolation of 'https://epic.gsfc.nasa.gov/archive/natural/ + ${searchTerm.value}+'png'+${photos[i]}+.png`
*/

        

    }
    }
}



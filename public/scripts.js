let epicURL = 'https://api.nasa.gov/EPIC/api/enhanced/'; //EPIC image 
let epicSearch = 'date/'
let key = '?api_key=gWQwU9oVIst5HeoryDnfutr5hdZCaIkRB3h8mSpo';

let pictureShow = document.querySelector('src');
const searchTerm = document.querySelector('.search-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

searchForm.addEventListener('submit',fetchEpic);

let t = 0;
let txt = 'Greetings, if you don\'t know who I am, I am The Moon. You may have seen me up in your night sky and sometimes in your day sky.  I have complied a set of images of your world, you know, Earth.  Scroll down and select a day. I will show you my Point Of View of your beautiful planet. By the way this is me during my Blood Wolf Lunar Eclipse Phase of January 2019.';
let speed = 70;

function typeWriter() {
    if(t<txt.length){
        document.getElementById('type').innerHTML += txt.charAt(t);
        t++;
        setTimeout(typeWriter, speed);
    }
};
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
        alert('Unfortunately, my camera was broke on this day, please choose another day');
        console.log('No Results');
    }else {
        for (let i=0; i<=photos.length; i++){
            let photo = photos[i].image;
            console.log('oct',photo);
            let date = document.getElementById('search-date').value;    //date is pulled at 2020-09-27
            let dateArray =date.split('-');                             //split('-') removes the - from the date and make it array of {2020,09,27}
            let year = dateArray[0];                                    
            let month = dateArray[1];
            let day=dateArray[2];
            document.getElementById('img-fluid').src = `https://api.nasa.gov/EPIC/archive/enhanced/${year}/${month}/${day}/png/${photo}.png${key}`
    }
    }
}
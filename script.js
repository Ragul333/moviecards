// AIzaSyB3QskvrwlFMkS_HIyQN8FacgIJDHLlXEw
async function googleSearch(keyword_id){
    try{
    let api         = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c5f593fe3524ee5043e49d60efbf6d25`);
    let dataAccess  = await api.json();

    console.log(dataAccess);
    return dataAccess;
}catch(err){
    console.log(err)
}
}

async function googleSearch2(keyword_id2){
    try{                                             
        let api         = await fetch(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=c5f593fe3524ee5043e49d60efbf6d25`);
        let dataAccess  = await api.json();
    
        console.log(dataAccess);
        return dataAccess;
    }catch(err){
        console.log(err)
    }
    }

    
async function googleSearch3(keyword_id2){
    try{                                               
        let api         = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2014&api_key=c5f593fe3524ee5043e49d60efbf6d25`);
        let dataAccess  = await api.json();
    
        console.log(dataAccess);
        return dataAccess;
    }catch(err){
        console.log(err)
    }
    }

    async function googleSearch4(keyword_id2){
        try{                                               
            let api         = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&api_key=c5f593fe3524ee5043e49d60efbf6d25`);
            let dataAccess  = await api.json();
        
            console.log(dataAccess);
            return dataAccess;
        }catch(err){
            console.log(err)
        }
        }

function createClass(elem,elemClass=''){
    let element = document.createElement(elem);
    element.setAttribute('class',elemClass);
    return element;
}

googleSearch().then((data)=>{
    var row = createClass('div','row');
    var col = createClass('div','col-4');
    
    for(let i=0; i<data.results.length; i++){
       // console.log(data.results[i].title)
       var dataDisp = document.getElementById('dataDisplay');
       let card = createClass('div','card m-3');
       card.setAttribute('id','cards');
       card.setAttribute('data-aos',"zoom-in");

   
       let img = createClass('img','card-img-top');
       img.setAttribute('src',`https://image.tmdb.org/t/p/w500${data.results[i].poster_path}`);
       img.style.borderRadius = '8px'
       let h5 = createClass('h5','mt-2 text-secondary');
       h5.innerHTML = data.results[i].title;
       h5.style.fontSize = '16px';
       let p = createClass('p','text-success');
       p.innerHTML = data.results[i].overview;
   
       card.append(img,h5);

       
       dataDisp.append(card);
    }
});


googleSearch2().then((data)=>{
    var row = createClass('div','row');
    var col = createClass('div','col-4');
    
    for(let i=0; i<data.results.length; i++){
       // console.log(data.results[i].title)
       var dataDisp = document.getElementById('dataDisplay2');
       let card = createClass('div','card m-3');
       card.setAttribute('id','cards2');
      card.setAttribute('data-aos',"zoom-in");

   
       let img = createClass('img','card-img-top');
       img.setAttribute('src',`https://image.tmdb.org/t/p/w500${data.results[i].poster_path}`);
       img.style.borderRadius = '8px'
       let h5 = createClass('h5','mt-2 text-secondary');
       h5.innerHTML = data.results[i].title;
       h5.style.fontSize = '16px';
       let p = createClass('p','text-success');
       p.innerHTML = data.results[i].overview;
   
       card.append(img,h5);

       
       dataDisp.append(card);
    }
});

googleSearch3().then((data)=>{
    var row = createClass('div','row');
    var col = createClass('div','col-4');
    
    for(let i=0; i<data.results.length; i++){
       // console.log(data.results[i].title)
       var dataDisp = document.getElementById('dataDisplay3');
       let card = createClass('div','card m-3');
       card.setAttribute('id','cards3');
       card.setAttribute('data-aos',"zoom-in");
   
       let img = createClass('img','card-img-top');
       img.setAttribute('src',`https://image.tmdb.org/t/p/w500${data.results[i].poster_path}`);
       img.style.borderRadius = '8px'
       let h5 = createClass('h5','mt-2 text-secondary');
       h5.innerHTML = data.results[i].title;
       h5.style.fontSize = '16px';
       let p = createClass('p','text-success');
       p.innerHTML = data.results[i].overview;
   
       card.append(img,h5);

       
       dataDisp.append(card);
    }
});


googleSearch4().then((data)=>{
    var row = createClass('div','row');
    var col = createClass('div','col-4');
    
    for(let i=0; i<data.results.length; i++){
       // console.log(data.results[i].title)
       var dataDisp = document.getElementById('dataDisplay4');
       let card = createClass('div','card m-3');
       card.setAttribute('id','cards4');
       card.setAttribute('data-aos',"zoom-in");
   
       let img = createClass('img','card-img-top');
       img.setAttribute('src',`https://image.tmdb.org/t/p/w500${data.results[i].poster_path}`);
       img.style.borderRadius = '8px'
       let h5 = createClass('h5','mt-2 text-secondary');
       h5.innerHTML = data.results[i].title;
       h5.style.fontSize = '16px';
       let p = createClass('p','text-success');
       p.innerHTML = data.results[i].overview;
   
       card.append(img,h5);

       
       dataDisp.append(card);
    }
});


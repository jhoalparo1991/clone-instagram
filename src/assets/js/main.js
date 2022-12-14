import fetch from 'node-fetch';

const linkPost = document.querySelector("#link-post")
const linkSaved = document.querySelector("#link-saved")
const linkTag = document.querySelector("#link-tag")

const saved = document.querySelector("#saved")
const post = document.querySelector("#post")
const tags = document.querySelector("#tags")


linkSaved.addEventListener('click' , toogleSaved)
linkPost.addEventListener('click' , tooglePost)
linkTag.addEventListener('click' , toogleTag)

function toogleSaved(){
    post.classList.remove('post')
    post.classList.add('inactive')
    tags.classList.remove('post')
    tags.classList.add('inactive')
    saved.classList.add('post')
    saved.classList.remove('inactive')
}

function tooglePost(){
    saved.classList.remove('post')
    saved.classList.add('inactive')
    tags.classList.remove('post')
    tags.classList.add('inactive')
    post.classList.remove('inactive')
    post.classList.add('post')
}

function toogleTag(){
    post.classList.remove('post')
    post.classList.add('inactive')
    saved.classList.remove('post')
    saved.classList.add('inactive')
    tags.classList.add('post')
    tags.classList.remove('inactive')
}

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'instagram28.p.rapidapi.com'
    }
};

async function getData(apiUrl,options){
    const response = await fetch(apiUrl,options);
    const data = await response.json();
    return data;
}

(async ()=>{
   const data = await getData('my_url',options);
   console.log(data);
})();

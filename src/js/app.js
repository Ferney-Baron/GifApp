document.addEventListener('DOMContentLoaded', () => {

})

const input = document.getElementById('input');
const form = document.getElementById('form');
const saveGifName = new Array;

form.addEventListener('submit', e => {
    e.preventDefault();

    const gifName = input.value;
    getGIfts( gifName.trim() );
});

const getGIfts = ( category ) => {
    url = `https://api.giphy.com/v1/gifs/search?api_key=1QYg7mgSWiFvaSnBc4N6zuSWyDFELTHm&q=${category}&limit=20`;

    fetch( url )
        .then( res => res.json())
        .then( res => {
            const { data } = res;
            const gifs = data.map( gif => {
                return ({
                    title: gif.title,
                    url: gif.images.original.url
                })
            })
            showGifs( gifs );
        }
        );
}

const section = document.getElementById('section');

const showGifs = ( gifs ) => {
    const gifContainer = document.getElementById('gifs-container');
    const newDiv = document.createElement('div');

    gifs.forEach( gif => {
        const getGif = document.createElement('img');
        getGif.src = gif.url;
        getGif.alt = gif.title;
        newDiv.appendChild( getGif );
    });

    section.replaceChild(newDiv, gifContainer)
    newDiv.setAttribute('id', 'gifs-container')
    newDiv.classList.add('gifs-container');
}



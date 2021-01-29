const container = document.getElementById('container');
const loader = document.getElementById('loader');

let limit = 6;
let page = 1;


// fetch & get api
async function getImg() {
    const res = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);

    const data = await res.json();

    return data;
}

// show loader
function showLoader() {
    loader.classList.add('active');

    setTimeout(() => {
        loader.classList.remove('active');

        setTimeout(() => {
            
        }, 300);

    }, 1000);
}


// show images on the DOM
async function showImages() {
    const images = await getImg();

    images.forEach(image => {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('image-container')  
        imgContainer.innerHTML = 
        `<img src="${image.download_url}" alt="" class="image">
         <h3 class="image-author">${image.author}</h3>
        `;
        
        container.appendChild(imgContainer);
    }); 
};

// show first images
showImages();

window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight} = document.documentElement;

    if(scrollTop + clientHeight >= scrollHeight - 5) {
        showLoader();
    }
});
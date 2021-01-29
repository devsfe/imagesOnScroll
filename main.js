const container = document.getElementById('container');


// fetch & get api
async function getImg() {
    const res = await fetch('https://picsum.photos/v2/list?page=2&limit=2');

    const data = await res.json();

    console.log(data);
}

getImg();
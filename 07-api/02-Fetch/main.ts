//main para comunicacion asincrona

const fetchData = async () => {

    const API_URL = 'https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json';

    const response = await fetch(API_URL);
    const data = await response.json();

    return data;
}

let button: HTMLButtonElement = document.querySelector('#btnInfo')!;
let parrafo: HTMLParagraphElement = document.querySelector('.info')!;

button.addEventListener('click', async () => {
    const data = await fetchData();
    parrafo.innerHTML = JSON.stringify(data);
})
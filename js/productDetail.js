import { API_URL } from "./utils.js";

const productDetail = document.getElementById("productDetail");
const href = document.location.href;
const idIndex = href.indexOf("?");
const id = href.slice(idIndex + 1);

console.log(id);

fetch(`${API_URL}/${id}`)
.then((resp) => {
    return resp.json();
}).then((data) => {
    console.log(data);
        const divImg = document.createElement("div");
        const divTexts = document.createElement("div");
        const brand = document.createElement("h2");
        const a = document.createElement("a");
        const img = document.createElement("img");
        const description = document.createElement("h3");
        const price = document.createElement("h2");
        img.src = data.photos;
        brand.innerText = data.brand
        a.innerText = data.name;
        description.innerText = data.description;
        price.innerText = `Price: ${data.price}`;
        divImg.appendChild(img);
        divTexts.classList.add("divText");
        divTexts.appendChild(brand);
        divTexts.appendChild(a);
        divTexts.appendChild(description);
        divTexts.appendChild(price);
        productDetail.appendChild(divImg);
        productDetail.appendChild(divTexts);
})
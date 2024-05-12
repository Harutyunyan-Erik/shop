import { API_URL } from "./utils.js";
const imgContainer = document.getElementById("img_container");

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
        const name = document.createElement("h2");
        const brand = document.createElement("a");
        const img = document.createElement("img");
        const description = document.createElement("h3");
        const price = document.createElement("h2");
        const preview = document.createElement("img");
        const previewText = document.createElement("h3");
        previewText.innerText = "Product Preview";
        img.src = data.preview;
        preview.src = data.photos;
        name.innerHTML = data.name;
        brand.innerText = data.brand
        description.innerText = `Description 

        ${data.description}`;
        price.innerText = `Price: ${data.price}`;
        divImg.appendChild(img);
        divTexts.classList.add("divText");
        divTexts.appendChild(name);
        divTexts.appendChild(brand);
        divTexts.appendChild(price);
        divTexts.appendChild(description);
        divTexts.appendChild(previewText);
        data.photos.forEach((photoUrl) => {
            const photoDiv = document.createElement("div");
            photoDiv.classList.add("divImgs");
            const photoImg = document.createElement("img");
            photoImg.src = photoUrl;
            photoDiv.appendChild(photoImg);
            imgContainer.appendChild(photoDiv);
            divTexts.appendChild(imgContainer);

            photoDiv.addEventListener("click", (e) => {
                img.src = e.target.src;
            })
        });

        productDetail.appendChild(divImg);
        productDetail.appendChild(divTexts);

       
})


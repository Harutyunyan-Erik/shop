import { API_URL } from "./utils.js";
import { withFetch } from "./helpers.js";
import { clothing,accessories } from "./constants.js";

const productContainer = document.getElementById("productContainer");

(function() {
    fetch(API_URL)
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        data.forEach((item) => {
            const div = document.createElement("div");
            const img = document.createElement("img");
            const price = document.createElement("h2");
            const brand = document.createElement("h3");
            price.innerHTML = `RS ${item.price}`;
            brand.innerHTML = item.brand;
            img.src = item.preview;
            div.classList.add("product_item");
            const a = document.createElement("a");
            a.innerText = `${item.name} --- ${item.id}`;
            a.href = `/productDetail.html?${item.id}`

            img.addEventListener("click", () => {
                window.location.href = a.href;
            });

            div.appendChild(img);
            div.appendChild(a);
            div.appendChild(brand);
            div.appendChild(price);
            if(item.isAccessory === false) {
                clothing.appendChild(div)
            }else{
                accessories.appendChild(div);
            }
        })
        console.log(data);
    })
})();


const slideImg = [
    "https://6629450d55391e3236ac1d5b--relaxed-pixie-fba787.netlify.app/img/img1.png",
    "https://6629450d55391e3236ac1d5b--relaxed-pixie-fba787.netlify.app/img/img2.png",
    "https://6629450d55391e3236ac1d5b--relaxed-pixie-fba787.netlify.app/img/img3.png",
    "https://6629450d55391e3236ac1d5b--relaxed-pixie-fba787.netlify.app/img/img4.png"
];

const changeSlider = () => {
    const div = document.getElementById("imgSlider");
    const img = document.createElement("img");
    let index = 0;

    const updateSlider = () => {
        img.src = slideImg[index];
        div.appendChild(img);
    };

    const initializeSlider = () => {
        updateSlider(); // Call updateSlider with index 0 when page loads
    };

    const nextSlide = () => {
        index++;
        if(index >= slideImg.length){
            index = 0;
        }
        updateSlider();
    };

    const prevSlide = () => {
        index--;
        if(index < 0){
            index = slideImg.length - 1;
        }
        updateSlider();
    };

    initializeSlider();

    return {
        nextSlide,
        prevSlide
    };
};

const slideConfig = changeSlider();

const inc = document.getElementById("inc");
const dec = document.getElementById("dec");

inc.addEventListener("click", slideConfig.nextSlide);
dec.addEventListener("click", slideConfig.prevSlide);
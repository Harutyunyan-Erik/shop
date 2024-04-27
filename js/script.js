import { API_URL } from "./utils.js";
import { withFetch } from "./helpers.js";

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
            img.src = item.preview;
            div.classList.add("product_item");
            const a = document.createElement("a");
            a.innerText = `${item.name} --- ${item.id}`;
            a.href = `/productDetail.html?${item.id}`

            img.addEventListener("click", () => {
                window.location.href = a.href; // Navigate to the specified URL
            });

            div.appendChild(img);
            div.appendChild(a);
            productContainer.appendChild(div);
        })
        console.log(data);
    })
})();



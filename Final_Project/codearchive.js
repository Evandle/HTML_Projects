function getPyroxene() {
    return parseInt(localStorage.getItem("pyroxene") || "0");
}

function updatePyroxene(amount) {
    localStorage.setItem("pyroxene", amount);
    const display = document.querySelectorAll(".pyroxene a");
    display.forEach(el => el.textContent = amount);
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    // Handle video sound toggle
    const btn = document.getElementById('enableSound');
    const video = document.getElementById('bgvid');

    if (btn && video) {
        btn.addEventListener('click', () => {
            video.muted = false;
            video.volume = 0.03;
            video.play();
            btn.style.display = 'none';
        });
    }

    const items = [
        {
            name: "S.C.H.A.L.E Acrylic Figure",
            image: "images/schaleacryfig.png",
            rarity: 3
        },
        {
            name: "Mika Tapestry",
            image: "images/mikatapestry.png",
            rarity: 4
        },
        {
            name: "Mika SD Package",
            image: "images/mikasdpack.png",
            rarity: 2
        },
        {
            name: "Mika Memorial Package",
            image: "images/mikamemorialpack.png",
            rarity: 4
        },
        {
            name: "Mika Glipik Acrylic Board",
            image: "images/mikagripikacrylicboard.png",
            rarity: 4
        },
        {
            name: "Mika Glipik Acrylic Figure",
            image: "images/mikaacrylicfig.png",
            rarity: 3
        },
        {
            name: "Final Chapter Trading Cards vol.1",
            image: "images/finalchapcards.jpg",
            rarity: 2
        },
        {
            name: "Final Chapter Trading Cards vol.2",
            image: "images/finalchapcards2.jpg",
            rarity: 2
        },
        {
            name: "Mika's Repleca Gun: Quis et Deus",
            image: "images/Mikagun.avif",
            rarity: 5
        }
    ];

    // Gacha cost constants
    const SINGLE_PULL_COST = 120;
    const TEN_PULL_COST = 1200;

    // Show popup
    function openPopup(items) {
        const popupItems = document.getElementById("popup-items");
        popupItems.innerHTML = ""; // Clear previous items
    
        items.forEach(item => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");
        
            const figure = document.createElement("figure");
        
            const img = document.createElement("img");
            img.src = item.image;
            img.alt = item.name;
        
            const figcaption = document.createElement("figcaption");
        
            const name = document.createElement("h3");
            name.textContent = item.name;
        
            const rarity = document.createElement("p");
            rarity.className = "rarity";
            rarity.textContent = "★".repeat(item.rarity) + "☆".repeat(5 - item.rarity);
        
            figcaption.appendChild(name);
            figcaption.appendChild(rarity);
            figure.appendChild(img);
            figure.appendChild(figcaption);
            productDiv.appendChild(figure);
        
            popupItems.appendChild(productDiv);
        });
        
    
        document.getElementById("popup").style.display = "block";
    }


    function closePopup() {
        document.getElementById("popup").style.display = "none";
    }

    function pullGacha(pullCount = 1) {
        const cost = pullCount === 10 ? TEN_PULL_COST : SINGLE_PULL_COST;
        let current = getPyroxene();

        if (current >= cost) {
            updatePyroxene(current - cost);

            const results = [];
            for (let i = 0; i < pullCount; i++) {
                const randomIndex = Math.floor(Math.random() * items.length);
                results.push(items[randomIndex]);
            }

            openPopup(results);
            return results;
        } else {
            alert("Not enough Pyroxene!");
            return null;
        }
    }

    document.querySelectorAll(".bigbutton").forEach(button => {
        button.addEventListener("click", function () {
            pullGacha(1);
        });
    });

    const tenPullButton = document.getElementById("tenPullBtn");
    if (tenPullButton) {
        tenPullButton.addEventListener("click", function () {
            pullGacha(10);
        });
    }

    const closeBtn = document.querySelector(".close-btn");
    if (closeBtn) {
        closeBtn.addEventListener("click", closePopup);
    }
});

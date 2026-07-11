// ======================================
// OM SAI AGRO COMPANY
// script.js
// ======================================

// Navbar Shadow on Scroll
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";

    } else {

        navbar.style.boxShadow = "none";

    }

});

// ============================
// Scroll Animation
// ============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

const hiddenElements = document.querySelectorAll(".service-card,.hero,.cta");

hiddenElements.forEach((el) => observer.observe(el));

// ============================
// Back To Top Button
// ============================

const btn = document.createElement("button");

btn.innerHTML = "↑";

btn.id = "topBtn";

document.body.appendChild(btn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        btn.style.display = "block";

    }

    else {

        btn.style.display = "none";

    }

});

btn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


//sending message

function sendWhatsApp(){

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let mobile = document.getElementById("mobile").value;

    let message = document.getElementById("message").value;

    let phone = "919503613592";   // Replace with your WhatsApp number

    let text =
`Hello OM Sai Adhunik Farmer Producer Comapany,

Name : ${name}

Email : ${email}

Mobile : ${mobile}

Message :

${message}

Thank you.`;

    let url =
"https://wa.me/" + phone +
"?text=" + encodeURIComponent(text);

    window.open(url,"_blank");

}
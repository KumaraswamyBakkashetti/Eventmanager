let homeanchor = document.getElementById("homeanchor");
let aboutusanchor = document.getElementById("Aboutusanchor");
let contactusAnchor = document.getElementById("contactusAnchor");
let servicesAnchor = document.getElementById("servicesAnchor");

let homePage = document.getElementById("homePage");
let aboutUsPage = document.getElementById("aboutPage");
let contactusPage = document.getElementById("contactUsPage");
let servicesPage = document.getElementById("servicesPage");

homeanchor.addEventListener("click", () => {
    homePage.classList.remove("d-none");
    aboutUsPage.classList.add("d-none");
    contactusPage.classList.add("d-none");
    servicesPage.classList.add("d-none");
});
aboutusanchor.addEventListener("click", () => {
    homePage.classList.add("d-none");
    aboutUsPage.classList.remove("d-none");
    contactusPage.classList.add("d-none");
    servicesPage.classList.add("d-none");
});
contactusAnchor.addEventListener("click", () => {
    homePage.classList.add("d-none");
    aboutUsPage.classList.add("d-none");
    contactusPage.classList.remove("d-none");
    servicesPage.classList.add("d-none");
});
servicesAnchor.addEventListener("click", () => {
    homePage.classList.add("d-none");
    aboutUsPage.classList.add("d-none");
    contactusPage.classList.add("d-none");
    servicesPage.classList.remove("d-none");
});

// Form validation

    /*try {
        const response = await fetch("http://localhost:5000/api/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const result = await response.json();
            alert("Event created successfully!");
            console.log(result);
        } else {
            const error = await response.json();
            alert("Failed to create event: " + error.error);
        }
    } catch (err) {
        alert("Error: " + err.message);
    }
});*/
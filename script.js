function showProjectMessage(projectName) {
    alert(projectName + " project will be added soon.");
}

const contactForm = document.getElementById("contactForm");
const formResult = document.getElementById("formResult");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    formResult.textContent =
        "Thank you, " + name + "! Your message was received.";

    contactForm.reset();
});
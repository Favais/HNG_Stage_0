document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) errors.name = "Name is required.";
    if (!emailPattern.test(email)) errors.email = "Enter a valid email address.";
    if (!subject) errors.subject = "Subject is required.";
    if (message.length < 10) errors.message = "Message must be at least 10 characters.";

    // Clear old errors
    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    if (Object.keys(errors).length > 0) {
        for (const key in errors) {
            document.getElementById(`error-${key}`).textContent = errors[key];
        }
        document.getElementById("success").hidden = true;
    } else {
        document.getElementById("success").hidden = false;
        this.reset();
    }
});
const currentPage = window.location.pathname.split("/").pop(); // e.g., 'contact.html'
const timeElement = document.getElementById("user-time");
const updateTime = () => {
    timeElement.textContent = Date.now();
}

const links = document.querySelectorAll(".links");

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});




updateTime();
setInterval(updateTime, 100);

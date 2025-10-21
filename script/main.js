const currentPage = window.location.pathname.split("/").pop(); // e.g., 'contact.html'
const timeElement = document.getElementById("user-time");
const updateTime = () => {
    timeElement.textContent = Date.now();
}

const links = document.querySelectorAll(".links");

links.forEach(link => {
    const href = link.getAttribute("href");
    // Remove .html from href for comparison
    const cleanHref = href.replace('.html', '');
    // Remove .html from current page for comparison
    const cleanCurrentPage = currentPage.replace('.html', '');
    console.log(cleanCurrentPage, cleanHref);

    if (cleanHref === cleanCurrentPage || (cleanCurrentPage === '' && cleanHref === '')) {
        link.classList.add("active");
    }
});




updateTime();
setInterval(updateTime, 100);

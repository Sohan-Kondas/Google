const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter") {
        search();
    }
});

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input + "&rlz=1C1UEAD_enIN1084IN1084&oq=" + input + "&gs_lcrp=EgZjaHJvbWUqDQgAEAAY4wIYsQMYgAQyDQgAEAAY4wIYsQMYgAQyCggBEC4YsQMYgAQyDQgCEC4YgwEYsQMYgAQyCggDEC4YsQMYgAQyCggEEAAYsQMYgAQyBwgFEAAYgAQyDQgGEC4YgwEYsQMYgAQyCggHEAAYsQMYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQgyODMxajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
}
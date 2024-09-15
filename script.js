document.body.addEventListener("click", (e) => {
    console.log(e.target)
    const clickedElement = event.target;
    imgs = document.querySelectorAll(".img");

    // if clicked outside image close it
    if (!clickedElement.classList.contains("img")) {
        imgs.forEach((img) => img.classList.remove("open"));
        return;
    }

    // if image is previously opened close it
    if (clickedElement.classList.contains("open")) {
        clickedElement.classList.remove("open");
        return;
    }

    imgs.forEach((img) => img.classList.remove("open"));

    clickedElement.classList.add("open");

})
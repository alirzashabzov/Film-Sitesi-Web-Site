const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");


arrows.forEach((arrow, i) => {
const widthRatio = Math.floor(window.innerWidth / 300);

    let clickCounter = 0;
    let imageItem = movieLists[i].querySelectorAll("img").length;
    arrow.addEventListener("click", function () {
        clickCounter++;
        if (imageItem - (4 + clickCounter) + (4 - widthRatio) >= 0) {

            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value - 300}px)`

        } else {
            movieLists[i].style.transform = "translateX(0)"
           clickCounter = 0;
        }
    });
});



















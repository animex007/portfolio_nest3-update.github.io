 // Testim Script
 function playSlide(slide) {
    for (var k = 0; k < testimDots.length; k++) {
        testimContent[k].classList.remove("active");
        testimContent[k].classList.remove("inactive");
        testimDots[k].classList.remove("active");
    }
    if (slide < 0) {
        slide = currentSlide = testimContent.length - 1;
    }
    if (slide > testimContent.length - 1) {
        slide = currentSlide = 0;
    }
    if (currentActive != currentSlide) {
        testimContent[currentActive].classList.add("inactive");
    }
    testimContent[slide].classList.add("active");
    testimDots[slide].classList.add("active");

    currentActive = currentSlide;

    clearTimeout(testimTimer);
    testimTimer = setTimeout(function () {
        playSlide(currentSlide += 1);
    }, testimSpeed)
}

testimleftArrow.addEventListener("click", function () {
    playSlide(currentSlide -= 1);
})
testimRightArrow.addEventListener("click", function () {
    playSlide(currentSlide += 1);
})

for (var l = 0; l < testimDots.length; l++) {
    testimDots[l].addEventListener("click", function () {
        playSlide(currentSlide = testimDots.indexOf(this));
    })
}
playSlide(currentSlide);

}
//ENDS HERE



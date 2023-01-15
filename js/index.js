
function viewMenu () {
    $("#navbar").toggleClass("show");
}

let count = 0;
showSlides();
function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    $('.mySlides').css('display','none');
    count++;
    if (count > slides.length) { count = 1 }
    slides[count - 1].style.display = "block";
    setTimeout(showSlides, 2300);
};
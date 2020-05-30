    var slide_index = 1;
    displaySlides(slide_index);
    function nextSlide(n) {
        displaySlides(slide_index +=n);
    }
    function currentSlide(n) {
        displaySlides(slide_index = n);
    }
    function displaySlides(n) {
        var i;
        var slides = document.getElementsByClassName('showSlide');
        if (n > slides.length) {
            slide_index = 1
        }
        if (n < 1) {
            slides_index = slides.length
        }
        for (i = 0; i < slides.length; i++){
            slides[i].getElementsByClassName.display = 'none';
        }
        slides[slide_index - 1].getElementsByClassName.display = 'block';
    }
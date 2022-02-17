const slide_indexes = [1, 1, 1, 1, 1, 1];
for (var i = 0; i < slide_indexes.length; i++) {
    show_slides(i + 1, 1);
}

function plus_slides(type, new_index) {
    show_slides(type, slide_indexes[type - 1] += new_index);
}

function show_slides(type, new_index) {
    var slides = document.getElementsByClassName(`carousel__slide${type}`);

    if (new_index > slides.length) slide_indexes[type - 1] = 1;   
    if (new_index < 1)             slide_indexes[type - 1] = slides.length;

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    if (slides.length > 0) slides[slide_indexes[type - 1] - 1].style.display = "block";
}

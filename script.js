let sliderImages = [];
let i = 0;

console.log(slider);

// list of images
sliderImages[0] = 'images/image001.jpg';
sliderImages[1] = 'images/image002.jpg';
sliderImages[2] = 'images/image003.jpg';

console.log(sliderImages.length);

function changeImage() {

    let slider = document.getElementById("slider");
    let timer = 500;
    
    slider.src = sliderImages[i];
    
    if ( i < sliderImages.length - 1 ) { i++; } 
    else { i = 0; };

    setTimeout("changeImage()" , timer);

};

window.onload = changeImage;
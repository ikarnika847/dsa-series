
let images = [
    "Image 1",
    "Image 2",
    "Image 3",
    "Image 4"
];

let currentIndex = 0;

function showImage() {
    console.log("Current Image:", images[currentIndex]);
}

function nextImage() {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage();
}

function previousImage() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage();
}

showImage();
nextImage();
nextImage();
previousImage();

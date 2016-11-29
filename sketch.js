var img;

function setup() {
    createCanvas(1024, 768);
    img = loadImage("assets/sky.jpg");
}

function draw() {
    // Displays the image as its actual size at points (0, 0)
    image(img, mouseX, mouseY, img.width/16, img.height/16);
}
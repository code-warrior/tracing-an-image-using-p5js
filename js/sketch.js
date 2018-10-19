const IMAGE_WIDTH = 768;
const IMAGE_HEIGHT = 576;
const EYE_COLOR = `#411a1f`;
const EYE_DIAMETER = 27;
const NOSE_COLOR = `#c1857a`;

function drawEyes() {
    /* Cancel the default black border around the ellipse. */
    noStroke();

    /* Set a color to fill the ellipse. */
    fill(EYE_COLOR);

    /* Draw the left eye. */
    ellipse(305, 277, EYE_DIAMETER, EYE_DIAMETER);

    /* Draw the right eye. */
    ellipse(390, 287, EYE_DIAMETER, EYE_DIAMETER);
}

function setup() {
    /* Set the dimensions of the canvas to the width and height of the image. */
    createCanvas(IMAGE_WIDTH, IMAGE_HEIGHT);
}

function draw() {
    drawEyes();
}

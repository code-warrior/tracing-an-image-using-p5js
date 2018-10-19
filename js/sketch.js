const IMAGE_WIDTH = 768;
const IMAGE_HEIGHT = 576;
const EYE_COLOR = `#411a1f`;
const EYE_DIAMETER = 27;
const NOSE_COLOR = `#c1857a`;
const NOSE_DIAMETER = 30;
const WHISKER_COLOR = `#957968`;
const EAR_COLOR = `#7b4c44`;
const EAR_WIDTH = 52;
const EAR_HEIGHT = 78;

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

function drawNose() {
    /* Cancel the default black border around the ellipse. */
    noStroke();

    /* Set a color to fill the ellipse. */
    fill(NOSE_COLOR);

    /* Draw the nose. */
    ellipse(310, 365, NOSE_DIAMETER, NOSE_DIAMETER);
}

function drawWhiskers() {
    stroke(WHISKER_COLOR);

    /* Draw the left set of whiskers. */
    line(280, 336, 200, 311);
    line(290, 349, 215, 356);
    line(280, 359, 200, 375);

    /* Draw the right set of whiskers. */
    line(366, 336, 481, 311);
    line(356, 349, 445, 356);
    line(346, 359, 423, 375);
}

function setup() {
    /* Set the dimensions of the canvas to the width and height of the image. */
    createCanvas(IMAGE_WIDTH, IMAGE_HEIGHT);
}

function draw() {
    drawEyes();
    drawNose();
    drawWhiskers();
}

const BACKGROUND_COLOR = `#eee`;
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
    ellipse(305, 277, EYE_DIAMETER);

    /* Draw the right eye. */
    ellipse(390, 287, EYE_DIAMETER);
}

function drawNose() {
    /* Cancel the default black border around the ellipse. */
    noStroke();

    /* Set a color to fill the ellipse. */
    fill(NOSE_COLOR);

    /* Draw the nose. */
    ellipse(310, 365, NOSE_DIAMETER);
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

function drawLeftEar() {
    /* Cancel the default black border around the shape created by vertex. */
    noStroke();

    /* Set a color for the vertex shape.*/
    fill(EAR_COLOR);

    /* Begin the shape that will be created by the three vertices. */
    beginShape();
    vertex(305, 203);
    vertex(328, 225);
    vertex(300,245);

    /* End the shape, which is required to complete the shape by the three vertices. */
    endShape();
}

function drawRightEar() {
    /* Cancel the default black border around the shape created by vertex. */
    noStroke();

    /* Over-ride the default RADIANS with DEGREES, as it makes more sense for this example. */
    angleMode(DEGREES);

    /* Fill the color of the arc with the color set for the ears. */
    fill(EAR_COLOR);

    /*
    1. Set the midpoint of the arc to 455, 245.
    2. Set the arc’s width to EAR_WIDTH.
    3. Set the arc’s height to EAR_HEIGHT.
    4. Fill the top half of the arc (180).
    5. Fill the bottom half of the arc (100).
     */
    arc(455, 245, EAR_WIDTH, EAR_HEIGHT, 180, 100);
}

function drawEars() {
    drawLeftEar();
    drawRightEar();
}

function setup() {
    /* Set the dimensions of the canvas to the width and height of the image. */
    createCanvas(IMAGE_WIDTH, IMAGE_HEIGHT);

    /* Set the background color of the canvas. */
    background(BACKGROUND_COLOR);

    /* Cancel the loop on the draw() function. This creates a cleaner drawing. */
    noLoop();
}

function draw() {
    drawEyes();
    drawNose();
    drawWhiskers();
    drawEars();
}

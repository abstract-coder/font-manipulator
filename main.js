var x = 0;
var y = 0;
word = "apple";
text_size = 40;

function preload() {

}

function setup() {
    canvas = createCanvas(500, 300);
    canvas.position(500, 300);
    video = createCapture(VIDEO);
    video.size(500, 300);
    video.position(0, 300);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background("lightblue");
    textSize(text_size);
    fill("white");
    text(word, x, y);
}

function modelLoaded() {
    console.log("Model is loaded.");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        x = results[0].pose.nose.x;
        y = results[0].pose.nose.y;
        left_x = results[0].pose.leftWrist.x;
        right_x = results[0].pose.rightWrist.x;
        text_size = floor(left_x - right_x) - 100;
        document.getElementById("size_text").innerHTML = "Font size of text: " + text_size;
        document.getElementById("position_text").innerHTML = "Position of text: ( " + floor(x) + "," + floor(y) + " )";
    }
}

function change_word() {
    word = document.getElementById("input_text").value;
    document.getElementById("input_text").value = "";
    console.log(word);
}
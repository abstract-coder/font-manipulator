function preload(){

}

function setup(){
canvas = createCanvas(500, 300);
canvas.position(500, 300);
canvas.background("lightblue");
video = createCapture(VIDEO);
video.size(500, 300);
video.position(0, 300);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw(){

}

function modelLoaded(){
    console.log("Model is loaded.");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}
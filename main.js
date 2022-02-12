leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;
Running = "Running_in_the_90s.mp3";
Gas = "Gas_Gas_Gas.mp3";
function preload(){

loadSound(Gas);
loadSound(Running);
}
function setup(){
canvas = createCanvas(800, 600);
canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}

function draw(){
    image(video, 0, -400, 1000, 900);
}

function modelLoaded(){
    console.log("PoseNet initialized!");
}

function gotPoses(){
    if(results[0].length > 0){
        leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
        rightwristx = results[0].pose.rightWrist.x;
        rightwristy = results[0].pose.rightWrist.y;
    }
}
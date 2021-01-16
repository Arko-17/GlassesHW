LefteyeX=0;
LefteyeY=0;
RighteyeY=0;
RighteyeX=0;
function preload(){
    glasses=loadImage("https://i.postimg.cc/mZjwHD0s/sunglasses.png");
}
function setup(){
canvas=createCanvas(300, 300);
canvas.center();
video=createCapture(VIDEO);
video.size(300, 300);
video.hide();
posenet=ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotposes);
filter(GRAY);
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(glasses,LefteyeX-70,LefteyeY-50,RighteyeX-70,RighteyeY-50,1,1);
}
function take_snapshot(){
    save("myimg_2.png");
}
function modelLoaded(){
    console.log("PoseNet is initialised");
}
function gotposes(result){
 if(result.length > 0)
 {
    console.log(result);
console.log("lefteye x="+result[0].pose.leftEye.x);
console.log("lefteye y="+result[0].pose.leftEye.y);
console.log("righteye x="+result[0].pose.rightEye.x);
console.log("righteye y="+result[0].pose.rightEye.y);
LefteyeX=result[0].pose.leftEye.x;
LefteyeY=result[0].pose.leftEye.y;
RighteyeX=result[0].pose.rightEye.x;
RighteyeY=result[0].pose.rightEye.y;
}
 }

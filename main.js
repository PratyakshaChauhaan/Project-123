function setup()
{
    video=createCapture(VIDEO);
    video.size(550, 500);

    canvas=createCanvas(550,550);
    canvas.position(500,150);

    poseNet=ml5.poseNet(video, modelloaded);
    poseNet.on(pose,gotPoses);
}

function modelloaded()
{
  console.log("poseNet is initialized");
}
    
function gotPoses(results)
{
    if (result.length>0) 
    {
        console.log(results);
    }
}

function draw()
{
    background("#808080");
}
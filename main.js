function preload()
{

}

function setup()
{
    canvas = createCanvas(300 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
}

function modelLoaded()
{
    console.log('PoseNet is Initialised');
}

function draw()
{
image(video , 0 , 0 , 300 , 300);
}

function take_snapshot()
{
    save('myFilterImage.png');
}

function gotPoses(result)
{
    if(result.length > 0)
    {
        console.log(results);
        console.log("moustache x =" + result[0].pose.moustache.x);
        console.log("moustache y =" + result[0].pose.moustache.y);
    }
}




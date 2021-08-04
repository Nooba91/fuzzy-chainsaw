function setup(){
    canvas = createCanvas(300, 300);
    canvas.position(500, 300);
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aiMdu7VzF/model.json', ModelLoaded);
}
function ModelLoaded(){
    console.log("Model Loaded");
}
function draw(){
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_object").innerHTML = results[0].label;
    }
}
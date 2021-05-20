Webcam.set ({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 100
});

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function(data_url) {
        document.getElementById("result").innerHTML = '<img id= "captured_image" src= "'+data_url+'"/>';
    });
}


console.log("ml5 version : ", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/C6Rq24CY0/model.json", modelLoaded);


function modelLoaded() {
    console.log("Model Loaded!");
}


function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, getResult);
}


function getResult() {
    
}
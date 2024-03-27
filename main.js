function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/yHfQQiwKe/model.json')}
function modelready() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        r= Math.floor(Math.random() * 255) + 1;
        g= Math.floor(Math.random() * 255) + 1;
        b= Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML='I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML='Detected Voice of - '+
        (results[0].confidence*100).toFixed(2)+"%";

        document.getElementById("result_label").style.color = "rgb("
        +r+","+g+","+b+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +r+","+g+","+b+")";

        img1 = document.getElementById('puppy');
        img2 = document.getElementById('cat');
        img3 = document.getElementById('lion');
        img4 = document.getElementById('cow');

        if (results[0].label == "cat") {
            img1.src = "puppy1image.jpg";
            img2.src = "cat pic.gif";
            img3.src = "lion pic.png";
            img4.src = "Screenshot 2024-03-13 183604.png";
        }

          else if(results[0].label == "cow") {
            img1.src = "puppy1image.jpg";
            img2.src = "cat pic.png";
            img3.src = "lion pic.png";
            img4.src = "cow gif.gif";
        }

        else if(results[0].label == "dog") {
            img1.src = "puppy1.gif";
            img2.src = "cat pic.png";
            img3.src = "lion pic.png";
            img4.src = "Screenshot 2024-03-13 183604.png";
        }

        else if(resulsts[0].label == "lion"){
            img1.src = "puppy1image.jpg";
            img2.src = "cat pic.png";
            img3.src = "lion pic.gif";
            img4.src = "Screenshot 2024-03-13 183604.png";
        }
        
        else{
            img1.src = "puppy1image.jpg";
            img2.src = "cat pic.png";
            img3.src = "lion pic.png";
            img4.src = "Screenshot 2024-03-13 183604.png";
        }
    }
}


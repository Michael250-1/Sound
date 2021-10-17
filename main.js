function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true,video:false});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/_Kq4SW8rv/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
dog=0;
cat=0;
bird=0;
function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else {
        console.log(results);
        r=Math.floor(Math.random()* 255) + 1;
        g=Math.floor(Math.random()* 255) + 1;
        b=Math.floor(Math.random()* 255) + 1;

        document.getElementById("resultlabel").innerHTML="I can hear - " + results[0].label;
        document.getElementById("resultconfidence").innerHTML=" Accuracy - " + (results[0].confidence*100).toFixed(2)+"%";

        document.getElementById("resultlabel").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("resultconfidence").style.color="rgb("+r+","+g+","+b+")";

        img1=document.getElementById("animal");
        if (results[0].label=="birds chirping"){
          img1.src="bird1.jfif";
          bird=bird+1;
        }
        else if (results[0].label=="cat meowing"){
            img1.src='cat1.jfif';
            
        }
        else if (results[0].label=="dog barking"){
            img1.src='download.jfif';
        }
       
        
    }
    
}
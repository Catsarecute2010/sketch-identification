function preload()
{
    classifier=ml5.imageClassifier('DoodleNet')
}

function setup()
{
    canvas=createCanvas(300,300)
    canvas.position(500,170)
    background("white")
    canvas.mouseReleased(classifyCanvas)
    symth=window.speechSynthesis
}

function draw()
{
    strokeWeight(8)
    stroke(0)

    if(mouseIsPressed)
    {
        line(pmouseX,pmouseY,mouseX,mouseY)
    }
}

function classifyCanvas()
{
    classifier.classify(canvas,gotResult)
}

function gotResult(result)
{
    if(result.length)
    {
        document.getElementById("label").innerHTML="label"+result[0].label
        document.getElementsById("confidence").innerHTML="confidence"+Math.round(result[0].confidence*100)+"%";
        utterThis=new SpeechSynthesisUtterance(result[0].label)
        synth.speek(utterThis)

    
    }
}


function clearcanvas()
{
    background("white")
}
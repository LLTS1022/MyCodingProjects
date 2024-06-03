let speech = new SpeechSynthesisUtterance();

document.querySelector("button").addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
    
});

document.getElementById("stopButton").addEventListener("click", () => {
    window.speechSynthesis.cancel();
})
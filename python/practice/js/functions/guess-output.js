function guess_output() {
    
    // first input
    a = output1.value;
    if (a == "7") {
        output1.value = a;
        outputcheck1.innerHTML = "<text class=quiz-correct>" + "✔" + "</text>";
    } else {
        output1.value = a;
        outputcheck1.innerHTML = "<text class=quiz-wrong>" + "✖" + "</text>";
    }
    
}

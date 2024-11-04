document.getElementById("solveButton").addEventListener("click", function() {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Die Nullstellen sind: x = 2, -2.";
});

document.getElementById("checkButton").addEventListener("click", function() {
    const userInput = document.getElementById("userInput").value.split(",").map(num => num.trim());
    const correctAnswers = ["3", "-3"]; 
    
    const isCorrect = userInput.every(answer => correctAnswers.includes(answer));
    const checkResultDiv = document.getElementById("checkResult");

    if (isCorrect) {
        checkResultDiv.innerHTML = "Richtig! Gut gemacht!";
    } else {
        checkResultDiv.innerHTML = "Leider falsch. Versuch es noch einmal!";
    }
});


const steps = [
    "Schritt 1: Schreibe die Ausgangsgleichung auf: x<sup>4</sup> - 5x<sup>2</sup> + 4 = 0.",
    "Schritt 2: Formuliere die Substitution : u = x<sup>2</sup>.",
    "Schritt 3: Ersetze in der Gleichung: u<sup>2</sup> - 5u + 4 = 0.",
    "Schritt 4: Löse die quadratische Gleichung QUADRATISCHE ERGÄNZUNG",
    "Schritt 5: Erhalte die Werte für u: u = 4 und u = 1.",
    "Schritt 6: Rücksubstitution: x<sup>2</sup> = 4 und x<sup>2</sup> = 1.",
    "Schritt 7: Die Nullstellen sind x = 2, -2."
];

let currentStep = 0;

document.getElementById("nextButton").addEventListener("click", function() {
    if (currentStep < steps.length) {
        const previousStepsDiv = document.getElementById("previousSteps");
        const stepDiv = document.createElement("div");
        stepDiv.className = "previous-step";
        stepDiv.innerHTML = steps[currentStep];
        previousStepsDiv.appendChild(stepDiv);
        
        currentStep++;
        
        if (currentStep < steps.length) {
            document.getElementById("stepContent").innerHTML = steps[currentStep];
        }
        
        if (currentStep === steps.length) {
            document.getElementById("nextButton").style.display = "none"; 
            document.getElementById("backButton").style.display = "inline-block"; 
            document.getElementById("stepContent").innerHTML = "Das waren alle Schritte!";
        }
    }
});


function startSteps() {
    document.getElementById("concepts").style.display = "none";
    document.getElementById("exercise").style.display = "none";
    document.getElementById("steps").style.display = "block";
    currentStep = 0;
    document.getElementById("stepContent").innerHTML = steps[currentStep];
    document.getElementById("backButton").style.display = "none"; 
}


document.getElementById("stepButton").addEventListener("click", startSteps);


document.getElementById("backButton").addEventListener("click", function() {
    document.getElementById("concepts").style.display = "block";
    document.getElementById("exercise").style.display = "block";
    document.getElementById("steps").style.display = "none";
    document.getElementById("previousSteps").innerHTML = ""; 
    document.getElementById("result").innerHTML = ""; 
    document.getElementById("checkResult").innerHTML = ""; 
    document.getElementById("userInput").value = ""; 
});

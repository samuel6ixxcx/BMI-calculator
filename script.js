let height, weight, bmi;
let name;

document.getElementById("btn").onclick = function () {
    name = document.getElementById("name").value;
    height = document.getElementById("height").value;
    height = Number(height);
    weight = document.getElementById("weight").value;
    weight = Number(weight);
    bmi = weight / (height/100) ** 2;
    console.log(bmi);

    if (bmi < 18.5) {
        document.getElementById("result").innerHTML = "Hey " + name + ", your BMI is " + bmi.toFixed(2) + ", but a little underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.6) {
        document.getElementById("result").innerHTML = "Hey " + name + ", your BMI is " + bmi.toFixed(2) + ", perfect!";
    } else if (bmi >= 25 && bmi <= 29.9) {
        document.getElementById("result").innerHTML = "Hey " + name + ", your BMI is " + bmi.toFixed(2) + ", but overweight.";
    } else {
        document.getElementById("result").innerHTML = "Hey " + name + "! Your BMI is " + bmi.toFixed(2) + ", and you are obese.";
    }
};

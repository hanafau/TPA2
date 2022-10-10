function BMI() {
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;

  var bmi = weight / (((height / 100) * height) / 100);
  var bmio = bmi.toFixed(2);

  if (bmio < 18.6) {
    document.getElementById("output").innerHTML = "Underweight: " + bmio;
  } else if (bmi >= 18.6 && bmi < 24.9) {
    document.getElementById("output").innerHTML = "Normal Weight: " + bmio;
  } else if (bmi > 25 && bmi < 29.9) {
    document.getElementById("output").innerHTML = "Overweight: " + bmio;
  } else {
    document.getElementById("output").innerHTML = "Obesity";
  }
}

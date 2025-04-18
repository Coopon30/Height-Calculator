document.getElementById("heightForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const motherHeight = parseFloat(document.getElementById("motherHeight").value);
  const fatherHeight = parseFloat(document.getElementById("fatherHeight").value);
  const gender = document.getElementById("gender").value;
  const sleepHours = parseFloat(document.getElementById("sleepHours").value);
  const workouts = parseInt(document.getElementById("workouts").value);

  let predictedHeight;

  if (gender === "boy") {
    predictedHeight = (motherHeight + fatherHeight + 5) / 2;
  } else {
    predictedHeight = (motherHeight + fatherHeight - 5) / 2;
  }

  // Environmental bonuses
  if (sleepHours >= 8) {
    predictedHeight += 0.5;
  }

  if (workouts >= 3) {
    predictedHeight += 0.5;
  }

  // Convert inches to feet + inches
  const feet = Math.floor(predictedHeight / 12);
  const inches = Math.round(predictedHeight % 12);

  document.getElementById("result").innerHTML =
    `Estimated adult height: <strong>${predictedHeight.toFixed(1)} inches</strong><br>
     That’s about <strong>${feet}' ${inches}"</strong>`;
});

document.getElementById("heightForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const motherHeight = parseFloat(document.getElementById("motherHeight").value);
  const fatherHeight = parseFloat(document.getElementById("fatherHeight").value);
  const gender = document.getElementById("gender").value;

  let predictedHeight;

  if (gender === "boy") {
    predictedHeight = (motherHeight + fatherHeight + 5) / 2;
  } else {
    predictedHeight = (motherHeight + fatherHeight - 5) / 2;
  }

  document.getElementById("result").textContent =
    `Estimated adult height: ${predictedHeight.toFixed(1)} inches`;
});

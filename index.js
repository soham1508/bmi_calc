const body = document.querySelector('.container');
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18) {
      body.style.background = '#FFD35A';
      results.innerHTML = `You are under weight ${bmi}`;
    } else if (bmi > 25) {
      body.style.background = '#FF6969';
      results.innerHTML = `you are an obese ${bmi}`;
    } else {
      body.style.background = '#55AD9B';
      results.innerHTML = `you are perfect ${bmi}`;
    }
  }
});

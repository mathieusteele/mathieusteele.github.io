function calculateWindchill(temperature, windSpeed) {
  // temperature in degrees Fahrenheit, windSpeed in miles per hour
  if (temperature > 50.0 || windSpeed < 3.0) {
    return "N/A";
  }

  let speedFactor = windSpeed ** 0.16;

  let stepOne = 0.6215 * temperature;

  let stepTwo = 35.75 * speedFactor;

  let stepThree = 0.4275 * temperature * speedFactor;

  return 35.74 + stepOne - stepTwo + stepThree;
}

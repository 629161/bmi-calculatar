function convertTemperature(temperature, unit) {   
    if (!Number.isFinite(temperature) || unit !== "C" && unit !== "F") {
      return "Invalid input. Please provide a valid temperature and temperature unit.";
    }
    let convertedTemperature;
    if (unit === "C") {
      convertedTemperature = temperature * 9 / 5 + 32;
    } else if (unit === "F") {
      convertedTemperature = (temperature - 32) * 5 / 9;
    }
    convertedTemperature = convertedTemperature.toFixed(2);
    return `${convertedTemperature}°${unit}`;
  }
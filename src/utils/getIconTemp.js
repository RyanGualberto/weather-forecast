export function getIcon(condition) {
  switch (condition) {
    case "storm":
      return "thunderstorm";
    case "clear_day":
      return "sunny";
    case "clear_night":
      return "moon";
    case "rain":
      return "rainy";
    case "snow":
      return "snow";
    case "cloud":
      return "cloud";
    case "cloudly_day":
      return "partly-sunny";
    case "cloudly_night":
      return "cloudy-night";
    default:
      return null;
  }
}

import images from "./images";

export default {
  Thunderstorm: {
    iconName: "zap",
    message: "It Could Get Noisy",
    backgroundImage: "#000000",
  },
  Drizzle: {
    iconName: "cloud-rain",
    message: "It Might Rain a Little",
    backgroundImage: "#36454F",
  },
  Rain: {
    iconName: "umbrella",
    message: "You Will Need an Umbrella",
    backgroundImage: images.currentWeatherBackground.rain,
  },
  Snow: {
    iconName: "cloud-snow",
    message: "Let's Build a Snowman",
    backgroundImage: images.currentWeatherBackground.snow,
  },
  Clear: {
    iconName: "sun",
    message: "It's Perfect T-shirt Weather",
    backgroundImage: images.currentWeatherBackground.clear,
  },
  Clouds: {
    iconName: "cloud",
    message: "You Could Live In the Clouds",
    backgroundImage: images.currentWeatherBackground.clouds,
  },
  Haze: {
    iconName: "wind",
    message: "It Might Be a Bit Damp",
    backgroundImage: "#58586E",
  },
  Mist: {
    iconName: "align-justify",
    message: "It Might Be Hard To See",
    backgroundImage: images.currentWeatherBackground.mist,
  },
};

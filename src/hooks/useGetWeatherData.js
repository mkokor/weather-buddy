import { useState, useEffect } from "react";
import * as Location from "expo-location";
import environment from "../config/environment";
import axios from "axios";

export const useGetWeatherData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherData = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${environment.openWeatherApi.key}`
      );
      setWeatherData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied.");
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
      await getWeatherData();
    })();
  }, [latitude, longitude]);

  return [isLoading, error, weatherData];
};

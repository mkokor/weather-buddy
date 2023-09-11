import { useState, useEffect } from "react";
import * as Location from "expo-location";
import environment from "../config/environment";
import axios from "axios";
import { errorTypes } from "../constants/index";

export const useGetWeather = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState(null);

  const getWeatherData = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${environment.openWeatherApi.key}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      setError(errorTypes.InternalError);
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
        setError(errorTypes.LocationAccessDeniedError);
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
      getWeatherData();
    })();
  }, [latitude, longitude]);

  const refetch = () => {
    //setIsLoading(true);
    //getWeatherData();
    console.log("Refetching the weather data...");
  };

  return [isLoading, error, weather, refetch];
};

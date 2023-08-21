import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CurrentWeather, UpcomingWeather, City } from "./src/screens/index";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Current" component={CurrentWeather} />
        <Tab.Screen name="Upcoming" component={UpcomingWeather} />
        <Tab.Screen name="City" component={City} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

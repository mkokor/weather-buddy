import styles from "./tabs.style";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CurrentWeather, UpcomingWeather, City } from "../../screens/index";
import Icon from "../icon/Icon";

const Tab = createBottomTabNavigator();

const Tabs = ({ weather }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: styles.tabBar,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Current"
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="droplet"
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      >
        {() => (
          <CurrentWeather
            weatherData={weather.list[0]}
            location={weather.city}
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Upcoming"
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="clock" size={25} color={focused ? "tomato" : "black"} />
          ),
        }}
      >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name="City"
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="home" size={25} color={focused ? "tomato" : "black"} />
          ),
        }}
      >
        {() => <City cityData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;

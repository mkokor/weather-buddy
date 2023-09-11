import styles from "./tabs.style";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CurrentWeather, UpcomingWeather, City } from "../../screens/index";
import Icon from "../icon/Icon";
import { ScrollView } from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = ({ weather }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: styles.tabBar,
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Current"
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="droplet" size={focused ? 40 : 25} color={"white"} />
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
            <Icon name="clock" size={focused ? 40 : 25} color={"white"} />
          ),
        }}
      >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name="City"
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="home" size={focused ? 40 : 25} color={"white"} />
          ),
        }}
      >
        {() => <City cityData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;

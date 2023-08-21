import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CurrentWeather, UpcomingWeather, City } from "../../screens/index";
import { BasicIcon } from "../index";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
      }}
    >
      <Tab.Screen
        name="Current"
        component={CurrentWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <BasicIcon
              iconType="droplet"
              iconSize={25}
              iconColor={focused ? "tomato" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Upcoming"
        component={UpcomingWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <BasicIcon
              iconType="clock"
              iconSize={25}
              iconColor={focused ? "tomato" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="City"
        component={City}
        options={{
          tabBarIcon: ({ focused }) => (
            <BasicIcon
              iconType="home"
              iconSize={25}
              iconColor={focused ? "tomato" : "black"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

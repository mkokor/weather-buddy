import styles from "./tabs.style";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CurrentWeather, UpcomingWeather, City } from "../../screens/index";
import Icon from "../icon/Icon";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: styles.tabBar,
        headerStyle: styles.header,
        headerTitle: styles.headerTitle,
      }}
    >
      <Tab.Screen
        name="Current"
        component={CurrentWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="droplet"
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Upcoming"
        component={UpcomingWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="clock" size={25} color={focused ? "tomato" : "black"} />
          ),
        }}
      />
      <Tab.Screen
        name="City"
        component={City}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="home" size={25} color={focused ? "tomato" : "black"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

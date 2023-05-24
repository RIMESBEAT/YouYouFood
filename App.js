import "react-native-url-polyfill/auto";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import DishDetails from "./src/components/DishDetails";
import CartScreen from "./src/screens/CartScreen";
import LoaderScreen from "./src/screens/LoaderScreen";
import MapScreen from "./src/screens/MapScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen
            name="DishDetails"
            component={DishDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{  presentation: 'modal' }}
          />
          <Stack.Screen
            name="Loader"
            component={LoaderScreen}
            options={{ headerShown: false}}
          />
          <Stack.Screen
            name="MapScreen"
            component={MapScreen}
            options={{ headerShown: false}}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}



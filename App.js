import Login from "./components/Login";
import { SignUp } from "./components/SignIn";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  ImageBackground,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./components/Dashboard";

const Stack = createNativeStackNavigator();

// function Root() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Home" component={Login} />
//       <Drawer.Screen name="Profile" component={Dashboard} />
//     </Drawer.Navigator>
//   );
// }

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  loginDash: {
    color: "red",
    width: 0,
    display: "none",
  },
});

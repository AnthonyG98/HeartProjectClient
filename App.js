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
import { UserProvider } from "./UserContext";

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  return (
    <UserProvider>
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
    </UserProvider>
  );
}
const styles = StyleSheet.create({
  loginDash: {
    color: "red",
    width: 0,
    display: "none",
  },
});

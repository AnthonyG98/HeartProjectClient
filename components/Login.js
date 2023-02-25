import React, { useContext, useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";
import { UserContext } from "../UserContext";

const Login = ({ navigation }) => {
  const [text, setText] = useState("");

  const message = useContext(UserContext);
  return (
    <View style={styles.loginContainer}>
      <ImageBackground
        source={require("../Images/loginBackground.jpg")}
        resizeMode="cover"
        style={styles.loginBackground}
      >
        <TextInput
          style={styles.loginInput}
          placeholder={"Username"}
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
        <TextInput
          style={styles.loginInput}
          placeholder={"Password"}
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() =>
            navigation.navigate("Dashboard", { name: "Dashboard" })
          }
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.signIn}>
          Are you a new user?{" "}
          <Text
            onPress={() => navigation.navigate("SignUp", { name: "SignUp" })}
          >
            <Text style={styles.signInLink}>Sign Up</Text>
          </Text>
        </Text>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  loginContainer: {
    flex: 2,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  loginInput: {
    width: "80%",
    height: 55,
    marginBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingLeft: 15,
  },
  loginBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtn: {
    justifyContent: "center",
    width: "80%",
    borderRadius: 100,
    backgroundColor: "#BA4A3F",
  },
  loginText: {
    fontSize: 30,
    textAlign: "center",
    color: "#fff",
    paddingTop: 5,
    paddingBottom: 5,
  },
  signIn: {
    color: "#fff",
    fontSize: 25,
    marginTop: 0,
    fontWeight: "500",
    padding: 0,
    textAlign: "center",
    alignItems: "center",
  },
  signInLink: {
    color: "#BA4A3F",
    fontSize: 25,
    fontWeight: "500",
  },
});

export default Login;

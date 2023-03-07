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
import axios from "axios";
import { UserContext } from "../UserContext";

const Login = ({ navigation }) => {
  const [text, setText] = useState("");
  let url = "http://localhost:3001";
  const { username, setUsername, password, setPassword } =
    useContext(UserContext);

  const onLogin = () => {
    const loginData = {
      username: username,
      password: password,
    };
    let headers = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    axios
      .post(`${url}/users/login`, loginData, headers)
      .then((response) => {
        if (response.data === "Success") {
          navigation.navigate("Dashboard", { name: "Dashboard" });
        }
      })
      .catch((error) => console.log(error));
  };
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
          onChangeText={(e) => setUsername(e)}
        />
        <TextInput
          style={styles.loginInput}
          placeholder={"Password"}
          onChangeText={(e) => setPassword(e)}
        />
        <TouchableOpacity style={styles.loginBtn} onPress={() => onLogin()}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.signIn}>
          Are you a new user?{" "}
          <Text
            onPress={() =>
              navigation.navigate("Dashboard", { name: "Dashboard" })
            }
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

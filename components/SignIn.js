import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";

export function SignUp({ navigation }) {
  let url = "http://localhost:3001";
  // const {
  //   fullName,
  //   setFullname,
  //   username,
  //   setUsername,
  //   password,
  //   setPassword,
  // } = useContext(UserContext);
  const [fullName, setFullname] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const onSignUp = () => {
    const signUpData = {
      fullname: fullName,
      username: username,
      password: password,
      profile_picture: "default_nlfrji",
    };
    let headers = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    axios
      .post(`${url}/users`, signUpData, headers)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  return (
    <View style={styles.loginContainer}>
      <ImageBackground
        source={require("../Images/loginBackground.jpg")}
        resizeMode="cover"
        style={styles.loginBackground}
      >
        <TextInput
          style={styles.loginInput}
          placeholder={"Name"}
          onChangeText={(e) => setFullname(e)}
        />
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
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() =>
            // navigation.navigate("Dashboard", { name: "Dashboard" })
            onSignUp()
          }
        >
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.signIn}>
          Already have an account?
          <Text onPress={() => navigation.navigate("Login", { name: "Login" })}>
            <Text style={styles.signInLink}> Login</Text>
          </Text>
        </Text>
      </ImageBackground>
    </View>
  );
}

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

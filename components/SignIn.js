import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";

export function SignUp({ navigation }) {
  const [text, setText] = useState("");

  return (
    <View style={styles.loginContainer}>
      {/* <ImageBackground
        source={require("../Images/loginBackground.jpg")}
        resizeMode="cover"
        style={styles.loginBackground}
      > */}
      <TextInput
        style={styles.loginInput}
        placeholder={"Name"}
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
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
        onPress={() => navigation.navigate("Dashboard", { name: "Dashboard" })}
      >
        {/* <Button
            title="Login"
            color={"#EB7167"}
            style={styles.loginBtn}
            onPress={() =>
              navigation.navigate("Dashboard", { name: "Dashboard" })
            }
          /> */}
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.signIn}>
        Already have an account?{" "}
        <Text onPress={() => navigation.navigate("Login", { name: "Login" })}>
          <Text style={styles.signInLink}>Login</Text>
        </Text>
      </Text>
      {/* </ImageBackground> */}
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

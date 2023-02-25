import React, { useContext, useState } from "react";
import { DashboardProps } from "../props/DashboardProps";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";

import {
  Text,
  TextInput,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Button,
  TouchableHighlightComponent,
  TouchableOpacity,
} from "react-native";

const homeIcon = require("../Images/home.png");
const searchIcon = require("../Images/search.png");

const tempImg = require("../Images/loginBackground.jpg");
const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.dashboardContainer}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          onPress={() => alert("hey")}
        />
      </View>
      <DashboardProps
        dashImg={tempImg}
        dashHead={"Anthony"}
        dashText={"Hello there"}
      />
      <FontAwesomeIcon icon={faUser} />
    </View>
  );
};
const styles = StyleSheet.create({
  dashboardContainer: {},
  searchInput: {
    borderWidth: 1,
    width: "80%",
  },
  searchContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "13%",
  },
});
export default Dashboard;

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
  TouchableOpacity,
} from "react-native";

const homeIcon = require("../Images/home.png");
const searchIcon = require("../Images/search.png");

const tempImg = require("../Images/loginBackground.jpg");
const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.dashboardContainer}>
      <View style={styles.searchContainer}>
        {/* <TextInput style={styles.searchInput} /> */}

        <Text style={styles.title}>TITLE</Text>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          onPress={() => alert("hey")}
          style={styles.searchIcon}
        />
      </View>
      <DashboardProps
        dashImg={tempImg}
        dashHead={"Anthony"}
        dashText={"Hello there"}
      />
      <View style={styles.dashNavContainer}>
        <TouchableOpacity>
          <FontAwesomeIcon size={30} icon={faUser} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesomeIcon size={30} icon={faUser} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesomeIcon size={30} icon={faUser} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {},
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
    justifyContent: "space-between",
    backgroundColor: "#007980",
    paddingTop: "15%",
    paddingBottom: 5,
  },
  title: {
    fontSize: 25,
    color: "#fff",
    marginLeft: 5,
    fontWeight: "bold",
  },
  searchIcon: {
    fontSize: 35,
    color: "#fff",
    marginRight: 5,
    backgroundColor: "#03A366",
    padding: 10,
    borderRadius: 90,
  },
  userContainer: {
    width: 75,
    height: 75,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#FF8597",
    display: "flex",
    alignItems: "center",
    borderRadius: 90,
    justifyContent: "center",
    position: "fixed",
    bottom: 3,
    right: 3,
  },
  userIcon: {
    color: "#FF8597",
  },
});
export default Dashboard;

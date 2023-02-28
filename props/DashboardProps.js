import { View, Text, StyleSheet, Image } from "react-native";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
export function DashboardProps(props) {
  return (
    <View style={styles.dashboardPropsContainer}>
      <Image style={styles.dashImg} source={props.dashImg} />
      <View style={styles.dashTextContainer}>
        <Text style={styles.dashHead}>{props.dashHead}</Text>
        <Text style={styles.dashText}>{props.dashText}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  dashboardPropsContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: "2%",
    paddingBottom: "2%",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  dashImg: {
    width: 60,
    height: 60,
    borderRadius: 90,
  },
  dashTextContainer: {
    marginLeft: 5,
  },
  dashText: {
    color: "#969696",
    fontSize: 15,
  },
  dashHead: {
    color: "#111",
    fontSize: 15,
    fontWeight: "bold",
  },
});

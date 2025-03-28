import React from "react";
import { Text, StyleSheet, View } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text
            onPress={() => alert('This is the "Home" screen.')}
            style={{ fontSize: 26, fontWeight: 'bold' }}>Home Screen</Text>
    </View>
);
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

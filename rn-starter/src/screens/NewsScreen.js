import React from "react";
import { Text, StyleSheet, View } from "react-native";

const NewsScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "News" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>News Screen</Text>
        </View>
    );
    };
    
    const styles = StyleSheet.create({
      text: {
        fontSize: 30,
      },
    });

  
  export default NewsScreen;
  
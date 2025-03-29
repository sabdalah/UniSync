import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ChatScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Chat" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Chat Screen</Text>
        </View>
    );
    };
    
    const styles = StyleSheet.create({
      text: {
        fontSize: 30,
      },
    });

  
  export default ChatScreen;
  
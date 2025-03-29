import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import MainContainer from './navigation/MainContainer'; // Bottom tab navigator
import DepartmentList from './src/screens/components/DepartmentList';
export default function App() {
  const [isExpanded, setIsExpanded] = useState(false); // State to track whether the list is expanded

  // Function to toggle the list between collapsed and expanded
  const toggleList = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Main screen with Bottom Tab Navigator */}
      <MainContainer />

      {/* Button to expand/collapse the list */}
      <TouchableOpacity onPress={toggleList} style={styles.toggleButton}>
        <Text style={styles.toggleButtonText}>{isExpanded ? 'Close List' : 'List'}</Text>
      </TouchableOpacity>

      {/* Fullscreen list section */}
      {isExpanded && (
        <View style={styles.expandedContainer}>
          <DepartmentList />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  toggleButton: {
    position: 'absolute',
    top: 100,
    left: 5,
    padding: 15,
    backgroundColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  toggleButtonText: {
    color: 'white',
    fontSize: 18,
  },
  expandedContainer: {
    position: 'absolute',
    top: 150,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f4f4f4',
    padding: 10,
  },
});

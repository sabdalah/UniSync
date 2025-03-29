import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Collapsible from 'react-native-collapsible';

const departments = [
  {
    title: 'General',
    majors: [],
    isExpanded: false,
  },
  {
    title: 'Science Department',
    majors: ['Biology', 'Chemistry', 'Physics','Computer Science'],
    isExpanded: false,
  },
  {
    title: 'Math Department',
    majors: ['Algebra', 'Calculus', 'Geometry'],
    isExpanded: false,
  },
  {
    title: 'Business Department',
    majors: ['Finance', 'Marketing', 'Management'],
    isExpanded: false,
  },
];

const DepartmentList = () => {
  const [data, setData] = useState(departments);

  const toggleExpand = (index) => {
    const updatedData = [...data];
    updatedData[index].isExpanded = !updatedData[index].isExpanded;
    setData(updatedData);
  };

  const renderDepartment = ({ item, index }) => (
    <View style={styles.departmentContainer}>
      <TouchableOpacity onPress={() => toggleExpand(index)} style={styles.departmentButton}>
        <Text style={styles.departmentText}>{item.title}</Text>
      </TouchableOpacity>

      {/* Collapsible part */}
      <Collapsible collapsed={!item.isExpanded}>
        <FlatList
          data={item.majors}
          renderItem={({ item: major }) => <Text style={styles.majorText}>{major}</Text>}
          keyExtractor={(major) => major}
        />
      </Collapsible>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderDepartment}
      keyExtractor={(item) => item.title}
    />
  );
};

const styles = StyleSheet.create({
  departmentContainer: {
    marginBottom: 15,
  },
  departmentButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
  departmentText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  majorText: {
    fontSize: 16,
    marginLeft: 20,
    marginTop: 5,
  },
});

export default DepartmentList;

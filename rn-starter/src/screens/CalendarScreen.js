import React, { useState } from "react";
import { View, Text } from "react-native";
import { Calendar, Agenda } from "react-native-calendars";

const CalendarScreen = ({navigation}) => {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontSize: 18, textAlign: "center", marginBottom: 10 }}>
        Selected Date: {selectedDate || "None"}
      </Text>

      {/* Basic Calendar */}
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: { selected: true, marked: true, selectedColor: "blue" },
        }}
      />
    </View>
  );
};

export default CalendarScreen;
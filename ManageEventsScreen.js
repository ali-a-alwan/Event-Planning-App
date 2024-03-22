import React from 'react'; import { View, Text, Button } from 'react-native';

const ManageEventsScreen = ({ navigation }) => { 
  return ( 
    <View> 
    <Text>Welcome to the Manage Events Screen!</Text> 
    <Button title="View Event Details" onPress={() => navigation.navigate('EventDetails')} /> 
    <Button title="Create a New Event" onPress={() => navigation.navigate('CreateEvent')} /> 
    </View> 
    );
     };

export default ManageEventsScreen;
import React from 'react'; import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => { 
  return ( 
    <View> 
    <Text>Welcome to the Home Screen!</Text> 
    <Button title="Create a New Event" onPress={() => navigation.navigate('CreateEvent')} /> 
    </View> 
    ); 
    };

export default HomeScreen;
import React from 'react'; 
import { View, Text, Button } from 'react-native';

const CreateEventScreen = ({ navigation }) => { 
  return ( 
    <View> 
    <Text>Welcome to the Create Event Screen!</Text> 
    <Button title="Save Event" onPress={() => navigation.navigate('ManageEvents')} /> 
    </View> 
    ); 
    };

export default CreateEventScreen;
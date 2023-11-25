/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import {NavigatorContainer} from '@react-navigation/react';
import {createStackNavigator} from '@react-navigation/stack';
/*
'Do laundry',
  'Go to Gym',
  'Walk dog',
  'Submit assignment'
  */

function App() {

const Stack=createStackNavigator();
const addTask = (task: string) => {
  setTasks([...tasks, task]);
};
const [tasks, setTasks] = useState<string[]>(['Do laundry', 'Go to Gym', 'Walk dog', 'Submit assignment']);

  return (
  <View>
  <Text>Test</Text>
  </View>
    <NavigatorContainer>
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="About" component={AboutScreen}/>
    </NavigatorContainer>
  );

  

}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default App;

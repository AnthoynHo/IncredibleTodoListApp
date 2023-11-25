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

import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import MainLayout from '../layouts/MainLayout';


export default function HomeScreen({navigation}){
const addTask = (task) => {
  setTasks([...tasks, task]);
};
const [tasks, setTasks] = useState<string[]>(['Do laundry', 'Go to Gym', 'Walk dog', 'Submit assignment']);
    return(
        <MainLayout>
            <Button title="Go to About" onPress={() => navigation.navigate('About')}/>
            <SafeAreaView>
                 <ToDoList tasks = {tasks}/>
                 <ToDoForm addTask={addTask}/>
            </SafeAreaView>
        </MainLayout>
    )
}
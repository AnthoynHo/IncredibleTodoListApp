// HomeScreen.jsx

import React, { useState } from 'react';
import { SafeAreaView, Button } from 'react-native';

import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to Gym', 'Walk dog', 'Submit assignment']);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <MainLayout>
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
      <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
      </SafeAreaView>
    </MainLayout>
  );
};

export default HomeScreen;

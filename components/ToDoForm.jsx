import React, { useEffect, useState } from 'react';
import{
View,
TextInput,
StyleSheet,
Button,
Alert,
Text
} from 'react-native';
import tasksData from '../data/tasks.json';


export default function ToDoForm({addTask}){
  const [taskText, setTaskText] = React.useState('');
  const [fetchedTasks, setFetchedTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState('');

  useEffect(() => {
      setFetchedTasks(tasksData.tasks || []);
    }, []);

  const handleAddTask = () => {
    if (fetchedTasks.length === 0) {
      Alert.alert('No tasks available', 'Please fetch tasks before adding.');
      return;
    }
    const randomIndex = Math.floor(Math.random() * fetchedTasks.length);
    const randomTask = fetchedTasks[randomIndex];
    setSelectedTask(randomTask);
    addTask(randomTask);
    setTaskText('');
  };


  return (
    <View style={styles.form}>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
    </View>
    <View style={styles.buttonContainer}>
      <Button title="Add" onPress={() => addTask(taskText)} />
      <Button title="Generate Random Task" onPress={handleAddTask} />
    </View>
      {selectedTask !== '' && (
        <Text style={styles.selectedTaskText}>
          Selected Task: {selectedTask}
        </Text>
      )}

    </View>
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
        flexDirection: 'column',
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
      inputContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
      },
      buttonContainer: {
          flexDirection: 'row', // Arrange buttons horizontally
          justifyContent: 'space-between', // Add space between buttons
          marginTop: 10,
        },
    });
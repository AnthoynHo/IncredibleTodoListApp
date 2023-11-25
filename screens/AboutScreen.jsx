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
import DatePicker from 'react-native-datepicker';
import MainLayout from '../layouts/MainLayout';

export default function About({navigation}){

const [currentDate, setCurrentDate] = useState(new Date());

const formatDate = (date) => {
    return date.toLocaleDateString();
};

    return(
        <MainLayout>
            <View>
              <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
                <Text>IncredibleTodoApp</Text>
                <Text>Anthony Ho</Text>
               <Text>Selected Date: {formatDate(currentDate)}</Text>
               <DatePicker
                 style={{ width: 200 }}
                 date={currentDate}
                 mode="date"
                 format="YYYY-MM-DD"
                 confirmBtnText="Confirm"
                 cancelBtnText="Cancel"
                 onDateChange={(date) => setCurrentDate(new Date(date))}
               />
            </View>
        </MainLayout>
    )
}
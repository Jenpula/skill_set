import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';
import { useEffect, useState } from 'react';
import { Col, Grid } from 'react-native-easy-grid';



export default function App() {


const [value, setValue] = useState(0);
const [values, setValues] = useState(new Array(SKILLS.length).fill(0));
const [ average, setAverage] = useState(0);

const SKILLS = ['Frontend', 'Backend', 'Mobile', 'Databases']
const MIN = 0;
const MAX = 5;

const setSkillValue = (val, i) => {
  let skillValues = [...values];
  skillValues[i] = val;
  setValues(skillValues);
}

const calculateAverageSkill = () => {
  const sum = values.reduce((a, b) => a + b, 0);
  const avg = (sum / values.length) || 0;
  setAverage(avg);
}

useEffect(() => {
  calculateAverageSkill();
}, [values]);

  return (
    <View style={styles.container}>
      <Text>Value: {value}</Text>
      <Slider
        style={{width: 200, height: 40}}
        minimumValue={0}
        maximumValue={10}
        step={1}
        value={value}
        minimumTrackTintColor='#FFFFFF'
        maximumTrackTintColor='#000000'
        onValueChange={(val) => setValue(val)}
      />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

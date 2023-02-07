import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';
import { useEffect, useState } from 'react';
import { Col, Grid } from 'react-native-easy-grid';
import Styles from './styles/styles';




export default function App() {

  const SKILLS = ['Frontend', 'Backend', 'Mobile', 'Databases'];
  const MIN = 0;
  const MAX = 5;

const [value, setValue] = useState(0);
const [values, setValues] = useState(new Array(SKILLS.length).fill(0));
const [ average, setAverage] = useState(0);


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

const items = [];
for (let i = 0; i < SKILLS.length; i++) {
  items.push(
    <View key={'item' + i} style={styles.skills}>
      <Text style={styles.skill}>{SKILLS[i]}</Text>
      <Text style={styles.value}>Skill: {values[i]}</Text>
      <Grid style= {styles.grid}>
        <Col size={5}><Text>{MIN}</Text></Col>
        <Col size={90}>
          <Slider
          style={styles.slider}
          minimumValue={MIN}
          maximumValue={MAX}
          step={1}
          values={values[i]}
          minimumTrackTintColor='#006666'
          maximumTrackTintColor='#ff9900'
          onValueChange={(val) => setSkillValue(val, i)}/>
        </Col>
        <Col size={5}><Text>{MAX}</Text></Col>
      </Grid>
    </View>
  )
}

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Text style={styles.header}>Skill set</Text>
      <View>{items}</View>
      <Text style={styles.averageHeader}>Average</Text>
      <Text style={styles.averageValue}>{average}</Text>
      </ScrollView>
      </SafeAreaView>
  );
}




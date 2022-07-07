import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icons from './Icons.js';
import Bar  from './Bar.js';
import {useState} from "react";

const Home = (props) => {
  const [userEmail, setUserEmail] = useState(props.userEmail);
  console.log("Home user email: "+props.userEmail)
  
  return (
    <View>
      <Bar userEmail ={userEmail} />
      <Icons />
    </View>
  );
};

export default Home;

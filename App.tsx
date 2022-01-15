import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Image, PanResponder, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import SvgExample from './src/components/Chart/Donut';


const App = () => {
  return( 
  <View style={styles.container}>
      <SvgExample/>
  </View> 
  );
}
export default App;
const styles = StyleSheet.create({
  container : { 
    justifyContent : 'center',
    alignItems : 'center',
    flex: 1,
  }
})
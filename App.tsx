import React, {useEffect, useRef} from 'react';
import { Animated, Button, Easing, StyleSheet, Text, View } from 'react-native';
import FlatListAnimation from './src/components/FlatListAnimation/FlatListAnimation';

const App = () => {
  const translate = useRef(new Animated.Value(0)).current;
  useEffect(()=>{ 
    Animated.timing(translate,{
      toValue: 100,
      duration: 1000,
      useNativeDriver: true
    }).start();
  },[])
  return (
    // <View style={styles.container}>
    //     <Animated.View
    //       style={{
    //         width: 100,
    //         height: 100,
    //         backgroundColor: 'orangered',
    //         transform: [{translateX: translate}]
    //       }}
    //     />
    // </View>
    <FlatListAnimation/>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems: 'center'
  },
});

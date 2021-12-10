import React, {useEffect, useRef} from 'react';
import { Animated, Button, Easing, StyleSheet, Text, View } from 'react-native';
import FlatListAnimation from './src/components/FlatListAnimation/FlatListAnimation';

const Interpolation = () => {
  const translate = useRef(new Animated.Value(0)).current;
  useEffect(()=>{ 
    Animated.timing(translate,{
      toValue: 300,
      duration: 1000,
      useNativeDriver: false
    }).start();
  },[])
  return (
    <View style={styles.container}>
        <Animated.View
          style={{
            width: 100,
            height: 100,
            backgroundColor: translate.interpolate({
              inputRange: [0, 300],
              outputRange: ['orange', 'green']
            }),
            opacity: translate.interpolate({
              inputRange:  [0, 150, 300],
              outputRange: [1, 0, 1],
              extrapolate:'clamp'
            }),
            transform: [
              {translateX: translate},
              {rotate : translate.interpolate(
                {
                  inputRange: [0, 300],
                  outputRange: ['0deg', '360deg' ]
                }
              )}
            ],
            borderRadius: 20
          }}
        />
    </View>
  );
};

export default Interpolation;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // justifyContent:'center',
    // alignItems: 'center'
  },
});

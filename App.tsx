import React, {useEffect, useRef, useState} from 'react';
import { Animated, ScrollView, View } from 'react-native';

const App = () => {
  const [ headerShown, setHeaderShown ] = useState(false);

  const scrolling = useRef(new Animated.Value(0)).current;

  const translation = scrolling.interpolate({
    inputRange: [100, 130],
    outputRange: [-100, 0],
    extrapolate: 'clamp'
  })

  useEffect(()=> { 
    console.log(scrolling);
  },[scrolling])
  return (
    <>
      <Animated.View 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 80,
          backgroundColor: 'tomato',
          transform: [
            {translateY: translation }
          ],
        }}>
      </Animated.View>
      <Animated.ScrollView
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y: scrolling
              }
            }
          }
        ]
        ,{useNativeDriver: true})}
        scrollEventThrottle={16}
        style={{flex: 1}}
      >
        <View style={{ flex: 1, height: 1000 }}/>
      </Animated.ScrollView>
    </>
  );
};
export default App;
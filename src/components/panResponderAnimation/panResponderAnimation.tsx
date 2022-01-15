import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Image, PanResponder, ScrollView, Text, useWindowDimensions, View } from 'react-native';
import DraggableView from './src/components/Draggable/DraggableView';
import FlatListAnimation from './src/components/FlatListAnimation/FlatListAnimation';
const IMAGE_URI =
  'https://vignette.wikia.nocookie.net/joke-battles/images/4/40/18360-doge-doge-simple.jpg/revision/latest?cb=20151209161638';
const pointsDistance = ([xA, yA]: any, [xB, yB]: any) => {
  return Math.sqrt(
    Math.pow(xA - xB, 2) + Math.pow(yA - yB, 2)
  );
};

const panResponderAnimation = () => {
  const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const scale = useRef(new Animated.Value(1)).current;
  const widthDim = useWindowDimensions().width;
  const panResponder = useRef(
    PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        //tchouf 9addeh men sbo3 fel ecran
        const activeTouche = evt.nativeEvent.changedTouches.length;
        if (activeTouche === 1) {
          pan.setValue({
            x: gestureState.dx,
            y: gestureState.dy,
          })
        }
        if (activeTouche > 1) {
          const touchs = evt.nativeEvent.changedTouches;
          const touche1 = touchs[0];
          const touche2 = touchs[1];
          const distance = pointsDistance(
            [touche1.pageX, touche1.pageY],
            [touche2.pageX, touche2.pageY]
          )
          console.log('disrance =>', distance);
          const percentageOfZoom = distance / widthDim;
          scale.setValue(1 + percentageOfZoom);
          // sca  le.setValue()
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        Animated.parallel([Animated.spring(pan, {
          toValue: {
            x: 0,
            y: 0
          },
          useNativeDriver: true
        }),
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: true
        },
        )
        ]).start()
      },  


    })
  ).current;
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Animated.Image
        style={
          {
            height: 200,
            width: '90%',
            borderRadius: 10,
            transform: [
              { translateX: pan.x },
              { translateY: pan.y },
              { scale }
            ]
          }
        }
        source={{ uri: IMAGE_URI }}
        {...panResponder.panHandlers}
      />
      <Text> hello </Text>
    </View>)
}
export default panResponderAnimation;
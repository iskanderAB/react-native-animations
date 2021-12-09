import React, { useRef } from "react";
import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";

const Animation = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        console.log("granted Access !");
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: (_,gesture)=>{ 
          // console.log("args => ", {...args[1]});
          pan.x.setValue(gesture.dx);
          pan.y.setValue(gesture.dy);
          console.log("x value => ",gesture.dx);

      },
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  ).current;


  //**Debugging */
  // console.log("layout => ", {...panResponder.panHandlers});
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Drag this box!</Text>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.box} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold"
  },
  box: {
    height: 70,
    width: 70,
    backgroundColor: "red",
    borderRadius: 100
  }
});

export default Animation;
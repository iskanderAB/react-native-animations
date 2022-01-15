import React, { useRef } from 'react';
import {Text, View , Animated } from 'react-native';
import Svg, {Circle, G} from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
function  Donut({
  textColor,
  percentage = 75,
  radius = 40,
  strokewidth = 10,
  duration = 500,
  color = 'tomato',
  delay = 0,
  max = 100,
}) {

  const circleRef = useRef();
  const halfCircle = radius + strokewidth;
  const circumference : number = radius * 2 * Math.PI ;
  const strokeDashoffset = circumference - (circumference * percentage)/100
  return (
    <Svg 
         height={radius * 2}
         width={ radius *2 } 
         viewBox={`0 0 ${halfCircle *2 } ${halfCircle * 2}`}
         >
      <G rotation='270' origin={`${halfCircle} , ${halfCircle}`}  >
        <Circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke={color}
          fill='transparent'
          strokeWidth={strokewidth}
          strokeOpacity={0.2}
        />
        <AnimatedCircle
          ref={circleRef}
          cx="50%"
          cy="50%"
          r={radius}
          stroke={color}
          fill='transparent'
          strokeWidth={strokewidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap='round'
        />
      </G>
    </Svg>
  );
}

export default Donut;

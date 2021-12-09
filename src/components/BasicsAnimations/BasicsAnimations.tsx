import React, {useEffect, useRef} from 'react';
import { Animated, Button, Easing, StyleSheet, Text, View } from 'react-native';

const BasicsAnimations = () => {
  const translation = useRef(
    new Animated.ValueXY({x: 0 , y: 0})
  ).current;

  const firstOpacity   = useRef(new Animated.Value(0)).current;
  const secondOpacity = useRef(new Animated.Value(0)).current;
  const thirdOpacity  = useRef(new Animated.Value(0)).current;


  const handleTranslation = () => {
    /** timing  */
    // Animated.timing(translation,{
    //   toValue: 260,
    //   delay: 1000, // el wa9t elli testanneh el animation 
    //   duration: 1000, // 9addeh to93ed el animation 
    //   easing: Easing.bounce, // naw3 el vitesse par exepme yezreb w ba3d yna9es w ba3d yezreb ... 
    //   useNativeDriver: true // elanimation twalli tekhdem 3al UI thread ma3ach 3al js thread 
    // }).start();
    /** hia bidha timing ama maghir time :p  */
    // Animated.spring(translation,{toValue: 100, useNativeDriver: true});

    /** thot barch wahdet yekhdmo bel ka3ba bel ka3ba  */
    // Animated.sequence([
    //     Animated.timing(translation.x,{toValue: 100,easing: Easing.bounce , duration:1000, useNativeDriver: true}),
    //     Animated.timing(translation.y,{toValue: -300,easing: Easing.bounce , duration:1000, useNativeDriver: true})
    //   ],).start();

    /** thot barch wahdet yekhdmo m3a b3adhhom  */

    //  Animated.parallel([
    //       Animated.timing(translation.x,{toValue: 100,easing: Easing.bounce , duration:1000, useNativeDriver: true}),
    //       Animated.timing(translation.y,{toValue: -300,easing: Easing.bounce , duration:1000, useNativeDriver: true})
    //     ])
  };
  useEffect(()=>{ 
      Animated.loop(Animated.stagger(125,[
        Animated.timing(firstOpacity,{
          toValue: 1,
          useNativeDriver: true
        }),
        Animated.timing(secondOpacity,{
          toValue: 1,
          useNativeDriver: true
        }),
        Animated.timing(thirdOpacity,{
          toValue: 1,
          useNativeDriver: true
        })
      ])).start();
  },[])
  return (
    <View style={styles.container}>
      <Animated.View style={{
        width: 100,
        height: 100, 
        marginBottom: 10,
        opacity: firstOpacity,
        // borderRadius: 100/2,
        backgroundColor: 'orangered',
        // transform: [
        //   {translateX: translation.x},
        //   {translateY: translation.y},
        // ]
      }}/>
      <Animated.View style={{
        width: 100,
        height: 100, 
        marginBottom: 10,
        opacity: secondOpacity,
        // borderRadius: 100/2,
        backgroundColor: 'orangered',
        // transform: [
        //   {translateX: translation.x},
        //   {translateY: translation.y},
        // ]
      }}/>
      <Animated.View style={{
        width: 100,
        height: 100, 
        marginBottom: 10,
        opacity: thirdOpacity,
        // borderRadius: 100/2,
        backgroundColor: 'orangered',
        // transform: [
        //   {translateX: translation.x},
        //   {translateY: translation.y},
        // ]
      }}/>
      {/* <Button title="Move" color='orangered'  onPress={handleTranslation}/> */}
    </View>
  );
};

export default BasicsAnimations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems: 'center'
  },
});

import React, {useRef} from 'react';
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('screen');
import faker from 'faker';

const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3

const FlatListAnimation = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  faker.seed(10);
  const DATA = [...Array(3000).keys()].map((_, i) => {
    return {
      key: faker.random.uuid(),
      image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
        'women',
        'men',
      ])}/${faker.random.number(60)}.jpg`,
      name: faker.name.findName(),
      jobTitle: faker.name.jobTitle(),
      email: faker.internet.email(),
    };
  });
  // console.log("my array=> ",[...Array(30).keys()]);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/4622994/pexels-photo-4622994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={70}
      />
      <Animated.FlatList
        data={DATA}
        onScroll={Animated.event([
          {nativeEvent: {contentOffset: { y : scrollY}}}],
          {useNativeDriver: true}
        )}
        keyExtractor={item => item.key}
        contentContainerStyle={styles.flatList}
        renderItem={({item ,index}) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * ( index+2 )
          ];
          const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * ( index+1 )
          ];
          const scale =  scrollY.interpolate({
            inputRange,
            outputRange: [1,1,1,0]
          })
          const opacity = scrollY.interpolate({
            inputRange: opacityInputRange ,
            outputRange: [1,1,1,0]
          })

          return (
            <Animated.View style={{...styles.item,transform:[{scale}] ,opacity: opacity}}>
              <Image source={{uri: item.image}} style={styles.image} />
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.jobTitle}>{item.jobTitle}</Text>
                <Text style={styles.email}>{item.email}</Text>
              </View>
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

export default FlatListAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    padding: SPACING,
    backgroundColor: 'rgba(255,255,255,1)',

    borderRadius: 12,
    marginBottom: SPACING,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 8,
  },
  image: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  jobTitle: {
    fontSize: 14,
    opacity: 0.7,
  },
  email: {
    fontSize: 10,
    opacity: 0.8,
    color: 'blue',
  },
  flatList: {
    padding: SPACING,
  },
});

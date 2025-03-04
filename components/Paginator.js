import React from 'react';
import { View, StyleSheet, Animated, useWindowDimensions } from 'react-native';

const Paginator = ({ data, scrollX }) => {
    const {width} = useWindowDimensions();
  return (
    <View style={styles.viewStyle}>
      {data.map((_,i)=>{
        const inputRange = [(i-1) * width, i*width, (i+1)*width];
        const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10,20,10],
            extrapolate: 'clamp',
        })
        return <Animated.View style={[styles.dot,{width:dotWidth}]} key={i.toString()} />;
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  dot:{
    height: 10,
    borderRadius: 5,
    backgroundColor: '#6c63ff',
    marginHorizontal: 8,
  },
  viewStyle:{
    flexDirection:'row',
    height:64,
  },
});

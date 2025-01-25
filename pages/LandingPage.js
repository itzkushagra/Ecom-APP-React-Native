import React, {useState, useRef} from "react";

import { View, StyleSheet, FlatList, Animated, Button } from "react-native";
import slides from '../slides'
import { useNavigation } from "@react-navigation/native";
import LandingComponent from "../components/LandingComponent";
import Paginator from "../components/Paginator";

const LandingPage = ()=>{
    const scrollXVal = useRef(new Animated.Value(0)).current;
    const slidsRef  = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsChanged = useRef(({viewableItems })=>{
        if (viewableItems  && viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
          }
    }).current;
    const navigation = useNavigation();

    return(
        <View style = {styles.container}>
            <View style={{flex: 3}}>
                <FlatList 
                    data={slides} 
                    renderItem={({item})=> <LandingComponent item={item}/>} 
                    horizontal 
                    pagingEnabled 
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item)=>item.id}
                    onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollXVal}}}],{
                        useNativeDriver:false,
                    })}
                    onViewableItemsChanged={itemsChanged}
                    scrollEventThrottle={32}
                    ref={slidsRef}
                />
            </View>
            <Paginator data={slides} scrollX={scrollXVal}/>
            <View style={styles.buttonContainer}>
                <Button 
                    title="Next" 
                    onPress={() => navigation.navigate("HOMEPAGE")} 
                    color="#6c63ff"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'white',
    },
    buttonContainer:{
        marginBottom:20,
        padding: 5,
    },
    buttonContainer: {
        marginBottom: 30,
        width: "20%",
        borderRadius: 20, 
        overflow: "hidden",
    },
});

export default LandingPage;

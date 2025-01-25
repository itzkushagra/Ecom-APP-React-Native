import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Header = () => {
  return (
    <View style={styles.container}>
        <View style={styles.iconContainer}>
            <Icon name={"th"} size={36} color={'#6c63ff'} />
        </View>
        <Image source={require("../assets/weMart_logo.jpeg")} style={styles.logo}/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconContainer:{
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        marginTop:10,
    },
    logo:{
        height: 54,
        width: 54,
        borderRadius: 40,
        marginRight: 10,
        marginTop: 10,
    }
})
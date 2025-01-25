import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import CartScreen from './CartPage';
import Header from '../components/Header';
import WishlistScreen from './WishlistPage';
const Tab = createBottomTabNavigator();

const HomeScreen = () => (
  <View style={styles.screen}>
    <Header/>
    <Text style={styles.textbox}>Browse Products</Text>
    <View style={styles.inputContainer}>
      <View style={styles.iconContainer}>
        <Icon name={"search"} size={24} color={'#C0C0C0'} />
      </View>
      <TextInput style={styles.textInput} placeholder='Search Here'/>
    </View>
  </View>
);


const HomePagr = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6c63ff',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen name="HOME" component={HomeScreen} options={{
        tabBarIcon:({size,color})=>{
          return <Icon name={"home"} size={size} color={color} />;
        }
      }}/>
      <Tab.Screen name="WISHLIST" component={WishlistScreen} options={{
        tabBarIcon:({size,color})=>{
          return <Icon name={"heart"} size={size} color={color} />;
        }
      }}/>
      <Tab.Screen name="CART" component={CartScreen} options={{
        tabBarIcon:({size,color})=>{
          return <Icon name={"shopping-cart"} size={size} color={color} />;
        }
      }}/>
    </Tab.Navigator>
  )
}

export default HomePagr

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: 'white',
  },
  textbox:{
    fontSize: 28,
    color: '#000000',
    marginTop: 15,
  },
  inputContainer:{
    backgroundColor:'#eaeaea',
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
  textInput:{
    flex: 1,
    placeholderTextColor:'black',
    borderWidth: 0.8,
    marginRight: 10,
    borderRadius: 6,
    borderColor: '#C0C0C0'
  },
  iconContainer:{
    marginHorizontal:22,
  }

});
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import FlatCards from './Components/Cards/FlatCards';
import ElevatedCards from './Components/Cards/ElevatedCards';
import FancyCard from './Components/Cards/FancyCards';
import ActionCards from './Components/Cards/ActionCards';
import ChatView from './Components/Cards/ChatView';
import Password from './Components/Password/PasswordGenerator';
import BackGround from './Components/bgChanger/bgChanger';
import RollDice from './Components/rollDice/RollDice';
import CurrencyConverter from './Components/CurrencyConverter/CurrencyConverter';
import TicTakToe from './Components/TikTacToe/TictakToe';
import Sportify from './Components/Sportify- like/Sportify';
// import Navigation from './Components/Navigation/Navigation';

import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from './Components/Navigation/Screens/Home';
import Details from './Components/Navigation/Screens/Detail';
// import Navigation from './Components/Navigation/Navigation';

export type RootStackParamList = {
    Home: undefined;
    Details: {product: Product}
  };

  const Stack = createNativeStackNavigator<RootStackParamList>()

function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView> */}
      {/* *********** Cards *********** */}
      {/* <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ChatView />
        <ActionCards /> */}

      {/* *********** Password *********** */}
      {/* <Password /> */}

      {/* *********** bgColor *********** */}
      {/* <BackGround /> */}

      {/* *********** roll Dice *********** */}
      {/* <RollDice /> */}

      {/* *********** currency-converter *********** */}
      {/* <CurrencyConverter /> */}

      {/* *********** Tic-Tak-Toe *********** */}
      {/* <TicTakToe /> */}

      {/* *********** Sportify *********** */}
      {/* <Sportify /> */}

      {/* *********** Navigation *********** */}
      
      {/* <Navigation /> */}

      <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title: "Trending Products"
        }}
        />
        <Stack.Screen
        name='Details'
        component={Details}
        options={{
          title: "Product Details"
        }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
      {/* </ScrollView> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;

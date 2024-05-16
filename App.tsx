import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import FlatCards from './Components/Cards/FlatCards';
import ElevatedCards from './Components/Cards/ElevatedCards';
import FancyCard from './Components/Cards/FancyCards';
import ActionCards from './Components/Cards/ActionCards';
import ChatView from './Components/Cards/ChatView';
import Password from './Components/Password/PasswordGenerator';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* *********** Cards *********** */}

        {/* <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ChatView />
        <ActionCards /> */}

        {/* *********** Password *********** */}

        <Password />

      </ScrollView>
    </SafeAreaView>
  )
}
export default App;

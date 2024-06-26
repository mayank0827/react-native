// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// import { NavigationContainer} from "@react-navigation/native"
// import {createNativeStackNavigator} from "@react-navigation/native-stack"

// import Home from './screens/Home'
// import Details from './Screens/Detail'

// export type RootStackPramList = {
//   Home: undefined;
//   Details: {product: Product}
// }

// const Stack = createNativeStackNavigator<RootStackPramList>()

// const Navigation = () => {
//     return  (
//         <NavigationContainer>
//           <Stack.Navigator initialRouteName='Home'>
//             <Stack.Screen
//             name="Home"
//             component={Home}
//             options={{
//               title: "Trending Products"
//             }}
//             />
//             <Stack.Screen
//             name="Details"
//             component={Details}
//             options={{
//               title: "Product details"
//             }}
//             />
//           </Stack.Navigator>
//         </NavigationContainer>
//       )
// }

// export default Navigation;
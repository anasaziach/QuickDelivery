import React,{createContext} from "react";
import RecipeDetailScreen from "./Screens/Restaurant/RecipeDetailScreen";
import DATA from "./config/Restaurant/DATA";
import HomeScreen from "./Screens/Restaurant/HomeScreen";
import WelcomeScreen from "./Screens/Restaurant/WelcomeScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export const ItemContext = createContext();
export default App=()=>{
  const [selectedItem, setSelectedItem] = React.useState();
  return (
    <ItemContext.Provider value={{selectedItem, setSelectedItem}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Home'}}
          />
          <Stack.Screen
            name="RecipeDetailScreen"
            component={RecipeDetailScreen}
            options={{title: 'RecipeDetailScreen'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ItemContext.Provider>
  )
}



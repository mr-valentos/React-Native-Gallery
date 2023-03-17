import { StatusBar } from 'expo-status-bar';
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import { FullSizeImg } from "./src/components/FullSizeImg";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Gallery } from "./src/components/Gallery";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar/>
        <Stack.Navigator>
          <Stack.Screen
            name="Gallery"
            component={Gallery}
            options={{ title: 'Gallery' }}
          />
          <Stack.Screen
            name="Photo"
            component={FullSizeImg}
            options={{ title: 'Photo' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

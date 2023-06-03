//import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Mural from './screens/Mural'
import Disciplinas from './screens/Disciplinas';

const Stack = createNativeStackNavigator();

export default App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Mural"
                    component={Mural}
                    options={{title: 'Welcome'}}
                />
                <Stack.Screen
                    name="Disciplinas"
                    component={Disciplinas}
                    options={{title: 'Welcome'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}



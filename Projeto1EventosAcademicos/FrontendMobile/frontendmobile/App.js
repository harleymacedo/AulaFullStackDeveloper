import { Image } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Mural from './screens/Mural'
import Disciplinas from './screens/Disciplinas'
import Professores from './screens/Professores'
import Eventos from './screens/Eventos'

const Tab = createBottomTabNavigator();

export default App = () => {
    return (
        <NavigationContainer>            
            <Tab.Navigator screenOptions={{ headerShown: false }} >

                <Tab.Screen 
                    name="Mural"
                    component={Mural}
                    options={{ 
                        tabBarLabel: 'Mural', 
                        tabBarIcon: () => (<Image source={require('./assets/icons8-professor-16.png')} />) 
                    }} 
                />

                <Tab.Screen 
                    name="Disciplinas"
                    component={Disciplinas} 
                    options={{ 
                        tabBarLabel: 'Disciplinas', 
                        tabBarIcon: () => (<Image source={require('./assets/icons8-lista-16.png')} />) 
                    }} 
                />

                <Tab.Screen 
                    name="Professores"
                    component={Mural}
                    options={{ 
                        tabBarLabel: 'Professores', 
                        tabBarIcon: () => (<Image source={require('./assets/icons8-professor-16.png')} />) 
                    }} 
                />

                <Tab.Screen 
                    name="Eventos"
                    component={Eventos}
                    options={{ 
                        tabBarLabel: 'Eventos', 
                        tabBarIcon: () => (<Image source={require('./assets/icons8-professor-16.png')} />) 
                    }} 
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
}



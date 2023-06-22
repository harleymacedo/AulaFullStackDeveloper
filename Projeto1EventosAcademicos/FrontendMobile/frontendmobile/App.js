import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Disciplinas from './screens/Disciplinas'
import Professores from './screens/Professores'
import Eventos from './screens/Eventos'
import Sobre from './screens/Sobre'

const Tab = createBottomTabNavigator();

export default App = () => {
    return (
        <NavigationContainer>            
            <Tab.Navigator screenOptions={{ headerShown: false }} >

                <Tab.Screen 
                    name="Disciplinas"
                    component={Disciplinas} 
                    options={{ 
                        tabBarLabel: 'Disciplinas', 
                        tabBarIcon: () => (<Image source={require('./assets/icons8-lista-32.png')} />) 
                    }} 
                />

                <Tab.Screen 
                    name="Professores"
                    component={Professores}
                    options={{ 
                        tabBarLabel: 'Professores', 
                        tabBarIcon: () => (<Image source={require('./assets/icons8-professor-32.png')} />) 
                    }} 
                />

                <Tab.Screen 
                    name="Eventos"
                    component={Eventos}
                    options={{ 
                        tabBarLabel: 'Eventos', 
                        tabBarIcon: () => (<Image source={require('./assets/icons8-evento-32.png')} />) 
                    }} 
                />

                <Tab.Screen 
                    name="Sobre"
                    component={Sobre}
                    options={{ 
                        tabBarLabel: 'Sobre', 
                        tabBarIcon: () => (<Image source={require('./assets/icons8-sobre-32.png')} />) 
                    }} 
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
}



import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native'
import MenuHome from './components/MenuHome'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export default App = () => {
    return (
        <SafeAreaView style={styles.container1}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{title: 'Welcome'}}
                    />
                    <Stack.Screen name="Profile" component={ProfileScreen} />
                </Stack.Navigator>
            </NavigationContainer>
            <View style={styles.container2}>
                <Text style={styles.text1}>App do Curso</Text>
                <Text style={styles.text2}>Sistemas de Informação</Text>
                <Image source={require('./assets/LogoIFCECratoVertical.png')} style={styles.imagem1} />
            </View>
            <View>
                <MenuHome />
            </View>
            <View>
                <Text style={styles.text2}>Desenvolvido por: Harley Macêdo - 2023</Text>
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282c34'        
    },
    container2: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282c34'
    },
    text1: {
        color: '#fff',
        fontSize: 26
    },
    text2: {
        color: '#fff',
        fontSize: 18,
        marginTop: 20
    },
    imagem1: {
        width: 50,
        height: 100
    }
})

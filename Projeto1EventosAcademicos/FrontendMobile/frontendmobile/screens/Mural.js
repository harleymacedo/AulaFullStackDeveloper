import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native'

export default Mural = () => {
    return (
        <SafeAreaView style={styles.container1}>

            <View style={styles.container2}>
                <Text style={styles.text1}>App do Curso</Text>
                <Text style={styles.text2}>Sistemas de Informação</Text>
                <Image source={require('../assets/LogoIFCEHorizontal.png')} style={styles.imagem1} />
            </View>

            <View>
                <Text>Mural principal</Text>
            </View>

            <View>
                <Text style={styles.text3}>Desenvolvido por: Harley Macêdo - 2023</Text>
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff'        
    },
    container2: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: '#fff'
    },
    text1: {
        color: '#119922',
        fontSize: 26,
        fontFamily: 'Verdana'
    },
    text2: {
        color: '#119922',
        fontSize: 18,
        fontFamily: 'Verdana',
        marginTop: 20
    },
    text3: {
        color: '#119922',
        fontSize: 12,
        fontFamily: 'Verdana',
    },
    imagem1: {
        width: 300,
        height: 50
    }
})
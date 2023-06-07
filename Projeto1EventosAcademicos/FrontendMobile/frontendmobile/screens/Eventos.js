import {SafeAreaView, View, Text, Table, StyleSheet} from 'react-native'

export default Eventos = () => {
    return (
        <SafeAreaView style={styles.container1}>
            <Text style={styles.text1} >Tela de eventos</Text>
            <Text style={styles.text2} >Lista de eventos</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    text1: {
        color: '#119922',
        fontFamily: 'Verdana',
        marginTop: 20,
        fontSize: 26
    },
    text2: {
        color: '#119922',
        fontFamily: 'Verdana',
        marginTop: 40,
        fontSize: 20
    }
})
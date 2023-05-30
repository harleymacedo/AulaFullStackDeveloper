import {View, Text, StyleSheet} from 'react-native'

export default Laboratorios = () => {
    return (
        <View style={styles.container1}>
            <Text>Tela de Laboratórios</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
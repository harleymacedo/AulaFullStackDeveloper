import { View, Text, StyleSheet } from 'react-native'

export default DetalheEvento = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Evento ano {props.ano}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#893939'
    },
    text1: {
        fontSize: 16
    }
})
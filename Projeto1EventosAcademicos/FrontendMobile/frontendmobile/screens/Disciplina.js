import { View, Text, Button, Image, StyleSheet } from 'react-native'

export default Disciplina = () => {
    return (
        <View style={styles.container1} >
            <Text style={styles.text1} >Disciplinas</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text1: {
        fontSize: 18
    }
})
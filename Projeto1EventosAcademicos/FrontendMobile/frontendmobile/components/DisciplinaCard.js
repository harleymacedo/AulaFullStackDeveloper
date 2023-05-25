import { View, Text, StyleSheet } from 'react-native'

export default DisciplinaCard = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Disciplina: {props.nome}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        border: 1,
        backgroundColor: '#779898'
    },
    text1: {
        color: '#229010',
        fontSize: 18
    }
})
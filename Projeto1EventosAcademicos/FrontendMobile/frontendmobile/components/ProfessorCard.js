import { View, Text, StyleSheet } from 'react-native'

export default ProfessorCard = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Professor: {props.nome}</Text>
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
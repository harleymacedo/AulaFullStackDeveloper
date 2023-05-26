import { View, Text, Image, StyleSheet } from 'react-native'

export default Mural = () => {
    return (
        <View style={styles.container1} >
            <Text style={styles.text1} >Mural</Text>
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
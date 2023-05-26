import { View, Button, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default MenuHome = (props) => {
    <View styles={styles.container1}>
        <Button style={styles.button1}>Disciplinas</Button>
        <Button style={styles.button1}>Professores</Button>
        <Button style={styles.button1}>Eventos e ações</Button>
        <Button style={styles.button1}>Laboratórios de pesquisa</Button>
    </View>
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button1: {
        fontSize: 16,
    }
})
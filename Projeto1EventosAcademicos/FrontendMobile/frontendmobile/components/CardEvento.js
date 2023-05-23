import { View, Text, Modal } from 'react-native'

export default CardEvento = (props) => {
    return (
        <View>
            <Modal>
                <Text>Evento ano {props.ano}</Text>
            </Modal>
        </View>
    )
}
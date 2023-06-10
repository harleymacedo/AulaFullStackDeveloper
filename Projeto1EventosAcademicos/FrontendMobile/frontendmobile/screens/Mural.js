import {SafeAreaView, FlatList, View, Text, StyleSheet} from 'react-native'
import {useState} from 'react'

export default Mural = () => {

    const [noticias, setNoticias] = useState([
        {key: 'Noticia1'},
        {key: 'Noticia2'},
        {key: 'Noticia3'},
        {key: 'Noticia4'},
        {key: 'Noticia5'}
    ])

    return (
        <SafeAreaView style={styles.container1}>
            <Text style={styles.text1} >Mural</Text>
            
            <Text style={styles.text2} >Últimas notícias</Text>
            <FlatList
                style={styles.flatList1}
                data={noticias}
                renderItem={
                    ({item}) => (
                        <Text style={styles.item}> {item.key} </Text>
                    )
                }
            />
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
    },
    flatList1: {
        marginTop: 20
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        backgroundColor: '#80bfff',
        marginTop: 5
      },
})
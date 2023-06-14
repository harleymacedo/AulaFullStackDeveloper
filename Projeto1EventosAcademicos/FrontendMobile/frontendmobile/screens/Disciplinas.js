import {SafeAreaView, FlatList, View, Text, Table, StyleSheet} from 'react-native'
import {useState, useEffect} from 'react'
import DisciplinaCard from '../components/DisciplinaCard'
import axios from 'axios'

export default Disciplinas = () => {

    const [disciplinas, setDisciplinas] = useState([])

    useEffect( () => {
        const carregarDisciplinas = async () => {
            try {
                const disciplinasBuscadas = await axios.get('http://localhost:3000/disciplinas/todas')     
                setDisciplinas(disciplinasBuscadas.data.disciplinas)           
            } catch (error) {
                Alert.alert('Aviso', 'Erro durante a consulta', [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]);
            }
        }
    }, [] )

    return (
        <SafeAreaView style={styles.container1}>
            <Text style={styles.text1} >Disciplinas</Text>
            <Text style={styles.text2} >Lista de disciplinas</Text>
            <FlatList
                style={styles.flatList1}
                data={disciplinas}
                renderItem={
                    ({item}) => (
                        <Text style={styles.item}> {item.key} -  {item.ch} </Text>
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
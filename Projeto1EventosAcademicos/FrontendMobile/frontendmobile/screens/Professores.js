import {SafeAreaView, View, Text, Table, StyleSheet, Alert, TextInput, TouchableOpacity} from 'react-native'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default Professores = () => {

    const [professores, setProfessores] = useState([])
    const [textoBusca, setTextoBusca] = useState('')

    useEffect( () => {
        const fetchDadosProfessores = async () => {
            try {
                const professoresBuscados = await axios.get('http://localhost:3000/professor/todo')
                setProfessores(professoresBuscados.data.professores)
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
        fetchDadosProfessores()
    }, [])
 
    return (
        <SafeAreaView style={styles.container1}>
            <Text style={styles.text1} >Tela de professores</Text>
            <Text style={styles.text2} >Lista de professores</Text>
            <View style={styles.barraBusca}>
                <TextInput style={styles.input1}>Teste</TextInput>
                <TouchableOpacity style={styles.button1}><Text>Buscar</Text></TouchableOpacity>
            </View>
            
            { professores?.map( (professorAtual) => {
                return(
                    <Text key={professorAtual._id}>{professorAtual.nome}</Text>
                )} 
            ) }
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
    barraBusca: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    input1: {
        backgroundColor: '#99ccff',
        width: 200,
        height: 30,
    },
    button1: {
        backgroundColor: '#119922',
        width: 50,
        height: 30,
        borderRadius: 4,
        marginLeft: 5
    }
})
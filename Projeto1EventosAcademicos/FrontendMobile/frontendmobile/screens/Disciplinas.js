import {SafeAreaView, View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import {useState, useEffect} from 'react'
import DisciplinaCard from '../components/DisciplinaCard'
import axios from 'axios'

export default Disciplinas = () => {

    const [disciplinas, setDisciplinas] = useState([])
    const [textoBusca, setTextoBusca] = useState('')

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
        carregarDisciplinas()
    }, [] )

    const atualizarCampoTexto = (text) => {
        setTextoBusca(text)
    }

    const buscarPorNome = async () => {
        try {
            const url = `http://localhost:3000/disciplina/nome/${textoBusca}`
            const professoresBuscados = await axios.get(url)
            console.log(url, professoresBuscados.data.professor)
            setProfessores(professoresBuscados.data.professor)
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

    return (
        <SafeAreaView style={styles.containerPrincipal}>

            <View style={styles.containerCabecalho}>
                <Text style={styles.text1} >Tela de Disciplinas</Text>
                <Text style={styles.text2} >Lista de disciplinas</Text>
            </View>

            <View style={styles.containerBarraBusca}>
                <TextInput style={styles.input1} onChangeText={atualizarCampoTexto}></TextInput>
                <TouchableOpacity style={styles.button1} onPress={buscarPorNome}><Text>Buscar</Text></TouchableOpacity>
            </View>
            
            <View style={styles.containerResultado}>
                { disciplinas ? 
                    disciplinas.map( (disciplinaAtual) => {
                        return(                    
                            <DisciplinaCard key={disciplinaAtual._id} nome={disciplinaAtual.nome} />
                        )}
                    ) : (
                        <Text>Nenhum registro foi encontrado</Text>
                    )
                }
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    containerBarraBusca: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        height: 20,
        width: 300
    },
    containerResultado: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ff8844',
        marginTop: 40,
        height: 400,
        width: 300
    },
    text1: {
        color: '#119922',
        fontFamily: 'Verdana',
        marginTop: 20,
        fontSize: 26,
        textAlign: 'center'
    },
    text2: {
        color: '#119922',
        fontFamily: 'Verdana',
        marginTop: 40,
        fontSize: 20,
        textAlign: 'center'
    },
    input1: {
        backgroundColor: '#99ccff',
        width: 200,
        height: 30
    },
    button1: {
        backgroundColor: '#119922',
        width: 50,
        height: 30,
        borderRadius: 4,
        marginLeft: 5
    }
})
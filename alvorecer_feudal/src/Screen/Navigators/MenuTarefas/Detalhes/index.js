import React from "react";
//import  { Navigation }  from  'react-minimal-side-navigation' ; 
//import  'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css' ;
import {View, Image, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

export default function Detalhes({navigation}){
    return(
        
        <View style ={styles.container}>
            <Text style = {styles.tittle}>Tarefas do Feudo</Text>
            
            <View style={styles.scrollview}>
                <ScrollView>
                    <Text style={styles.tarefas}>Tarefa 1</Text>
                    
                    
                </ScrollView> 

                

            </View>
            
            <TouchableOpacity style={styles.button}>
                <Text>Adicionar tarefa  +</Text>
            </TouchableOpacity>

        </View>
        





    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#8425E3',
        alignItems: 'center',
        //justifyContent: 'center',
        
    },
    
    tittle: {
        fontSize: 40,
        color: '#fff',
        marginBottom: 0,
    },

    scrollview: {
        height: 350,
        width: 370,
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        elevation: 15,
        textAlign: 'center',
        alignItems: 'center', 
    },

    tarefas: {
        backgroundColor: '#6EF46B',
        borderRadius: 20,
        width: 350,
        height: 50,
        textAlign: 'center',
        alignItems: 'center', 
        marginTop: 10,
        justifyContent: 'center',
        paddingTop: 15,
        
    },

    button: {
        height: 50,
        width: 320,
        borderRadius: 20,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6EF46B',
       
    },
})
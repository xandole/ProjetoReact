import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView, StyleSheet, Image, Platform, TextInput } from 'react-native';
import React from 'react';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import axios from 'axios';
import { useState } from 'react';

export default function TabImcScreen() {
    
    const [nome, onChangeText] = React.useState('Useless Name');
    const [idade, onChangeNumber] = React.useState('');

    const [usuario, setUsuario] = useState({
        nome: '',
        idade: 0,
    });
    const handleChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://127.0.0.1:8000/usuarios/&#39;', usuario);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
    };

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
            headerImage={<Image source={require('@/assets/images/atleta.jpeg')} style={styles.headerImage} />
            }
            >
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">IMC</ThemedText>
            </ThemedView>
            <ThemedText>Deseja calcular seu IMC? Informe suas caracteristicas para calcularmos!</ThemedText>
            <SafeAreaView>
                <ThemedText>Nome Completo</ThemedText>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                <ThemedText>Sua Altura</ThemedText>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="useless placeholder"
                    keyboardType="numeric"
                />
                <ThemedText>Seu peso</ThemedText>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="useless placeholder"
                    keyboardType="numeric"
                />
            </SafeAreaView>
        </ParallaxScrollView>
    );
};

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  input: {
    borderRadius: 6,
    fontSize: 21,
    borderWidth: 1,
    padding: 10,
    margin: 12,
    height: 40
  }
});
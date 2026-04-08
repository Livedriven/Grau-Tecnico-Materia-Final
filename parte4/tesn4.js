import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';

export default function App() {
  const [tarefas, setTarefas] = useState([
    { id: '1', texto: 'Estudar React Native' },
  ]);

  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === '') {
      return;
    }

    const nova = {
      id: Date.now().toString(),
      texto: novaTarefa,
    };

    setTarefas([...tarefas, nova]);
    setNovaTarefa('');
  };

  const removerTarefa = (id) => {
    const listaAtualizada = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(listaAtualizada);
  };

  const renderItem = ({ item }) => (
    <View style={styles.tarefaItem}>
      <Text style={styles.tarefaTexto}>{item.texto}</Text>

      <TouchableOpacity
        style={styles.botaoRemover}
        onPress={() => removerTarefa(item.id)}
      >
        <Text style={styles.textoRemover}>🗑</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F6F9" />

      <Text style={styles.titulo}>Lista de Tarefas</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma nova tarefa"
          value={novaTarefa}
          onChangeText={setNovaTarefa}
        />

        <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarTarefa}>
          <Text style={styles.textoBotao}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F9',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A335B',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  botaoAdicionar: {
    backgroundColor: '#3273D1',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  lista: {
    paddingBottom: 20,
  },
  tarefaItem: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  tarefaTexto: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  botaoRemover: {
    marginLeft: 10,
    backgroundColor: '#FF5A5F',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  textoRemover: {
    fontSize: 16,
    color: '#FFF',
  },
});
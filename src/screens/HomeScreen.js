import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

const ExampleAPIs = () => {
    const [todos, setTodos] = useState([]);

    const getTodoData = () => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then((json) => {
                setTodos(json.results);
                console.log(json.results);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    useEffect(() => {
        getTodoData();
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView>
                {todos?.map((todo) => {
                    return (
                        <View style={styles.todo} key={todo.id}>
                            <Text>{todo.name}</Text>
                            <Image source={{ uri: `${todo.image}` }} style={{width: 200, height: 200, borderRadius: 5,}} />
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}

export default ExampleAPIs;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
    },

    todo: {
        width: '100%',
        marginVertical: 16,
        paddingHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        borderRadius: 5,
        backgroundColor: 'lightgreen',
    }
});

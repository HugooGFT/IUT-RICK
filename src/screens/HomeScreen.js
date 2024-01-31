import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image,FlatList, SafeAreaView, Button } from 'react-native';

const ExampleAPIs = () => {
    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1); // Track the current page for pagination

    const getTodoData = () => {
        fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then(response => response.json())
            .then((json) => {
                console.log(json)
                setTodos(prevTodos => [...prevTodos, ...json.results]);
                setPage(prevPage => prevPage + 1);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    useEffect(() => {
        getTodoData();
    }, []);

    const navigation = useNavigation();

    const Item = ({ character }) => {
        const goTo = () => navigation.navigate("Details", {character: character});
        return (
            <View style={styles.todo} key={character.id}>
                <Text style={styles.text}>{character.name}</Text>
                <Image source={{ uri: `${character.image}` }} style={{ width: 200, height: 200, borderRadius: 5, margin: '3%' }} />
                <Button onPress={goTo} title={`Description`} color="#5f9ea0" />
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={{width: 330, height: 120, margin: '3%'}}/>
            <FlatList
                data={todos}
                renderItem={(item) => <Item character={item.item} />}
                keyExtractor={item => item.id.toString()}
                onEndReached={getTodoData} // Call getTodoData when reaching the end of the list
                onEndReachedThreshold={0.1}
            />
        </SafeAreaView>
    );
};

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

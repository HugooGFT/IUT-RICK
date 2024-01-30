import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image } from 'react-native';

const Search = () => {
  const [data, setData] = useState([]);

  const searchUser = async (text) => {
    const url = `https://rickandmortyapi.com/api/character/?page=2&name=${text}`;
    try {
      let result = await fetch(url);
      result = await result.json();
      if (result && result.results) {
        setData(result.results);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View>
      <Text>SearchScreen</Text>
      <TextInput
        placeholder='Search'
        style={{ fontSize: 20, borderWidth: 1, borderColor: 'skyblue', margin: 20 }}
        onChangeText={(text) => searchUser(text)} // Fix: use searchUser instead of SearchScreen
      />

      {/* Display the search results using FlatList */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Image source={{ uri: item.image }} style={{ width: 50, height: 50 }} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Search;

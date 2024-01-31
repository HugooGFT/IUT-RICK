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
      <Text style={{fontSize:20, textAlign: 'center', margin:'5%'}}>Recherche de personnage</Text>
      <TextInput
        placeholder='Search'
        style={{ fontSize: 40, borderWidth: 1, borderColor: 'black', margin: 20 }}
        onChangeText={(text) => searchUser(text)} // Fix: use searchUser instead of SearchScreen
      />

      {/* Display the search results using FlatList */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={{justifyContent: 'center',
          alignItems: 'center',}}>
            <Text style={{textAlign: 'center',marginTop: '5%'}}>{item.name}</Text>
            <Image source={{ uri: item.image }} style={{ width: 200, height: 200 }} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Search;

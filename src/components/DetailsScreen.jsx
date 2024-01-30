import React, { useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';

function DetailCharacters() {
  const route = useRoute();
  const { character } = route.params;

  // Ajoutez un état pour suivre si l'image a été aimée
  const [liked, setLiked] = useState(false);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ alignItems: 'center', padding: 20, backgroundColor: '#e3e3e3', borderRadius: 10, margin: 10 }}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 10 }}
          source={{ uri: character.image }}
        />
        <Text style={{ marginTop: 10 }}>Nom : {character.name}</Text>
        <Text>Statut : {character.status}</Text>
        <Text>Espèce : {character.species}</Text>
        <Text>Localisation : {character.location?.name}</Text>

        {/* Ajoutez un bouton "Like" */}
        <Button
          title={liked ? 'Unlike' : 'Like'}
          onPress={() => setLiked(!liked)}
        />
      </View>
    </View>
  );
}

export default DetailCharacters;
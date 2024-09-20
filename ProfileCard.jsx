import { View, Text } from 'react-native'
import React from 'react'

        const ProfileCard = ({ imageUri, name, nickname, onPressFollow }) => (
  <View style={{ paddingLeft: 16 }}>
    <View style={{ flexDirection: "row", marginTop: 20 }}>
      <Image
        source={{ uri: imageUri }}
        style={{ height: 50, width: 50, borderRadius: 100 }}
        alt="profile"
      />
      <View style={{ paddingLeft: 18, flexDirection: "row", alignItems: "center" }}>
        <View>
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "black" }}>{name}</Text>
          <Text style={{ fontSize: 13 }}>{nickname}</Text>
        </View>
        <View style={{ marginLeft: 'auto' }}>
          <Button title="Follow" color="red" onPress={onPressFollow} />
        </View>
      </View>
    </View>
  </View>
);
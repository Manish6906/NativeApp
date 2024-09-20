import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import React from 'react';

// ProfileCard component
const ProfileCard = ({ imageUri, name, nickname, onPressFollow }) => (
  <View style={{ paddingHorizontal: 6 }}>
    <View style={{ paddingLeft: 16 }}>
      <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
        <Image
          source={{ uri: imageUri }}
          style={{ height: 50, width: 50, borderRadius: 100 }}
          alt="profile"
        />
        {/* Make this View flex: 1 to expand and take up remaining space */}
        <View style={{ paddingLeft: 18, flex: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "black" }}>{name}</Text>
          <Text style={{ fontSize: 13 }}>{nickname}</Text>
        </View>
        {/* Use marginLeft: 'auto' to align the button to the right */}
        <View style={{ marginLeft: 'auto', padding: 2 }}>
          <TouchableOpacity style={styles.followButton} onPress={onPressFollow}>
            <Text style={styles.followButtonText}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);

const App = () => {
  const profiles = [
    {
      imageUri: 'https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg',
      name: 'Rohit Sharma',
      nickname: 'Mani',
    },
    {
      imageUri: 'https://img.freepik.com/free-photo/hopeful-worried-man-bite-lip-smiling-silly_176420-17940.jpg',
      name: 'Harsh Sharma',
      nickname: 'Harshu',
    },
    {
      imageUri: 'https://img.freepik.com/free-photo/portrait-young-confused-dark-skinned-handsome-man-with-afro-hairstyle-checkered-shirt-holding-head-with-hand-looking-aside-with-satisfied-expression-know-what-with-debts_176420-11103.jpg',
      name: 'Vikas',
      nickname: 'Vicky',
    },
    {
      imageUri: 'https://img.freepik.com/free-photo/portrait-funny-happy-male-student-eyeglasses_171337-9139.jpg',
      name: 'Sahil Thakur',
      nickname: 'Chotu',
    },
    {
      imageUri: 'https://img.freepik.com/free-photo/close-up-photo-serious-young-guy-checkered-shirt-pointing-with-two-fingers_171337-8990.jpg',
      name: 'Abhishek Sharma',
      nickname: 'Abhi',
    },
    {
      imageUri: 'https://img.freepik.com/free-photo/close-up-portrait-young-man-isolated-black-studio-background-photoshot-real-emotions-male-model-crying-throught-laughting-smiling-facial-expression-human-emotions-concept_155003-25587.jpg',
      name: 'Sohil',
      nickname: 'Taru',
    },
    {
      imageUri: 'https://img.freepik.com/free-photo/close-up-portrait-young-man-isolated-black-studio-background_155003-23972.jpg',
      name: 'Manvinder Singh',
      nickname: 'Jass',
    },
    {
      imageUri: 'https://img.freepik.com/free-photo/portrait-young-confident-businessman-wearing-glasses_158595-5360.jpg',
      name: 'Nitin Sharma',
      nickname: 'Ravi',
    },
    {
      imageUri: 'https://img.freepik.com/free-photo/portrait-young-confident-businessman-wearing-glasses_158595-5360.jpg',
      name: 'Sudhanshu Sharma',
      nickname: 'Sidh',
    },
    {
      imageUri: 'https://img.freepik.com/free-photo/portrait-young-confident-businessman-wearing-glasses_158595-5360.jpg',
      name: 'Mukesh Sharma',
      nickname: 'Mani',
    },
  ];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 16 }}>
        <Text style={{ color: "black" }}>Cancel</Text>
        <Text style={{ color: "red" }}>Next</Text>
      </View>

      <View style={{ paddingLeft: 16 }}>
        <Text style={{ fontSize: 17, color: "black", fontWeight: "bold" }}>Find Friends</Text>
      </View>

      <View style={{ flexDirection: "row", marginTop: 16, paddingHorizontal: 16 }}>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            flex: 1,
            paddingHorizontal: 10,
            borderRadius: 8,
          }}
          placeholder="Search"
          placeholderTextColor="gray"
        />
      </View>

      {/* Render Profile Cards */}
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          imageUri={profile.imageUri}
          name={profile.name}
          nickname={profile.nickname}
          onPressFollow={() => alert(`Followed ${profile.name}`)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  followButton: {
    backgroundColor: 'white',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  followButtonText: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;

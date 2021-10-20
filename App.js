import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import AboutUsPage from './aboutUsPage';

 import HomePage from './homePage';
import LoginPage from './LoginPage';
 import PostsPage from './postsPage';
import ProfileInfoPage from './profileInfoPage';
 import ProfilePage from './profilePage';
 import SearchPage from './searchPage';



export default function App() {
  return (
    <View style={styles.container}>
    <LoginPage/>
    <AboutUsPage/>
    <PostsPage/>
    <HomePage/>
    <ProfilePage/>
    <SearchPage/>

    <ProfileInfoPage/>

   

    {/* <AddPostPage/>
    
     
    
     
     
     
      */}


   
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native"
import { setupPlayer , addTrack } from "./src/MusicService";
import { useEffect, useState } from "react";
import MusicPlayer from "./src/Screens/MusicPlayer";

const Sportify = () => {

    const [playerReady , setPlayerReady] = useState(false)

    async function setup() {
        let isSetup = await setupPlayer()

        if(isSetup){
            await addTrack()
        }

        setPlayerReady(isSetup)
    }

    useEffect(() => {
        setup()
    },[])

    if(!playerReady){
        return(
            <SafeAreaView>
                <ActivityIndicator />
            </SafeAreaView>
        )
    }

    return (
        <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <MusicPlayer />
      </View>
    )
   
    
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      height:760
    }
  });

export default Sportify;

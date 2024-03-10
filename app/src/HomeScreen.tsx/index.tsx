import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import { styles } from "./styles";
const HomeScreen = () => {
  const animation = useRef<LottieView>(null); //Manage animation with a reference
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#eee",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("../../../assets/NetflixLottie.json")}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Play"
          onPress={() => {
            animation.current?.play();
          }}
        />
        <Button
          title="Pause"
          onPress={() => {
            animation.current?.pause();
          }}
        />
        <Button
          title="Reset"
          onPress={() => {
            animation.current?.reset();
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

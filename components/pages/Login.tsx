import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";


const App = () => {

  const [username, setUsername] = useState("");
  const [password, setEmail] = useState("");

  // Login simulation function
  const simulateLogin = (user: string, pass: string): boolean => {
    if (user === "admin" && pass === "admin123@gmail.com") {
      return true;
    } else {
      throw new Error("Error Alert: Incorrect username or email!");
    }
  };

  // Login handler
  const handleLogin = () => {
    console.log("Login button pressed.");
    try {
      const result = simulateLogin(username, password);
      console.log("Result:", result);
      if (result) {
        Alert.alert("Success", "Login completed successfully!", [
          { text: "OK", onPress: () => console.log("Alert: Login completed successfully!") },
        ]);
      }
    } catch (error: any) {
      Alert.alert("Error", error.message, [
        { text: "OK", onPress: () => console.log("Wrong Info") },
      ]);
    } finally {
      console.log("Finally: Process ended!");
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        placeholderTextColor="#666666"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#666666"
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#6a6a6a",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: "black",
    fontSize: 16,
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#007bff",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default App;

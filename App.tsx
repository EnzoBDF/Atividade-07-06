import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function Screen2({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Esta é a tela 2</Text>
      <Button
        title="Ir para a tela 3"
        onPress={() => navigation.navigate('Tela3')}
        
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
function Screen3({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Esta é a tela 3</Text>
      <Button
        title="Ir para o início"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}



function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title='Ir para Tela 2'
      onPress={() => navigation.navigate('Tela2')}/>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Tela2" component={Screen2} />
        <Stack.Screen name="Tela3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

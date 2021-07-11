import React from "react";
import { StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// importando as telas para app para criar as rotas das padinas
import TelaInicial from "./components/TelaInicial/index";
import Trilogia1 from "./components/TelaTrilogia1/index";
import Trilogia2 from "./components/TelaTrilogia2/index";
import Trilogia3 from "./components/TelaTrilogia3/index";

//criando uma contante que ira receber a função da navegação, componente vindo do react
const Stack = createStackNavigator();

export default function App() {
  return ( //criando as rotas com os components navigaitorContainer e Stack.navigator
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela inicial" component={TelaInicial} />
        <Stack.Screen name="Trilogia 1" component={Trilogia1} />
        <Stack.Screen name="Trilogia 2" component={Trilogia2} />
        <Stack.Screen name="Trilogia 3" component={Trilogia3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";

import { MessageCentre } from "./MessageCentre";

import { couleurs } from "./Theme";
import { useEffect, useLayoutEffect, useState } from "react";
import { UnVoyage } from "./UnVoyage";
import { createStackNavigator } from "@react-navigation/stack";

const ListerVoyages = ({ navigation, voyages, goToVoyage }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Voyages",
      headerTitleStyle: {
        color: "white",
        fontSize: 20,
        fontWeight: "400",
      },
    });
  }, [navigation]);

  // TODO implémenter la navigation vers la page de détail d'un voyage
  return (
    <ScrollView contentContainerStyle={[!voyages.length && { flex: 1 }]}>
      <View style={[!voyages.length && { justifyContent: "center", flex: 1 }]}>
        {!voyages.length && <MessageCentre message="Pas encore de voyage !" />}
        {voyages.map((voyage, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => goToVoyage(voyage)}
          >
            <View style={styles.conteneurVoyage}>
              <Text style={styles.ville}>{voyage.ville}</Text>
              <Text style={styles.pays}>{voyage.pays}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  conteneurVoyage: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: couleurs.primaire,
  },
  ville: {
    fontSize: 20,
  },
  pays: {
    color: "rgba(0, 0, 0, .5)",
  },
});

const Stack = createStackNavigator();

export function Voyage({ voyages, navigation, onAjouterLieu }) {
  const [currentVoyage, setCurrentVoyage] = useState(undefined);

  const goToVoyage = (voyage) => {
    setCurrentVoyage(voyage);
    navigation.navigate("Detail");
  };

  useEffect(() => {
    if (currentVoyage) {
      const newCurrent = voyages.find((v) => v.id === currentVoyage.id);
      setCurrentVoyage(newCurrent);
    }
  }, [voyages]);

  return (
    <Stack.Navigator>
      <Stack.Screen name="Lister">
        {(props) => (
          <ListerVoyages
            {...props}
            voyages={voyages}
            goToVoyage={(voyage) => goToVoyage(voyage)}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Detail">
        {(props) => (
          <UnVoyage
            {...props}
            voyage={currentVoyage}
            onAjouterLieu={(lieu) => onAjouterLieu(currentVoyage, lieu)}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

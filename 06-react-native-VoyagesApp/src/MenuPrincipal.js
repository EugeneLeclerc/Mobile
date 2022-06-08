import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Voyage } from "./ListerVoyages";
import { AjouterVoyage } from "./AjouterVoyage";

export const Tab = createBottomTabNavigator();

export function MyTabs({ voyages, onAjouterVoyage, onAjouterLieu }) {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Voyages">
          {(props) => (
            <Voyage
              {...props}
              voyages={voyages}
              onAjouterLieu={onAjouterLieu}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="AjouterVoyage">
          {(props) => (
            <AjouterVoyage {...props} onAjouterVoyage={onAjouterVoyage} />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

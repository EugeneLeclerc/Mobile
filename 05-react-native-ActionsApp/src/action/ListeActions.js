import React from "react";
import { View } from "react-native";
import { UneAction } from "./UneAction";

export const ListeActions = ({
  actions,
  terminerAction,
  supprimerAction,
  filter,
}) => {
  return (
    <View>
      {actions
        .filter((a) => {
          if (filter === "Actives") return !a.done;
          else if (filter === "Terminées") return a.done;
          else return true;
        })
        .map((action, index) => (
          <UneAction
            action={action}
            terminerAction={() => terminerAction(action)}
            supprimerAction={() => supprimerAction(action)}
            key={index}
          />
        ))}
    </View>
  );
};

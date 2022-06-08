import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'
import uuidV4 from 'uuid/v4'
import {couleurs} from "./Theme";
import {useState} from "react";

export const AjouterVoyage = () => {

    const [ville, setVille] = useState('')
    const [pays, setPays] = useState('')

    const ajouter = () => {
        if (ville === '' || pays === '') alert('Veuillez remplir le formulaire')
        const voyage = {
            ville: ville,
            pays: pays,
            id: uuidV4(),
            lieux: []
        }

        // TODO propager l'événement d'ajout d'un nouveau voyage pour alimenter l'état (App.js)

        setVille('')
        setPays('')

        // TODO une fois l'état mis à jour, rediriger l'utilisateur vers la liste des voyages
    }


    return (
        <View style={styles.conteneur}>
            <Text style={styles.entete}>Voyages</Text>
            <TextInput
                placeholder='Quelle ville ?'
                onChangeText={val => setVille(val)}
                style={styles.saisie}
                value={ville}
            />
            <TextInput
                placeholder='Quel pays ?'
                onChangeText={val => setPays(val)}
                style={styles.saisie}
                value={pays}
            />
            <TouchableOpacity onPress={() => ajouter}>
                <View style={styles.bouton}>
                    <Text style={styles.texteBouton}>Ajouter une ville</Text>
                </View>
            </TouchableOpacity>
        </View>
    )

}


const styles = StyleSheet.create({
    bouton: {
        height: 50,
        backgroundColor: '#666',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    texteBouton: {
        color: 'white',
        fontSize: 18
    },
    entete: {
        color: 'white',
        fontSize: 40,
        marginBottom: 10,
        alignSelf: 'center'
    },
    conteneur: {
        backgroundColor: couleurs.primaire,
        flex: 1,
        justifyContent: 'center'
    },
    saisie: {
        margin: 10,
        backgroundColor: 'white',
        paddingHorizontal: 8,
        height: 50
    }
})

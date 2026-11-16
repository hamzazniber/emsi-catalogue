import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { articles, calculerTTC } from "../data/articles";
export default function Details() {
  // 1. Récupérer le code de l'article
  const { code } = useLocalSearchParams();

  // 2. Rechercher l'article
  const article = articles.find(a => a.code === code);
  
  // 3. Mémoriser la quantité
const [quantite, setQuantite] = useState(1);

 const [remise, setRemise] = useState(1);

 
useEffect(() => {
  if (article && calculerTTC(article) * quantite > 1000) {
    Alert.alert("Attention", "Le total dépasse 1000 DH !");
  }
},[]);


  // Si l'article n'existe pas
  if (!article) {
    return <Text>Article introuvable</Text>;
  }

  const sousTotal = calculerTTC(article) * quantite;
  const total = Math.max(0, sousTotal - remise);

  // 4. Calculer le prix total
  

  return (
    <View style={styles.container}>

      <Text style={styles.titre}>
        {article.nom}
      </Text>

      <Text>Code : {article.code}</Text>
      <Text>Marque : {article.marque}</Text>
      <Text>Unité : {article.unite}</Text>
      <Text>Prix HT : {article.prixHT} MAD</Text>
      <Text>TVA : {article.tva}%</Text>
      <Text style={styles.prix}>
        Prix TTC : {calculerTTC(article)} MAD
      </Text>

      <Text style={styles.quantite}>
        Quantité : {quantite}
      </Text>
      <Text>Remise : {remise.toFixed(2)} MAD</Text>
      <View style={styles.boutons}>

        <Button
          title="-"
          onPress={() =>
            setQuantite(Math.max(1, quantite - 1))
          }
        />

        <Button
          title="+"
          onPress={() => setQuantite(quantite + 1)}
        />
        <Button
        title="Augmenter remise"
        onPress={() => setRemise(r => r + 10)}
      />
      </View>

      <Text style={styles.total}>
        Sous-total TTC : {sousTotal.toFixed(2)} MAD
      </Text>
      <Text style={styles.total}>
        Total après remise : {total.toFixed(2)} MAD
      </Text>

      <Button
        title="Retour au catalogue"
        onPress={() => router.back()}
      />

    </View>
    
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F3F6FA"
  },

  titre: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },

  prix: {
    fontSize: 18,
    marginTop: 15
  },

  quantite: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 15
  },

  boutons: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 25
  },

  total: {
    fontSize: 22,
    fontWeight: "bold",
    color: "green",
    marginBottom: 25
  }

});

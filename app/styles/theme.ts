export const theme = {
  colors: {
    background: "#121212",
    primary: "#00B3CC", // Couleur néon principale
    secondary: "#D63A1E", // À utiliser pour alertes ou highlights spécifiques
    gold: "#FFB300", // Pour trophées et récompenses
    textPrimary: "#E0E0E0",
    textSecondary: "#A0A0A0",
    textAccent: "#00FFFF", // Données clés (ajuster si trop flashy)
    success: "#00FF99", // Optionnel : vert pour succès (à voir selon besoins)
    warning: "#FFA500", // Optionnel : orange pour avertissements
    buttonGradient: ["#121212", "#00FFFF"], // Dégradé pour les boutons
  },
};

// Fond principal : #121212

// Couleurs néon dynamiques (pour accents, boutons, indicateurs) : #00B3CC et #D63A1E (mais lui sai sas encore sur quoi  l'utilliser)

// Éléments dorés high-tech (pour trophées, succès, récompenses) : #FFB300 (ici je me demane le faite d'avoir une coueleur néon dynamique sur une page et sur la page des throphe par exemple une couleru dorés high-tech si c'est pas un probleme vu qu'on change drastiquement vers une autre couleur

// Texte & contrastes intelligents : #E0E0E0

// Secondaire (descriptions, éléments secondaires) : #A0A0A0

// Textes accentués (pour les données clés) : cyan

// Ta palette est bien pensée, futuriste et adaptée au mode sombre. Quelques remarques pour l’optimiser :

// ✅ Cohérence doré vs néon :

// Pas de souci d’avoir le doré pour les trophées et du néon ailleurs. Ça renforce l’effet "récompense spéciale".
// Tu peux ajouter des transitions douces ou des petites touches de doré ailleurs pour éviter une coupure trop brutale.
// ✅ Le rouge néon (#D63A1E) :

// Utilisation suggérée : alertes, erreurs, boutons de confirmation critique (ex : "Supprimer un entraînement").
// Sinon, tu peux tester un dégradé entre le cyan et l'orange pour un effet plus fluide.
// ✅ Texte accentué en cyan :

// Bonne idée ! Si c’est un cyan pur (#00FFFF), peut-être le foncer légèrement pour éviter qu'il ne ressorte trop agressivement.

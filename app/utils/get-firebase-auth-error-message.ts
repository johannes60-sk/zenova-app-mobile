export const getFirebaseAuthErrorMessage = (errorCode: string): string => {
  const errorMessages: Record<string, string> = {
    "auth/invalid-credential":
      "Les informations d'identification ne sont pas valides",
    "auth/email-already-in-use": "Cet email est déjà utilisé",
    "auth/user-not-found": "Aucun utilisateur trouvé avec cet email",
    "auth/wrong-password": "Mot de passe incorrect",
    // "auth/invalid-email": "Email invalide",
    "auth/user-disabled": "Ce compte a été désactivé",
    "auth/too-many-requests": "Trop de tentatives. Réessayez plus tard.",
  };

  return errorMessages[errorCode] || "Une erreur inconnue est survenue";
};

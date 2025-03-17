import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { ThemeProps } from "../types/theme";

export const Container = styled.View`
  flex: 1;
  backgroundcolor: ${(props: ThemeProps) => props.theme.colors.background};
`;

// Titre futuriste avec effet glow
export const SectionTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${(props: ThemeProps) => props.theme.colors.textPrimary};
`;

// Bouton CTA(Call To Action) avec dégradé dynamique 
export const GradientCtaButton = styled(LinearGradient).attrs(
  (props: ThemeProps) => ({
    colors: props.theme.colors.buttonGradient,
    start: { x: 0, y: 1 },
    end: { x: 1, y: 0 },
  })
)`
  padding: 10px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const Button = styled(LinearGradient).attrs(
  (props: ThemeProps) => ({
    colors: props.theme.colors.buttonGradient,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
  })
)``;

// Texte du bouton
export const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${(props: ThemeProps) => props.theme.colors.textPrimary};
`;

import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Container, Icon, type ButtonIconTypesStyleProps } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypesStyleProps; 
}

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest}: Props) {
  return (
    <Container {...rest}>
      <Icon 
      name={icon}
      type={type}
      />
    </Container>
  );
}
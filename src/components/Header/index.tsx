import logoImg from '@assets/logo.png';
import { Container, Logo,BackButton, BackIcon } from './styles';
type Props = {
  showBackButton?: boolean;
}
import { useNavigation } from '@react-navigation/native';

export function Header({ showBackButton= false }: Props) {

  const navigation = useNavigation();

  function handleGoBack() {
    //navigation.goBack(); - Volta para a tela anterior
    navigation.navigate('groups'); // Volta para a tela inicial
  }

  return (
    <Container>

     { showBackButton && 
     <BackButton onPress={handleGoBack}>
          <BackIcon/>
      </BackButton>
      }

      <Logo source={logoImg} />
    </Container>
  );
}
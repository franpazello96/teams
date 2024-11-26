import { Button } from "@components/Button";
import { Container, Content, Icon} from "./styles";
import { Header } from "@components/Header";
import { Hightlight } from "@components/Hightlight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupCreate } from "@storage/group/groupCreate";

export function NewGroup() {

  const [group, setGroup] = useState('');

  const navigation = useNavigation();
  
  async function handleNew() {
    try{
      await groupCreate(group);
      //navigation.goBack(); - Volta para a tela anterior
      navigation.navigate('players', { group }); // Volta para a tela inicial
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <Container >
      <Header showBackButton/>
      <Content>
        <Icon />

        <Hightlight
        title="Nova Turma"
        subtitle="Crie uma nova turma para começar a as pessoas"
        />

      <Input 
      placeholder="Nome da turma" 
      onChangeText={setGroup}
      />

      <Button 
      title="Criar" 
      style={{marginTop: 20}} 
      onPress={handleNew}
      />

      </Content>
    </Container>
  );
}

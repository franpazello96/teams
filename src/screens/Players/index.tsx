import { Header } from "@components/Header";
import { Container, Form, HeaderList, NumbersOfPlayers} from "./styles";
import { Hightlight } from "@components/Hightlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useRoute } from "@react-navigation/native";

type RouteParams = {
  group: string;
}

export function Players() {
  
  const [team, setTeam ]= useState('TimeA');
  const [players, setPlayers] = useState([]);
  
  const route = useRoute();
  const { group } = route.params as RouteParams;

  return (
    <Container>
      <Header showBackButton/>
      <Hightlight 
        title={ group }
        subtitle="Adicione a galera e separe os times"
      />
      <Form>
      <Input 
        placeholder="Nome da Pessoa"
        autoCorrect={false}
      />
      <ButtonIcon 
        icon="add"
      />
      </Form>
      <HeaderList>
            <FlatList 
              data={['TimeA', 'TimeB']}
              keyExtractor={item => item}
              renderItem={({ item }) => (
                  <Filter 
                    title={item}       
                    isActived={item === team}
                    onPress={() => setTeam(item)}
                  />
                )}
                horizontal
            />
            <NumbersOfPlayers>
              {players.length} 
            </NumbersOfPlayers>
      </HeaderList>
      <FlatList
        data= {players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard 
          name={item}
          onRemove={()=> {}
          }/>
        )}
        ListEmptyComponent={() => (
            <ListEmpty 
              message="Nenhuma pessoa cadastrada"
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            { paddingBottom: 100}, 
            players.length === 0 && {flex: 1}
          ]}
        />      
        <Button 
        title='Remover turma'
        type="SECONDARY"
        />
    </Container>
  );
}

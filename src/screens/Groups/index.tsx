import { Header } from '@components/Header';
import { Hightlight } from '@components/Hightlight';
import { useState, useCallback } from 'react';
import { Container } from './styles';
import { FlatList } from 'react-native';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { groupsGetAll } from '@storage/group/groupsGetAll';

export function Groups() {

  const [groups, setGroups] = useState<string[]>([
  'Turma 1',
  ]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new');
  }

  async function fetGroups() {
    //listar os grupos 
    try{
     const data = await groupsGetAll();
     setGroups(data);
     
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(useCallback(() => {
    fetGroups();
  }, []));

  return (
    <Container >
      <Header />
      <Hightlight 
        title='Turmas'
        subtitle='Jogue com a sua turma'
      />
      <FlatList
        data={groups}
        keyExtractor={item => item} 
        renderItem={({item}) => (
          <GroupCard 
          title={item} 
          />
        )}
        contentContainerStyle={    
          groups.length === 0 && { flex: 1 }
      }
        ListEmptyComponent={
          () => <ListEmpty 
          message='Que tal cadastrar a primeira turma?' 
          />}
      />
      <Button 
      title='Criar nava turma'
      onPress={handleNewGroup}
      />
    </Container>
  );
}

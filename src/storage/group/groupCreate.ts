import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '@storage/storageConfig';
import { groupsGetAll } from './groupsGetAll';

export async function groupCreate(newGroup: string) {
  try{
    
    //buscar as informacoes no dispositivo do usuario 
    const storedGroups = await groupsGetAll();

    const storage = JSON.stringify([...storedGroups,  newGroup]);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
    
  }catch(error){
    throw error;
  }
}
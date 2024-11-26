import { ThemeProvider } from 'styled-components';
import { Groups } from '@screens/Groups';
import theme from './src/theme';
import {useFonts, Roboto_400Regular, Roboto_700Bold} 
from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular, 
    Roboto_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
    <StatusBar 
    style="light" 
    backgroundColor="transparent"
    translucent
    />
    { fontsLoaded ? <  Routes /> : <Loading /> }
    </ThemeProvider>
  );
}


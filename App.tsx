import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';

import SplashScreen from './src/screens/SplashScreen';
import { AppNavigation } from './src/navigation';
import { queryClient } from './src/api/queryClient';
import { SafeAreaContainer } from './src/containers/SafeAreaContainer';

import './global.css';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 500);
  }, []);

  if (!isReady) {
    return <SplashScreen />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaContainer>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </SafeAreaContainer>
    </QueryClientProvider>
  );
}

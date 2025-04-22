import { PropsWithChildren } from 'react';
import { Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface SafeAreaContainerProps extends PropsWithChildren {
  className?: string;
}

export const SafeAreaContainer = ({ children, className = '' }: SafeAreaContainerProps) => {
  const containerStyle = Platform.select({
    ios: 'flex-1 bg-green-300 pt-0', 
    android: 'flex-1 bg-yellow-100 pt-0', // Add padding top if needed
  });

  return (
    (<SafeAreaView className={`flex-1 bg-white ${containerStyle}`}>
      <View className={`flex-1 ${className}`}>{children}</View>
    </SafeAreaView>)
  );
};

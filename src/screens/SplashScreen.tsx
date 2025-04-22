import { Image, View } from "react-native";

export default function SplashScreen() {
  return (
    <View className="flex-1 justify-center items-center w-full h-full">
      <Image
        source={require("../assets/icons/hexagon.png")}
        className="w-full h-full"
      />
    </View>
  );
}

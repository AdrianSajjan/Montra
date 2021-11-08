import * as React from "react";
import colors from "@theme/colors";
import { Box } from "@components/Layout";
import { Typography } from "@components/Typography";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { carousel, OnboardCarousel } from "@constants/onboard";
import { PrimaryButton, SecondaryButton } from "@components/Buttons";
import { Image, ListRenderItem, ScrollView, StyleSheet, useWindowDimensions } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

interface DotProps {
  index: number;
  scrollX: Animated.SharedValue<number>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors["light-100"],
  },
  content: {
    flexGrow: 1,
    paddingTop: 64,
    paddingBottom: 36,
  },
  center: {
    textAlign: "center",
  },
  dots: {
    width: 12,
    height: 12,
    borderRadius: 12,
    marginHorizontal: 4,
  },
});

const Dots = ({ index, scrollX }: DotProps) => {
  const { width } = useWindowDimensions();

  const activeColor = colors["violet-100"];
  const inactiveColor = colors["violet-40"];

  const input = carousel.map((_, i) => i * width);

  const backgroundOutput = carousel.map((_, i) => (i === index ? activeColor : inactiveColor));

  const scaleOutput = carousel.map((_, i) => (i === index ? 1 : 0.5));

  const style = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(scrollX.value, input, backgroundOutput, "RGB") as string;
    const scale = interpolate(scrollX.value, input, scaleOutput);
    return {
      backgroundColor,
      transform: [{ scale }],
    };
  });

  return <Animated.View style={[styles.dots, style]} />;
};

export default function OnboardScreen() {
  const { width } = useWindowDimensions();

  const scrollX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(({ contentOffset: { x } }) => {
    scrollX.value = x;
  });

  const renderItem: ListRenderItem<OnboardCarousel> = ({ item: { image, text, title } }) => {
    return (
      <Box alignItems="center" width={width} paddingHorizontal={24}>
        <Image source={image} />
        <Box marginVertical={12} />
        <Typography variant="title-1" style={styles.center}>
          {title}
        </Typography>
        <Box marginVertical={8} />
        <Typography color="dark-25" style={styles.center}>
          {text}
        </Typography>
      </Box>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Box flex={1} justifyContent="space-between">
          <Box>
            <AnimatedFlatList
              horizontal
              data={carousel}
              pagingEnabled
              decelerationRate="fast"
              renderItem={renderItem}
              onScroll={scrollHandler}
              keyExtractor={(data) => data.id}
              showsHorizontalScrollIndicator={false}
            />
            <Box flexDirection="row" alignItems="center" justifyContent="center" marginTop={36}>
              {carousel.map(({ id }, index) => (
                <Dots key={id} index={index} scrollX={scrollX} />
              ))}
            </Box>
          </Box>
          <Box paddingHorizontal={24}>
            <PrimaryButton title="Sign Up" />
            <Box marginVertical={12} />
            <SecondaryButton title="Login" />
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}

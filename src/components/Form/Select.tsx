import * as React from "react";
import colors from "@theme/colors";
import { Portal } from "@gorhom/portal";
import { Box } from "@components/Layout";
import { Typography } from "@components/Typography";
import { ArrowDownIcon, SuccessIcon } from "@components/Icons";
import BottomSheet, { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetFlatList, BottomSheetProps } from "@gorhom/bottom-sheet";
import type { LayoutChangeEvent, ListRenderItem, TextInputProps, ViewStyle } from "react-native";
import { Pressable, StyleProp, StyleSheet, TextInput, View, useWindowDimensions, TouchableOpacity } from "react-native";

type Item = {
  value: string;
  label: string;
};

interface Props extends Omit<TextInputProps, "placeholderTextColor" | "style" | "secureTextEntry" | "onChange" | "onChangeText"> {
  value?: string;
  list: Array<Item>;
  onChange?: Function;
  style?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pressable: {
    height: 56,
    borderWidth: 1,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors["light-20"],
  },
  input: {
    marginHorizontal: 16,
    flex: 1,
    fontFamily: "Inter-Regular",
    fontSize: 16,
    color: colors["dark-50"],
  },
  overlay: {
    height: 350,
    elevation: 2,
    maxHeight: 350,
    borderRadius: 16,
    position: "absolute",
    backgroundColor: colors["light-100"],
  },
  scroll: {
    flexGrow: 1,
  },
  handle: {
    backgroundColor: colors["violet-60"],
  },
  item: {
    height: 48,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  list: {
    paddingTop: 12,
    paddingLeft: 20,
    paddingRight: 18,
  },
});

export default function Select({ style, onChange, list, value, ...rest }: Props) {
  const { height } = useWindowDimensions();
  const ref = React.useRef<BottomSheet>(null);
  const [layout, setLayout] = React.useState(0);

  const snapPoints = React.useMemo(() => [height / 2, height], []);

  const input = React.useMemo(
    () =>
      list
        .filter((item) => item.value === value)
        .slice(-1)
        .pop()?.label || "",
    [value]
  );

  const openBottomSheet = React.useCallback(() => {
    if (layout > 0) {
      const snapHeight = layout * list.length + 56;
      console.log(snapHeight, height / 2);
      ref?.current?.snapToPosition(snapHeight);
    } else {
      ref?.current?.snapToIndex(0);
    }
  }, [layout]);

  const onLayout = (event: LayoutChangeEvent) => {
    event.persist();
    setLayout(event.nativeEvent.layout.height);
  };

  const renderItem: ListRenderItem<Item> = ({ item }) => {
    const handleChange = () => onChange?.(item.value);

    return (
      <TouchableOpacity style={styles.item} activeOpacity={0.6} onPress={handleChange} onLayout={onLayout}>
        <Typography variant="regular-1">{item.label}</Typography>
        {value === item.value && <SuccessIcon fill="#5233FF" size={32} />}
      </TouchableOpacity>
    );
  };

  const renderBackdrop = (props: BottomSheetBackdropProps) => {
    return <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} opacity={0.6} />;
  };

  const bottomSheet: Omit<BottomSheetProps, "children"> = {
    backdropComponent: renderBackdrop,
    enablePanDownToClose: true,
    index: -1,
    snapPoints: snapPoints,
    handleIndicatorStyle: styles.handle,
  };

  return (
    <View style={[styles.container, style]}>
      <Pressable style={styles.pressable} onPress={openBottomSheet}>
        <TextInput style={styles.input} placeholderTextColor={colors["dark-25"]} value={input} editable={false} {...rest} />
        <Box paddingRight={16}>
          <ArrowDownIcon fill={colors["dark-25"]} size={30} />
        </Box>
      </Pressable>
      <Portal>
        <BottomSheet ref={ref} {...bottomSheet}>
          <BottomSheetFlatList data={list} renderItem={renderItem} contentContainerStyle={styles.list} />
        </BottomSheet>
      </Portal>
    </View>
  );
}

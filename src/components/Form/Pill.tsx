import * as React from "react";
import colors from "@theme/colors";
import { Portal } from "@gorhom/portal";
import { Box } from "@components/Layout";
import { Typography } from "@components/Typography";
import { ArrowDownIcon, SuccessIcon } from "@components/Icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LayoutChangeEvent, ListRenderItem, Pressable, StyleSheet, useWindowDimensions, View } from "react-native";
import BottomSheet, { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetFlatList, BottomSheetProps } from "@gorhom/bottom-sheet";

type Item = {
  value: string;
  label: string;
};

interface PillProps {
  label?: string;
  value?: string;
  list: Array<Item>;
  onChange?: Function;
  borderColor?: keyof typeof colors;
  textColor?: keyof typeof colors;
  iconColor?: keyof typeof colors;
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderWidth: 1,
    borderRadius: 40,
    paddingLeft: 12,
    paddingRight: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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

const Pill: React.FC<PillProps> = ({ list, onChange, value, borderColor, iconColor, textColor, label }) => {
  const { height } = useWindowDimensions();
  const ref = React.useRef<BottomSheet>(null);
  const [layout, setLayout] = React.useState(0);

  const snapPoints = React.useMemo(() => [height / 4, height / 2, height], []);

  const input = React.useMemo(
    () =>
      list
        .filter((item) => item.value === value)
        .slice(-1)
        .pop()?.label || label,
    [value]
  );

  const openBottomSheet = React.useCallback(() => {
    if (layout > 0) {
      const snapHeight = layout * list.length + 56;
      ref?.current?.snapToPosition(snapHeight);
    } else {
      ref?.current?.snapToIndex(1);
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
    return <BottomSheetBackdrop {...props} disappearsOnIndex={0} opacity={0.6} />;
  };

  const bottomSheet: Omit<BottomSheetProps, "children"> = {
    backdropComponent: renderBackdrop,
    enablePanDownToClose: true,
    index: -1,
    snapPoints: snapPoints,
    handleIndicatorStyle: styles.handle,
  };

  return (
    <View>
      <Pressable style={[styles.container, { borderColor: colors[borderColor!] }]} onPress={openBottomSheet}>
        <ArrowDownIcon fill={colors[iconColor!]} size={24} />
        <Box marginHorizontal={2} />
        <Typography color={textColor} variant="regular-3">
          {input}
        </Typography>
      </Pressable>
      <Portal>
        <BottomSheet ref={ref} {...bottomSheet}>
          <BottomSheetFlatList data={list} renderItem={renderItem} contentContainerStyle={styles.list} />
        </BottomSheet>
      </Portal>
    </View>
  );
};

Pill.defaultProps = {
  borderColor: "light-20",
  iconColor: "violet-100",
  textColor: "dark-50",
};

export default Pill;

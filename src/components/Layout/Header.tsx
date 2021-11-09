import Box from "./Box";
import * as React from "react";
import colors from "@theme/colors";
import { ArrowLeftIcon } from "@components/Icons";
import { Typography } from "@components/Typography";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

interface Props {
  action?: any;
  back?: boolean;
  dots?: boolean;
  title?: string;
  color?: keyof typeof colors;
}

interface BackProps {
  back?: boolean;
  color: keyof typeof colors;
}

const BackIcon = ({ back, color }: BackProps) => {
  const navigation = useNavigation();

  return back ? (
    <TouchableOpacity activeOpacity={0.6} onPress={navigation.goBack}>
      <ArrowLeftIcon size={28} fill={colors[color]} />
    </TouchableOpacity>
  ) : (
    <Box width={28} />
  );
};

const DotIcon = ({ dots }: { dots?: boolean }) => {
  return dots ? <Box width={28} /> : <Box width={28} />;
};

export default function Header({ back, dots, title, color = "dark-50" }: Props) {
  return (
    <Box flexDirection="row" alignItems="center" justifyContent="space-between" marginTop={25}>
      <BackIcon back={back} color={color} />
      <Typography variant="title-3" color={color}>
        {title}
      </Typography>
      <DotIcon dots={dots} />
    </Box>
  );
}

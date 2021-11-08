import { SuccessIcon } from "@components/Icons";
import { Box } from "@components/Layout";
import { Typography } from "@components/Typography";
import colors from "@theme/colors";
import * as React from "react";
import { Modal, ModalProps, StyleSheet } from "react-native";

interface Props extends ModalProps {
  text?: string;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: "Inter-Medium",
  },
});

const SuccessModal: React.FC<Props> = ({ text, ...rest }) => {
  return (
    <Modal {...rest}>
      <Box flex={1} alignItems="center" justifyContent="center">
        <SuccessIcon fill={colors["green-100"]} size={128} />
        <Box marginVertical={4} />
        <Typography style={styles.text} color="dark-50">
          {text}
        </Typography>
      </Box>
    </Modal>
  );
};

SuccessModal.defaultProps = {
  animationType: "slide",
  statusBarTranslucent: true,
  text: "You are all set!",
};

export default SuccessModal;

import * as React from "react";
import colors from "@theme/colors";
import type { IconProp } from "./types";
import Svg, { Path } from "react-native-svg";

export default function HomeIcon({ fill = colors["dark-100"], size = 24 }: IconProp) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Path
        d="M27.67 13.56L25.67 11.74L18 4.78C17.45 4.28804 16.7379 4.01607 16 4.01607C15.2621 4.01607 14.55 4.28804 14 4.78L6.35 11.78L4.35 13.6C4.21532 13.7367 4.1228 13.9092 4.08347 14.0969C4.04414 14.2847 4.05966 14.4799 4.12819 14.6591C4.19671 14.8383 4.31533 14.994 4.46992 15.1076C4.6245 15.2213 4.80851 15.2881 5 15.3C5.25329 15.2886 5.49277 15.1813 5.67 15L6 14.7V25C6 25.7956 6.31607 26.5587 6.87868 27.1213C7.44129 27.6839 8.20435 28 9 28H23C23.7956 28 24.5587 27.6839 25.1213 27.1213C25.6839 26.5587 26 25.7956 26 25V14.74L26.33 15.04C26.5134 15.2067 26.7522 15.2994 27 15.3C27.2016 15.2995 27.3984 15.238 27.5644 15.1237C27.7305 15.0094 27.8582 14.8475 27.9306 14.6593C28.0031 14.4712 28.0169 14.2655 27.9704 14.0693C27.9239 13.8732 27.8192 13.6956 27.67 13.56Z"
        fill={fill}
      />
    </Svg>
  );
}

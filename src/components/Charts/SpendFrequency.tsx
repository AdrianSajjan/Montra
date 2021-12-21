import { Box } from "@components/Layout";
import colors from "@theme/colors";
import * as React from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { AbstractChartConfig } from "react-native-chart-kit/dist/AbstractChart";

interface SpendFrequencyChartProps {}

const data = {
  labels: [],
  datasets: [
    {
      data: [60, 65, 55, 68, 60, 80, 60],
    },
  ],
};

const styles = StyleSheet.create({
  chart: {
    paddingRight: 0,
  },
});

const config: AbstractChartConfig = {
  strokeWidth: 5,
  backgroundGradientToOpacity: 0,
  backgroundGradientFromOpacity: 0,
  color: () => colors["violet-100"],
};

const SpendFrequencyChart: React.FC<SpendFrequencyChartProps> = (props) => {
  const { width } = useWindowDimensions();

  return (
    <View>
      <LineChart
        data={data}
        withDots={false}
        width={width + 64}
        height={width / 1.8}
        chartConfig={config}
        style={styles.chart}
        withHorizontalLabels={false}
        withHorizontalLines={false}
        withInnerLines={false}
        withOuterLines={false}
        withScrollableDot={false}
        withVerticalLabels={false}
        withVerticalLines={false}
        bezier
      />
      <Box paddingHorizontal={16} paddingTop={12}></Box>
    </View>
  );
};

export default SpendFrequencyChart;

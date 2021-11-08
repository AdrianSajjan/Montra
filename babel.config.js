module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [".ios.js", ".android.js", ".d.ts", ".js", ".ts", ".tsx", ".json"],
          alias: {
            types: "./src/types",
            "@utils": "./src/utils",
            "@hooks": "./src/hooks",
            "@theme": "./src/theme",
            "@config": "./src/config",
            "@shared": "./src/shared",
            "@icons": "./assets/icons",
            "@screens": "./src/screens",
            "@images": "./assets/images",
            "@constants": "./src/constants",
            "@navigation": "./src/navigation",
            "@components": "./src/components",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};

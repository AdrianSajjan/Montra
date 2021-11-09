type SubNavigator<T extends ParamListBase> = {
  [K in keyof T]: { screen?: K; params?: T[K] };
}[keyof T];

export type AuthStackParamList = {
  Onboard: undefined;
  Register: undefined;
  Verify: undefined;
  Login: undefined;
  "Forgot-Password": undefined;
  "Password-Reset-Email": undefined;
  "Reset-Password": undefined;
};
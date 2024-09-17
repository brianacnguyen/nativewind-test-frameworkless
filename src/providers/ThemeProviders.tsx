import React, {createContext} from 'react';
import {View} from 'react-native';
import {useColorScheme} from 'nativewind';
import {themes, CustomTheme} from '../utils/color-theme';

interface ThemeProviderProps {
  customTheme?: CustomTheme;
  theme?: 'light' | 'dark';
  children: React.ReactNode;
}

export const ThemeContext = createContext<{
  theme: 'light' | 'dark';
}>({
  theme: 'light',
});
export const ThemeProvider = ({
  customTheme = CustomTheme.Brand,
  theme,
  children,
}: ThemeProviderProps) => {
  const {colorScheme} = useColorScheme();
  const finalColorScheme = theme || colorScheme || 'light';

  return (
    <ThemeContext.Provider value={{theme: finalColorScheme}}>
      <View style={themes[customTheme][finalColorScheme]}>{children}</View>
    </ThemeContext.Provider>
  );
};

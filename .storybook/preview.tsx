import {View} from 'react-native';
import {ThemeProvider} from '../src/providers/ThemeProviders';
import {CustomTheme} from '../src/utils/color-theme';

/** @type{import("@storybook/react").Preview} */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (Story, {parameters}) => (
      <ThemeProvider>
        <View
          style={{
            padding: 8,
          }}>
          <Story />
        </View>
      </ThemeProvider>
    ),
  ],
};

export default preview;

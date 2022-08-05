// .storybook/manager.js

import { addons } from '@storybook/addons';
import theme from './theme';

addons.setConfig({
  enableShortcuts: false,
  theme: theme,
  toolbar: {
    zoom: { hidden: true },
    eject: { hidden: true },
    grid: { hidden: true },
  },
});
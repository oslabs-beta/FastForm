import { create } from '@storybook/theming';
import logo from './fastform-background.png'

export default create({
  base: 'light',

  colorPrimary: 'red',
  colorSecondary: '#5ca6e5',

  // UI
  appBg: '#efefef',
  appContentBg: 'white',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: '#f1f1f1',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'FastForm',
  brandUrl: 'https://github.com/oslabs-beta/FastForm',
  brandImage: logo,
  brandTarget: '_blank',
});
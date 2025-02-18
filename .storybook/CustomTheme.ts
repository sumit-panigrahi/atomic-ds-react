import { create } from '@storybook/theming';
 
export default create({
  base: 'light',
  brandTitle: 'AtomicDS',
  brandUrl: 'https://atomic.ds',
  brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  brandTarget: '_self',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
// Colors
colorPrimary: '#1b1f3b',
colorSecondary: '#732c2c',

// UI
appBg: '#0f0f0f',
appContentBg: '#181818',
appPreviewBg: '#101010',
appBorderColor: '#5a1e1e',
appBorderRadius: 8,

// Text colors
textColor: '#e0e0e0',
textInverseColor: '#a8a8a8',

// Toolbar default and active colors
barTextColor: '#c4a47c',
barSelectedColor: '#4a9478',
barHoverColor: '#787878',
barBg: '#1e1e2e',

// Form colors
inputBg: '#2a2a2a',
inputBorder: '#3d3d3d',
inputTextColor: '#e0e0e0',
inputBorderRadius: 2,

});
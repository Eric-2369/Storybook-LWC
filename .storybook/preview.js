import { themes } from '@storybook/theming';
import '@lwc/synthetic-shadow';
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css';

/** @type { import('@storybook/web-components').Preview } */
const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        docs: {
            theme: themes.light
        }
    }
};

const style = document.createElement('style');
style.innerHTML = `
  table {
    width: 100%;
    overflow-x: auto;
    display: block;
  }
`;
document.head.appendChild(style);

export default preview;

import { createElement } from 'lwc';
import App from 'c/testComponent';
import { action } from '@storybook/addon-actions';

export default {
    title: 'LWC Components',
    argTypes: {
        loading: { control: 'boolean' }
    }
};

export const LWC = (args) => {
    const element = createElement('x-app', { is: App });
    element.loading = args.loading;
    element.addEventListener('click', action('button-click'));
    return element;
};

LWC.args = {
    loading: false
};

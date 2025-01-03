import { action } from '@storybook/addon-actions';
import { createElement } from 'lwc';
import DateRange from 'c/dateRange';

export default {
    title: 'LWC Components/DateRange',
    argTypes: {
        required: { control: 'boolean' },
        disabled: { control: 'boolean' },
        startDateLabelName: { control: 'text' },
        endDateLabelName: { control: 'text' },
        startDateHelpText: { control: 'text' },
        endDateHelpText: { control: 'text' },
        min: { control: 'text' },
        max: { control: 'text' },
        startDateValue: { control: 'text' },
        endDateValue: { control: 'text' }
    }
};

export const Preview = (args) => {
    const element = createElement('c-tw-date-range', { is: DateRange });

    element.required = args.required;
    element.disabled = args.disabled;
    element.startDateLabelName = args.startDateLabelName;
    element.endDateLabelName = args.endDateLabelName;
    element.startDateHelpText = args.startDateHelpText;
    element.endDateHelpText = args.endDateHelpText;
    element.min = args.min;
    element.max = args.max;
    element.startDateValue = args.startDateValue;
    element.endDateValue = args.endDateValue;

    element.addEventListener('change', action('date-change'));

    const container = document.createElement('div');
    container.style.marginTop = '2px';
    container.style.marginLeft = '2px';
    container.appendChild(element);

    return container;
};

Preview.args = {
    required: false,
    disabled: false,
    startDateLabelName: 'Start Date',
    endDateLabelName: 'End Date',
    startDateHelpText: 'Select the start date',
    endDateHelpText: 'Select the end date',
    min: '2023-01-01',
    max: '2023-12-31',
    startDateValue: '',
    endDateValue: ''
};

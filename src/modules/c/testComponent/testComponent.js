import { api, LightningElement } from 'lwc';

export default class App extends LightningElement {
    @api loading = false;

    handleClick(event) {
        console.log('Button clicked!', event);
    }
}

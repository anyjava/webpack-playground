import './style.sass';
import hello from './hello';
import world from './world';
import _ from 'underscore';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';

document.write(`${hello}, ${world}!`);
document.write(`Random: ${_.random(0, 100)}`);

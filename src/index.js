import { default as app } from './app/main.module';

import 'bootstrap';
import './style.scss';
import '../assets/css/template.css'

angular.bootstrap(document.body, [app], { strictDi: true });

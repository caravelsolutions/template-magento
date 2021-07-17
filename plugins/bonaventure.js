import Vue from 'vue'
import { install } from '@caravelsolutions/bonaventure';

import '@caravelsolutions/bonaventure/src/assets/font/bonaventure-icon-line/bonaventure-icon-line.scss';
import '@caravelsolutions/bonaventure/src/assets/font/bonaventure-icon-fill/bonaventure-icon-fill.scss';

Vue.use(install, { all: true });

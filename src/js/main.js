import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import showMoreStyles from "./modules/showMoreStyles";
import calc from './modules/calc';
import changeModalState from './modules/changeModalState';
import filter from './modules/filter';


window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let modalState = {};

    changeModalState(modalState);
    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn' );
    sliders('.main-slider-item', 'vertical');
    forms(modalState);
    mask('[name="phone"]');
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material' , '#options', '.promocode', '.calc-price');
    filter();
});
import { select, selectAll } from 'd3';

import { spec } from './factory';
import { formatSettings } from './fragment';

// build target events

export function plusHandler() {
    spec.addTarget();
    spec.updateSolution();
}

// tab events

export const DEFAULT_TAB = 'graph';

export let currentTab = DEFAULT_TAB;

export function clickTab(tabName) {
    currentTab = tabName;
    selectAll('.tab')
        .style('display', 'none');
    selectAll('.tab_button')
        .classed('active', false);
    select(`#${ tabName }_tab`)
        .style('display', 'block');
    select(`#${ tabName }_button`)
        .classed('active', true);
    spec.setHash();
}

// shared events

export function toggleIgnoreHandler(d) {
    spec.toggleIgnore(d.recipe);
    spec.updateSolution();
}

// setting events

export function changeRatePrecision(event) {
    spec.format.ratePrecision = Number(event.target.value);
    spec.updateSolution();
}

export function changeCountPrecision(event) {
    spec.format.countPrecision = Number(event.target.value);
    spec.updateSolution();
}

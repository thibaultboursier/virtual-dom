/**
 * Created by Thibault on 13/04/2017.
 */

'use strict';

/**
 * Create element
 *
 * @param node
 * @returns {*}
 */
function createElement(node) {
    if (typeof node === 'string') {
        return document.createTextNode();
    }

    const element = document.createNode(node.type);

    node.children
        .map(createElement)
        .forEach(element.appendChild.bind(element));

    return element;
}

const HTML = (
    <ul class="list">
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
    </ul>
);

const root = document.getElementById('root');
const element = createElement(HTML);

root.appendChild(element);
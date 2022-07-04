/* eslint-disable */
import { listBtn } from './modules/listBooks.js';
import { bookAddBtn } from './modules/addBooks.js';
import { contactBtn } from './modules/contact.js';
import { titleInput, authorInput, addBtn, Book, bookArr, } from './modules/bookAddRemove.js';
import { DateTime } from '../node_modules/luxon/src/luxon.js';

const time = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
document.querySelector('.time').textContent = `${time}`;
import createElems from './createElems.js';
import controls from './control.js';

const {createTitle, createForm, createTable, createTask} = createElems;
const getRowNumber = controls.getRowNumber;

export const renderTasks = (tbody, data) => {
  const allTasks = data.map(createTask);

  allTasks.forEach(el => {
    tbody.insertAdjacentHTML('beforeend', el);
  });
  getRowNumber(tbody);
};

export const renderTodoApp = (app, title) => {
  const appTitle = createTitle(title);
  const {form, buttonsGroup} = createForm();
  const {tableWrapper, tbody} = createTable();

  return {
    appTitle,
    form,
    buttonsGroup,
    tableWrapper,
    tbody,
  };
};



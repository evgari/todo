import createElems from './createElems.js';
import controls from './control.js';

const createTask = createElems.createTask;
const getRowNumber = controls.getRowNumber;

export const renderTasks = (tbody, data) => {
  const allTasks = data.map(createTask);

  allTasks.forEach(el => {
    tbody.insertAdjacentHTML('beforeend', el);
  });
  getRowNumber(tbody);
};



import createElems from './modules/createElems.js';
import {renderTasks} from './modules/render.js';
import {getStorage} from './modules/serviceStorage.js';
import controls from './modules/control.js';

const {createTitle, createForm, createTable} = createElems;
const key = controls.key;
const taskControl = controls.taskControl;

{
  const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);
    const appTitle = createTitle(title);
    const {form, buttonsGroup} = createForm();
    const {tableWrapper, tbody} = createTable();
    const data = getStorage(key);

    app.append(appTitle, form, tableWrapper);

    renderTasks(tbody, data);
    taskControl(buttonsGroup, form, tbody);
  };

  window.appInit = init;
}

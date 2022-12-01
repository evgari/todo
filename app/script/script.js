import {renderTasks, renderTodoApp} from './modules/render.js';
import {getStorage} from './modules/serviceStorage.js';
import controls from './modules/control.js';

const key = controls.key;
const taskControl = controls.taskControl;

{
  const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);
    const {
      appTitle,
      form,
      tableWrapper,
      tbody,
      buttonsGroup,
    } = renderTodoApp(selectorApp, title);

    const data = getStorage(key);

    app.append(appTitle, form, tableWrapper);

    renderTasks(tbody, data);
    taskControl(buttonsGroup, form, tbody);
  };

  window.appInit = init;
}

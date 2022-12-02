import {setStorage, getStorage, removeStorage}
  from './serviceStorage.js';
import createElems from './createElems.js';

const createTask = createElems.createTask;

const getUserName = () => {
  const userName = prompt('Введите имя пользователя:');

  if (userName === null) {
    alert('обязательно для заполнения!');
    getUserName();
  }

  if (userName.trim()) {
    return userName;
  } else {
    alert('обязательно для заполнения!');
    getUserName();
  }
};

const getRowNumber = tbody => {
  const rows = tbody.querySelectorAll('tr');
  rows.forEach(row => {
    row.children[0].textContent = row.rowIndex - 1;
  });
};

const addTask = (form, tbody, input, btnSave, key) => {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const taskText = input.value;

    const newTask = {
      id: Math.random().toString().substring(2, 10),
      text: taskText,
      done: false,
    };

    setStorage(key, newTask);

    tbody.insertAdjacentHTML('beforeend',
        createTask(newTask));
    input.value = '';
    btnSave.disabled = true;

    getRowNumber(tbody);
  });
};

const deleteTask = (tbody, key) => {
  tbody.addEventListener('click', e => {
    const target = e.target;
    if (target.dataset.action !== 'delete') return;
    if (confirm('Вы уверены?') !== true) return;

    const parentElem = target.closest('tr');
    const id = parentElem.id;

    removeStorage(key, id);
    parentElem.remove();
    getRowNumber(tbody);
  });
};

const doneTask = (tbody, key, data) => {
  tbody.addEventListener('click', e => {
    const target = e.target;
    if (target.dataset.action !== 'done') return;

    const parentElem = target.closest('tr');
    const taskText = parentElem.children[1].textContent;
    const id = parentElem.id;
    const task = data.find(task => task.id === id);

    task.done = !task.done;

    parentElem.className = 'table-success';
    parentElem.children[1].innerHTML = `<s>${taskText}</s>`;
    parentElem.children[2].textContent = 'Выполнена';
    target.disabled = true;

    localStorage.setItem(key, JSON.stringify(data));
  });
};

const taskControl = (buttons, form, tbody, key) => {
  const btnSave = buttons[0];
  const btnClear = buttons[1];
  const input = form.task;
  const data = getStorage(key);

  form.addEventListener('input', () => {
    if (input.value) {
      btnSave.disabled = false;
    } else {
      btnSave.disabled = true;
    }
  });

  btnClear.addEventListener('click', () => {
    btnSave.disabled = true;
  });

  addTask(form, tbody, input, btnSave, key);
  deleteTask(tbody, key);
  doneTask(tbody, key, data);
};

export default {
  taskControl,
  getRowNumber,
  getUserName,
};

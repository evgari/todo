const createTitle = title => {
  const h3 = document.createElement('h3');
  h3.textContent = title;

  return h3;
};

const createButtonsGroup = params => {
  const btns = params.map(({className, type, text}) => {
    const button = document.createElement('button');
    button.type = type;
    button.textContent = text;
    button.className = className;

    return button;
  });

  return btns;
};

const createForm = () => {
  const form = document.createElement('form');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const buttonsGroup = createButtonsGroup([
    {
      className: 'btn btn-primary mr-3',
      type: 'submit',
      text: 'Сохранить',
    },
    {
      className: 'btn btn-warning',
      type: 'reset',
      text: 'Очистить',
    },
  ]);

  form.classList.add('d-flex', 'align-items-center', 'mb-3');
  label.classList.add('form-group', 'mr-3', 'mb-0');
  input.classList.add('form-control');
  input.type = 'text';
  input.name = 'task';
  input.palaceholder = 'ввести задачу';

  buttonsGroup[0].disabled = true;

  label.append(input);
  form.append(label);
  form.append(...buttonsGroup);

  return {
    form,
    buttonsGroup,
  };
};

const createTable = () => {
  const tableWrapper = document.createElement('div');
  tableWrapper.classList.add('table-wrapper');

  const table = document.createElement('table');
  table.classList.add('table', 'table-hover', 'table-bordered');

  const thead = document.createElement('thead');
  thead.insertAdjacentHTML('beforeend', `
    <tr>
      <th>№</th>
      <th>Задача</th>
      <th>Статус</th>
      <th>Действия</th>
    <tr>
  `);

  const tbody = document.createElement('tbody');

  table.tbody = tbody;

  table.append(thead, tbody);
  tableWrapper.append(table);

  return {
    tableWrapper,
    tbody,
  };
};

const createTask = (todos) => {
  const id = todos.id;
  const text = todos.done ? `<s>${todos.text}</s>` : todos.text;
  const rowClass = todos.done ? 'table-success' : 'table-light';
  const state = todos.done ? 'Выполнена' : 'В процессе';

  const taskHTML = `
    <tr id="${id}" class="${rowClass}">
      <td></td>
      <td class="task">${text}</td>
      <td>${state}</td>
      <td>
        <button class="btn btn-danger" data-action="delete">Удалить</button>
        <button class="btn btn-success" data-action="done">Завершить</button>
      </td>
    </tr>
  `;

  return taskHTML;
};

export default {
  createTitle,
  createForm,
  createTable,
  createTask,
};

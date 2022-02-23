var dynamicFields = {
  inputDiv: null,
  amount: null,
  MIN: 0,
  MAX: 5,

  init: () => {
    dynamicFields.inputDiv = document.getElementById('inputFields');
    dynamicFields.amount = dynamicFields.inputDiv.getElementsByTagName('input').length;
    let buttons =
        new Array(document.getElementById('lessFields'),
        document.getElementById('moreFields'));
    buttons[0].addEventListener('click', dynamicFields.popField);
    buttons[1].addEventListener('click', dynamicFields.pushField);
  },

  pushField: (e) => {
    let div = dynamicFields.inputDiv;
    if (dynamicFields.amount != dynamicFields.MAX) {
      let field = document.createElement('input');
      field.setAttribute('type', 'text');
      div.appendChild(document.createElement('br'));
      div.appendChild(field);
      dynamicFields.amount++;
    } e.preventDefault();
  },

  popField: (e) => {
    let div = dynamicFields.inputDiv;
    if (dynamicFields.amount != dynamicFields.MIN) {
      div.removeChild(div.lastElementChild);
      div.removeChild(div.lastElementChild);
      dynamicFields.amount--;
    } e.preventDefault();
  }
};

window.addEventListener('load', dynamicFields.init);
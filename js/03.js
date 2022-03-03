var licensePlate = {
  input: null,

  init: () => {
    licensePlate.input = document.getElementById('licenseInput');
    licensePlate.input.setAttribute('style', 'background-color: lightcyan');
    licensePlate.input.addEventListener('input', licensePlate.checkInput);
  },

  checkInput: (e) => { e.preventDefault();
    const REGEX = /^[A-ZÆØÅ]{1,2}\d{0,5}$/g;
    const INPUT = licensePlate.input.value.toUpperCase();
    let str = INPUT;
    while (!str.match(REGEX) && str != "")
      if (str.length <= 7)
        str = str.substring(0, str.length - 1);
      else
        str = str.substring(0, 7);
    licensePlate.input.value = str;
    licensePlate.input.setAttribute('style',
        `background-color: ${(str != INPUT) ? 'thistle' : 'lightcyan'}`);
  } 
};

window.addEventListener('load', licensePlate.init);
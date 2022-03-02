var licensePlate = {
  input: null,

  init: () => {
    licensePlate.input = document.getElementById('licenseInput');
    licensePlate.input.setAttribute('style', 'background-color: lightcyan');
    licensePlate.input.addEventListener('input', licensePlate.checkInput);
  },

  checkInput: (e) => {
    const REGEX = /^[A-ZÆØÅ]{1,2}\d{0,5}$/g
    const str = licensePlate.input.value.toUpperCase();
    var result = null;
    if (str.length < 2 && !str.match(REGEX))
      result = str.substring(0, str.length - 1);
    else if (str.length <= 7 && !str.match(REGEX))
      result = str.substring(0, str.length - 1);
    else if (str.length > 7)
      result = str.substring(0, 7);
    licensePlate.input.value = result ?? str;
    licensePlate.input.setAttribute('style', `background-color: ${(result != null) ? 'thistle' : 'lightcyan'}`);
    e.preventDefault();
  } 
};

window.addEventListener('load', licensePlate.init);
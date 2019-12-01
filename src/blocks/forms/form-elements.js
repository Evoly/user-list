const msg = (message) => `3${message}`;

const testIE = () => {
  const text = msg('world!!!');
  // return el.text(`hello ${text}`);

  document.querySelector('.h2').innerHTML = `hello ${text}`;
};

export default testIE;

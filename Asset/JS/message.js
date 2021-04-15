class Message {
  constructor(form, input, encrypted) {
    this.form = form;
    this.input = input;
    this.encrypted = encrypted;
  }

  handleEvent() {
    this.form.addEventListener('submit', this.generateEncryption);
  }

  generateEncryption = (e) => {
    const {input, encrypted} = this;
    e.preventDefault();

    if(!input.value) {
      return;
    } else {
      const encryptedValue = btoa(input.value);
      window.location.hash = encryptedValue;
     
      encrypted.value = window.location;
      encrypted.select();

      document.querySelector('.message').classList.add('hide');
      document.querySelector('.encrypted').classList.remove('hide');
    }
  }

  generatURL() {
    const {hash} = window.location;
    const message = atob(hash.replace('#', ''));
    console.log(message)
    if(message) {
      document.querySelector('#secretMessage'). textContent = message;
      document.querySelector('.secret').classList.remove('hide')
      document.querySelector('.message').classList.add('hide');
    }
  }
}
class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector(".formulario");
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const camposValidos = this.camposValidos();
    const emailsValidos = this.validaEmail();

    if (!camposValidos || !emailsValidos) {
      return;
    }
    alert("Formulário Enviado!");
    this.formulario.submit();
  }

  camposValidos() {
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");

    if (!firstName.value || !lastName.value) {
      this.criaErro(firstName, "Campo inválido");
      this.criaErro(lastName, "Campo inválido");
      return;
    }

    return true;
  }

  validaEmail() {
    const email = document.getElementById("email");

    if (
      email.value.indexOf("@") == -1 ||
      email.value.indexOf(".") == -1 ||
      !email.value
    ) {
      this.criaErro(email, "Email inválido.");
      return;
    }
    console.log(email.value);
    return true;
  }

  criaErro(campo, msg) {
    campo.value = "";
    campo.setAttribute("placeholder", msg);
  }
}

const valida = new ValidaFormulario();

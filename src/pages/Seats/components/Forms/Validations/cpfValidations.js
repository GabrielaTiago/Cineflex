export function cpfValidations(cpf, error, setError) {
  let noErrors = true;
  const cpfRegex = /^\d*$/;

  if (cpf === "") {
    noErrors = false;
    setError({
      ...error,
      cpfError: true,
      cpfErrMsg: "O campo cpf não pode ser vazio",
      disabledBtn: true,
    });
    return noErrors;
  }

  if (!cpfRegex.test(cpf)) {
    noErrors = false;
    setError({
      ...error,
      cpfError: true,
      cpfErrMsg: "Seu cpf não pode possuir caracteres especiais ou letras",
      disabledBtn: true,
    });
    return noErrors;
  }

  if (cpf.length < 11 || cpf.length >= 12) {
    noErrors = false;
    setError({
      ...error,
      cpfError: true,
      cpfErrMsg: "Seu cpf precisa ter 11 números",
      disabledBtn: true,
    });
    return noErrors;
  }

  return noErrors;
}

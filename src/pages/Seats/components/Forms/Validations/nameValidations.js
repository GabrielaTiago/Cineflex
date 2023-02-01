export function nameValidations(name, error, setError) {
  let noErrors = true;
  const nameRegex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/;

  if (name === "") {
    noErrors = false;
    setError({
      ...error,
      nameError: true,
      nameErrMsg: "O campo nome não pode ser vazio",
      disabledBtn: true,
    });
    return noErrors;
  }

  if (!nameRegex.test(name)) {
    noErrors = false;
    setError({
      ...error,
      nameError: true,
      nameErrMsg: "Seu nome não pode possuir caracteres especiais ou numéricos",
      disabledBtn: true,
    });
    return noErrors;
  }

  return noErrors;
}

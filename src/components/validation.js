function Validation(values) {
  return new Promise((resolve) => {
    let error = {};
    // const email_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (values.name === "") {
      error.name = "Name is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      error.email = "Email is invalid";
    }
    if (values.password === "") {
      error.password = "Password is required";
    } else if (!password_pattern.test(values.password)) {
      error.password = "Password is invalid";
    }
    if (values.confirm_password === "") {
      error.confirm_password = " This field cant be empty";
    } else if (String(values.confirm_password) !== String(values.password)) {
      error.confirm_password = "Password does not matches";
    }

    resolve(error);
  });
}

module.exports = { Validation };
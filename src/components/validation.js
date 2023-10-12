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



function sellerValidation(values) {
  return new Promise((resolve) => {
    let error = {};
    const email_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    const phone_pattern = /^\d{10}$/; // Assuming 10-digit phone number format
    const gst_pattern = /^([0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1})$/; // GST number pattern

    if (values.name === "") {
      error.name = "Name is required";
    }
    
    if (values.contact === "") {
      error.contact = "Contact is required";
    } else if (!phone_pattern.test(values.contact)) {
      error.contact = "Contact is invalid";
    }

    if (values.gst === "") {
      error.gst = "GST Number is required";
    } else if (!gst_pattern.test(values.gst)) {
      error.gst = "GST Number is invalid";
    }

    if (values.email === "") {
      error.email = "Email is required";
    } else if (!email_pattern.test(values.email)) {
      error.email = "Email is invalid";
    }

    if (values.password === "") {
      error.password = "Password is required";
    } else if (!password_pattern.test(values.password)) {
      error.password = "Password is invalid";
    }

    if (values.confirm_password === "") {
      error.confirm_password = "This field can't be empty";
    } else if (String(values.confirm_password) !== String(values.password)) {
      error.confirm_password = "Password does not match";
    }

    resolve(error);
  });
}

module.exports = { sellerValidation, Validation };
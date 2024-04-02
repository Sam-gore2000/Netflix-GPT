export const checkValidData = (email, password, name) => {
    const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const isPasswordValid = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
    const isNameValid = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name);

    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password is not valid";
    if (!isNameValid) return "Name is not valid";

    return null;
}

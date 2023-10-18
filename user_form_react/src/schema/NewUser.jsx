import * as Yup from "yup";
export const newUserSchema = Yup.object({
  name: Yup.string().required("This field is required").min(2, "Please enter a name more than 1 character").max(40, "Name is Too Long!"),
  email: Yup.string().email("Invalid email").required("This field is required"),
  mobile: Yup.number("Phone number is use only number").min(1000000000, "Phone number must be 10 characters!").max(9999999999, "Invalid Phone number"),
  address: Yup.string().min(12, "Address is Too Short!").max(50, "Address is Too Long!"),
  gender: Yup.string().required("This field is required"),
  hobbies: Yup.array().min(1, "Pick at least 1 hobby").required("This field is required"),
  password: Yup.string().required("This field is required").min(8, "Password is Too Short!").max(40, "Password is Too Long!"),
  confirm_password: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Mismatched passwords"),
});

import * as Yup from 'yup';
export const signInSchema=Yup.object({
    email:Yup.string().required("Please enter your email").email(),
    password:Yup.string().required("Please enter your password") 
})
import * as yup from "yup"


export const initialValues = {

    name : '',
    email : '',
    password : '',
  }

  export const SigninInitialValues = {
    email : '',
    password : '',
  }


  export const validationSchema = yup.object({
    name : yup.string().required("Name is required"),
    email : yup.string().email("invalid Email").required("Email is required"),
    password : yup.string().min(6, "Password is too short - should be 6 chars minimum").required("Password is required"),	
    
})


export const signInValidationSchema = yup.object({

  email : yup.string().email("invalid Email").required("Email is required"),
  password : yup.string().min(6, "Password is too short - should be 6 chars minimum").required("Password is required"),	
  
})



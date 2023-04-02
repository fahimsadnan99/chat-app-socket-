import React, { useState } from "react";
import "../style/Form.css";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Formik,Field,Form,FieldArray ,ErrorMessage }  from 'formik'
import ChildComponent from "../components/common/ChildComponent";
import {SigninInitialValues,signInValidationSchema} from "../components/common/ValidationForm"
import axios from "axios"
import { SuccessMsg,ErrorMsg } from "../Util/AllMessage";
import {authenticate} from "../Util/TokenAuth"
import {UserInfo} from "../Redux/UserReducer"
import { useDispatch, useSelector } from "react-redux";


const Signin = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch()

  const onsubmit = (e)=>{
   axios.post("http://localhost:5000/signin",e)
   .then(res=>{
    dispatch(UserInfo(res?.data?.user))
    SuccessMsg(res.data?.message)
    authenticate(res?.data?.token)
   
   })
   .catch(err => ErrorMessage(err.data?.message))
  
  }

  return (
    <div className="formWrapper">
      <div className="formChild">
        <p className="text-center text-2xl font-semibold text-white pt-5 pb-2 mb-4 border-b-2">
          SignIn
        </p>
        <Formik initialValues={SigninInitialValues} 
        onSubmit={onsubmit}
        validationSchema={signInValidationSchema}
        >
          <Form className="block justify-center items-center text-center">


      
            <div  className="formGroup">
              <label>Email : </label>
              <Field name='email'  type="text"></Field>
              <ErrorMessage name='email' component={ChildComponent}></ErrorMessage>
            </div>

            <div className="formGroup">
              <label>password : </label>
              <Field name='password'  type="text"></Field>
              <ErrorMessage name='password' component={ChildComponent}></ErrorMessage>
            </div>

            <button type="submit" className="submitBtn">Submit</button>
          </Form>
      </Formik>
       
      </div>
    </div>
  );
};

export default Signin;

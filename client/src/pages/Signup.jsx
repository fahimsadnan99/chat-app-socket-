import React, { useState } from "react";
import "../style/Form.css";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Formik,Field,Form,FieldArray ,ErrorMessage }  from 'formik'
import ChildComponent from "../components/common/ChildComponent";
import {initialValues,validationSchema} from "../components/common/ValidationForm"

const Signup = () => {
  const [file, setFile] = useState(null);


  const onsubmit = (e)=>{
  
 console.log(e);
  }

  return (
    <div className="formWrapper">
      <div className="formChild">
        <p className="text-center text-2xl font-semibold text-white pt-5 pb-2 mb-4 border-b-2">
          SignUp
        </p>
        <Formik initialValues={initialValues} 
        onSubmit={onsubmit}
        validationSchema={validationSchema}
        >
          <Form className="block justify-center items-center text-center">


          <div className="fromItem">
            <label
              className="flex justify-center items-center text-white text-lg cursor-pointer"
              htmlFor="formImg"
            >
              {file ? "Replace" : "Upload"} Image{" "}
              <AiOutlineCloudUpload size="40px"></AiOutlineCloudUpload>
            </label>

            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              id="formImg"
              className="hidden"
            />

            {file && (
              <img
                src={file && URL.createObjectURL(file)}
                alt="img"
                style={{ width: "100px" }}
              ></img>
            )} 
            <p>(Optional)</p>
          </div>
          
            <div className="formGroup">
              <label>Name : </label>
              <Field name='name'  type="text"></Field>
              <ErrorMessage name='name' component={ChildComponent}></ErrorMessage>
            </div>

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

export default Signup;

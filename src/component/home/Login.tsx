import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './index.scss'
const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});
function Login() {
    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={LoginSchema}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {({ errors, touched }) => (
                <Form className='form'>
                    <div className="form-group">
                        <div className='form-group--label'> Email</div>
                        <Field name='email' type='input' className='form-group--field'></Field>
                        {errors.email && touched.email ? (
                            <div className='form-group--error'>{errors.email}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <div className='form-group--label'>Password</div>
                        <Field name='password' type="password" className='form-group--field'></Field>
                        {errors.password && touched.password ? (
                            <div className='form-group--error'>{errors.password}</div>
                        ) : null}
                    </div>
                    <button type="submit" className='submit'>
                        <span className='animation-submit'></span>
                        <span className='animation-submit'></span>
                        <span className='animation-submit'></span>
                        <span className='animation-submit'></span>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};
export default Login;

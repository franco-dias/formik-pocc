import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';

import Input from './components/Input'

function App() {

  const validationSchema = yup.object().shape({
    name: yup.string().required('Campo obrigatório'),
  })

  const formik = useFormik({
    initialValues: {
      name: 'Magrão'
    },
    validationSchema,
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <form style={{margin: 48}} onSubmit={formik.handleSubmit}>
      <Input
        name="name"
        type="text"
        placeholder="Nome completo"
        mask={null}
        error={formik.errors.name}
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <Input
        name="address"
        type="text"
        mask={null}
        placeholder="Endereço"
        error={formik.errors.address}
        onChange={formik.handleChange}
        value={formik.values.address}
      />
      <Input
        name="cep"
        type="text"
        mask="99999-999"
        placeholder="CEP"
        error={formik.errors.cep}
        onChange={formik.handleChange}
        value={formik.values.cep}
      />
      <Input
        name="email"
        type="text"
        mask="99/99/9999"
        placeholder="E-mail"
        error={formik.errors.email}
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit"> Submit </button>
    </form>
  );
}

export default App;

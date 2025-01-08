import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  setNombre,
  setApellido,
  setTelefono,
  setSubmitting,
  setError,
  resetForm,
  addSubmittedForm,
} from '../redux/formSlice';

const style = {
  height: '300px',
  width: '300px',
  display: 'grid',
  margin: '20px 0',
  padding: '10px',
  backgroundColor: '#f5f5f5',
  borderRadius: '5px',
  boxShadow: '0 0 5px rgba(0,0,0,0.1)',
  color: 'rgba(56, 56, 56, 0.73)',
  fontFamily: 'arial',
  fontSize: '15px',
};

const styleInputBotton = {
  margin: 'auto',
  height: '25px',
  width: '30%',
  borderRadius: '10px',
  backgroundColor: '#2abf2a',
  color: 'rgb(255, 255, 255)',
  fontFamily: 'arial',
  fontSize: '15px',
};

const styleInput = {
  margin: 'auto',
  height: '10px',
  width: '80%',
  padding: '5px',
  borderRadius: '5px',
  backgroundColor: '#242424',
  color: 'rgb(255, 255, 255)',
};

const styleLabel = {
  margin: 'auto',
  height: '10px',
  color: 'rgb(63, 63, 63)',
  fontFamily: 'arial',
  fontSize: '15px',
};

const Formulario = () => {
  const dispatch = useDispatch();
  const { nombre, apellido, telefono, isSubmitting, error } = useSelector((state) => state.form);

  // Definir esquema de validación con Yup
  const validationSchema = Yup.object({
    nombre: Yup.string()
      .max(15, 'El nombre debe tener como máximo 15 caracteres')
      .required('El nombre es obligatorio'),
    apellido: Yup.string()
      .max(20, 'El apellido debe tener como máximo 20 caracteres')
      .required('El apellido es obligatorio'),
    telefono: Yup.string()
      .matches(/^[0-9]{10}$/, 'El teléfono debe tener 10 dígitos')
      .required('El teléfono es obligatorio'),
  });

  // Usar Formik para gestionar el formulario
  const formik = useFormik({
    initialValues: {
      nombre,
      apellido,
      telefono,
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(setSubmitting(true));
      try {
        // Agregar el formulario enviado al array de formularios
        dispatch(addSubmittedForm(values));

        // Resetear el formulario después de enviarlo
        dispatch(resetForm());
      } catch (err) {
        dispatch(setError('Hubo un error al enviar el formulario.'));
      } finally {
        dispatch(setSubmitting(false));
      }
    },
  });

  // Actualizar el estado global del formulario con Formik
  useEffect(() => {
    dispatch(setNombre(formik.values.nombre));
    dispatch(setApellido(formik.values.apellido));
    dispatch(setTelefono(formik.values.telefono));
  }, [formik.values, dispatch]);

  return (
    <div>
      <form onSubmit={formik.handleSubmit} style={style}>
        <label style={styleLabel} htmlFor="nombre">Nombre</label>
        <input
          style={styleInput}
          type="text"
          id="nombre"
          name="nombre"
          value={formik.values.nombre}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.nombre && formik.errors.nombre ? (
          <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.nombre}</div>
        ) : null}

        <label style={styleLabel} htmlFor="apellido">Apellido</label>
        <input
          style={styleInput}
          type="text"
          id="apellido"
          name="apellido"
          value={formik.values.apellido}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.apellido && formik.errors.apellido ? (
          <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.apellido}</div>
        ) : null}

        <label style={styleLabel} htmlFor="telefono">Telefono</label>
        <input
          style={styleInput}
          type="tel"
          id="telefono"
          name="telefono"
          value={formik.values.telefono}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.telefono && formik.errors.telefono ? (
          <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.telefono}</div>
        ) : null}

        <input type="submit" style={styleInputBotton} value="Enviar" disabled={isSubmitting} />
      </form>
      {error && <div style={{ color: 'red', fontSize: '14px' }}>{error}</div>}
    </div>
  );
};

export default Formulario;

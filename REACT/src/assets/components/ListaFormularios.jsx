import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ListaFormularios = () => {
  const { submittedForms } = useSelector((state) => state.form);

  return (
    <div>
      <h2>Listado de Formularios Enviados</h2>
      <ul>
        {submittedForms.length > 0 ? (
          submittedForms.map((form, index) => (
            <li key={index}>
              <strong>Nombre:</strong> {form.nombre} <br />
              <strong>Apellido:</strong> {form.apellido} <br />
              <strong>Teléfono:</strong> {form.telefono} <br />
              <hr />
            </li>
          ))
        ) : (
          <p>No se han enviado formularios aún.</p>
        )}
      </ul>
    </div>
  );
};

export default ListaFormularios;

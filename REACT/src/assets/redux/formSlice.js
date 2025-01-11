import { createSlice } from '@reduxjs/toolkit';

// Estado inicial del formulario
const initialState = {
  nombre: '',
  apellido: '',
  telefono: '',
  isSubmitting: false,
  error: null,
  submittedForms: [],  // Array que almacenará los formularios enviados
};

// Crear el slice del formulario
const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    // Acción para actualizar el nombre
    setNombre: (state, action) => {
      state.nombre = action.payload;
    },
    // Acción para actualizar el apellido
    setApellido: (state, action) => {
      state.apellido = action.payload;
    },
    // Acción para actualizar el teléfono
    setTelefono: (state, action) => {
      state.telefono = action.payload;
    },
    // Acción para marcar el formulario como enviando
    setSubmitting: (state, action) => {
      state.isSubmitting = action.payload;
    },
    // Acción para manejar errores
    setError: (state, action) => {
      state.error = action.payload;
    },
    // Acción para resetear el formulario
    resetForm: () => initialState,
    // Acción para agregar un formulario enviado a la lista
    addSubmittedForm: (state, action) => {
      state.submittedForms.push(action.payload);
    },
  },
});

// Exportar las acciones generadas por createSlice
export const { setNombre, setApellido, setTelefono, setSubmitting, setError, resetForm, addSubmittedForm } = formSlice.actions;

// Exportar el reducer para que se use en el store
export default formSlice.reducer;

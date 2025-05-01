import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    categoria: '',
    precio: '',
    stockDisponible: '',
    urlImagen: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Hook para redirigir

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Limpiar el error del campo al escribir
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones
    const newErrors = {};
    const urlRegex = /(jpg|jpeg|png)/i; // Expresión regular para validar que contenga extensiones de imagen

    if (!formData.nombre) newErrors.nombre = 'El nombre es obligatorio.';
    if (!formData.descripcion) newErrors.descripcion = 'La descripción es obligatoria.';
    if (!formData.categoria) newErrors.categoria = 'La categoría es obligatoria.';
    if (!formData.precio) newErrors.precio = 'El precio es obligatorio.';
    else if (formData.precio < 0) newErrors.precio = 'El precio debe ser mayor o igual a 0.';
    if (!formData.stockDisponible) newErrors.stockDisponible = 'El stock disponible es obligatorio.';
    else if (formData.stockDisponible < 0) newErrors.stockDisponible = 'El stock debe ser mayor o igual a 0.';
    if (!formData.urlImagen) {
      newErrors.urlImagen = 'La URL de la imagen es obligatoria.';
    } else if (!urlRegex.test(formData.urlImagen)) {
      newErrors.urlImagen = 'La URL debe contener una extensión válida (JPG, JPEG o PNG).';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await axios.post('http://localhost:8080/products', {
        nombre: formData.nombre,
        descripcion: formData.descripcion,
        categoria: formData.categoria,
        precio: parseFloat(formData.precio),
        stockDisponible: parseInt(formData.stockDisponible, 10),
        urlImagen: formData.urlImagen,
      });
      alert('Producto añadido exitosamente.');
      setFormData({
        nombre: '',
        descripcion: '',
        categoria: '',
        precio: '',
        stockDisponible: '',
        urlImagen: '',
      });
      navigate('/'); // Redirigir a la lista de productos
    } catch (error) {
      console.error('Error al añadir el producto:', error);
      setErrors({ general: 'Hubo un error al añadir el producto.' });
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Añadir Producto</h1>
      {errors.general && <div className="alert alert-danger">{errors.general}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">
            Descripción
          </label>
          <textarea
            className={`form-control ${errors.descripcion ? 'is-invalid' : ''}`}
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
          ></textarea>
          {errors.descripcion && <div className="invalid-feedback">{errors.descripcion}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="categoria" className="form-label">
            Categoría
          </label>
          <input
            type="text"
            className={`form-control ${errors.categoria ? 'is-invalid' : ''}`}
            id="categoria"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
          />
          {errors.categoria && <div className="invalid-feedback">{errors.categoria}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="precio" className="form-label">
            Precio
          </label>
          <input
            type="number"
            className={`form-control ${errors.precio ? 'is-invalid' : ''}`}
            id="precio"
            name="precio"
            value={formData.precio}
            onChange={handleChange}
          />
          {errors.precio && <div className="invalid-feedback">{errors.precio}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="stockDisponible" className="form-label">
            Stock Disponible
          </label>
          <input
            type="number"
            className={`form-control ${errors.stockDisponible ? 'is-invalid' : ''}`}
            id="stockDisponible"
            name="stockDisponible"
            value={formData.stockDisponible}
            onChange={handleChange}
          />
          {errors.stockDisponible && <div className="invalid-feedback">{errors.stockDisponible}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="urlImagen" className="form-label">
            URL de la Imagen
          </label>
          <input
            type="text"
            className={`form-control ${errors.urlImagen ? 'is-invalid' : ''}`}
            id="urlImagen"
            name="urlImagen"
            value={formData.urlImagen}
            onChange={handleChange}
          />
          {errors.urlImagen && <div className="invalid-feedback">{errors.urlImagen}</div>}
        </div>
        <button type="submit" className="btn btn-primary">
          Añadir Producto
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
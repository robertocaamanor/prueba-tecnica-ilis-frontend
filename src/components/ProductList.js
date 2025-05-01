import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const [filters, setFilters] = useState({
    name: '',
    category: '',
    inStock: '',
  });
  const [noResults, setNoResults] = useState(false); // Estado para manejar el mensaje de "sin resultados"
  const navigate = useNavigate();

  useEffect(() => {
    // Cargar la lista inicial de productos
    fetchAllProducts();
  }, []);

  const fetchAllProducts = () => {
    axios
      .get('http://localhost:8080/products')
      .then((response) => {
        setProductos(response.data);
        setNoResults(false); // Reiniciar el estado de "sin resultados"
      })
      .catch((error) => {
        console.error('Error al obtener los productos:', error);
      });
  };

  const handleSearch = () => {
    const { name, category, inStock } = filters;
    const queryParams = new URLSearchParams();

    if (name) queryParams.append('name', name);
    if (category) queryParams.append('category', category);
    if (inStock) queryParams.append('inStock', inStock);

    axios
      .get(`http://localhost:8080/products?${queryParams.toString()}`)
      .then((response) => {
        setProductos(response.data);
        setNoResults(response.data.length === 0); // Mostrar mensaje si no hay resultados
      })
      .catch((error) => {
        console.error('Error al buscar productos:', error);
      });
  };

  const handleReset = () => {
    setFilters({
      name: '',
      category: '',
      inStock: '',
    });
    fetchAllProducts();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Lista de Productos</h1>
        <button
          className="btn btn-primary"
          onClick={() => navigate('/add-product')}
        >
          Añadir Producto
        </button>
      </div>

      {/* Buscador */}
      <div className="card p-3 mb-4">
        <h5>Buscar Productos</h5>
        <div className="row">
          <div className="col-md-4">
            <label htmlFor="name" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={filters.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="category" className="form-label">
              Categoría
            </label>
            <input
              type="text"
              className="form-control"
              id="category"
              name="category"
              value={filters.category}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inStock" className="form-label">
              En Stock
            </label>
            <select
              className="form-control"
              id="inStock"
              name="inStock"
              value={filters.inStock}
              onChange={handleChange}
            >
              <option value="">Todos</option>
              <option value="true">Sí</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
        <div className="mt-3">
          <button
            className="btn btn-success me-2"
            onClick={handleSearch}
            disabled={!filters.name && !filters.category} // Deshabilitar si no hay nombre o categoría
          >
            Buscar
          </button>
          <button
            className="btn btn-secondary"
            onClick={handleReset}
            disabled={!filters.name && !filters.category && !filters.inStock} // Deshabilitar si no hay filtros aplicados
          >
            Limpiar
          </button>
        </div>
      </div>

      {/* Mensaje de "sin resultados" */}
      {noResults && (
        <div className="alert alert-warning" role="alert">
          Producto no encontrado bajo estos parámetros.
        </div>
      )}

      {/* Tabla de productos */}
      {!noResults && (
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Stock Disponible</th>
              <th>Imagen</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.categoria}</td>
                <td>${producto.precio.toLocaleString()}</td>
                <td>
                  {producto.stockDisponible === 0 ? (
                    <>
                      <span className="badge bg-danger">Sin stock</span> ({producto.stockDisponible})
                    </>
                  ) : producto.stockDisponible < 10 ? (
                    <>
                      <span className="badge bg-warning text-dark">Stock limitado</span> ({producto.stockDisponible})
                    </>
                  ) : (
                    producto.stockDisponible
                  )}
                </td>
                <td>
                  <img
                    src={producto.urlImagen}
                    alt={producto.nombre}
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductList;
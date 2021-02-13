import React, { useState } from "react";
import { Error } from "./Error";
import PropTypes from "prop-types";

const Form = ({ busqueda, setBusqueda, setConsultar, setError404 }) => {
  const [error, setError] = useState(false);

  //Funcion que coloca los elementos en el state
  const handleChange = (e) => {
    // Actualizar el state
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  // Cuando el usuario da submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setError404(false);
    // Validar
    if (ciudad.trim() === "" || pais.trim === "") {
      setError(true);
      return;
    }
    setError(false);
    // Pasarlo al componente principal
    setConsultar(true);
  };
  const { ciudad, pais } = busqueda;
  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error mensaje="Ambos campos son obligatorios" /> : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="ciudad"
          id="ciudad"
          value={ciudad}
          onChange={handleChange}
        />
        <label htmlFor="ciudad">Ciudad: </label>
      </div>
      <div className="input-field col s12">
        <select name="pais" id="pais" value={pais} onChange={handleChange}>
          <option value="">-- Seleccione un país --</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="pais">País: </label>
      </div>
      <div className="input-field col s12">
        <input
          type="submit"
          value="Buscar Clima"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
        />
      </div>
    </form>
  );
};

Form.propTypes = {
  busqueda: PropTypes.object.isRequired,
  setBusqueda: PropTypes.func.isRequired,
  setConsultar: PropTypes.func.isRequired,
  setError404: PropTypes.func.isRequired,
};

export { Form };

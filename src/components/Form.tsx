import React, { useState, ChangeEvent, FormEvent } from 'react';

const Form = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleNombreChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNombre(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMensajeChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMensaje(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validación: Asegurarse de que se haya ingresado información en los campos de texto
    if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }

    // Simulando un envío exitoso
    setEnviado(true);
  };

  return (
    <div>
      {!enviado ? (
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input type="text" value={nombre} onChange={handleNombreChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label>
            Mensaje:
            <textarea value={mensaje} onChange={handleMensajeChange} />
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>
      ) : (
        <p>Información enviada exitosamente!!</p>
      )}
    </div>
  );
};

export default Form;

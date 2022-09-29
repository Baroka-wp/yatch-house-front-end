import { useState } from 'react';

const useForm = ({ form, additionalData, endpointUrl }) => {
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    if (form) {
      e.preventDefault();
      setStatus('loading');
      setMessage('');

      const finalFormEndpoint = endpointUrl || form.action;
      const data = Array.from(form.elements)
        .filter((input) => input.name)
        .reduce(
          (obj, input) => Object.assign(obj, { [input.name]: input.value }),
          {},
        );

      if (additionalData) {
        Object.assign(data, additionalData);
      }

      fetch(finalFormEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((response) => {
        if (response.status === 201) {
          setMessage(' Admin ajouté avec succès');
          setStatus('success');
        } else {
          setMessage("Une erreur s'est produite");
          setStatus('error');
        }
      })
        .catch((err) => {
          setMessage(err.toString());
          setStatus('error');
        });
    }
  };

  return { handleSubmit, status, message };
};

export default useForm;

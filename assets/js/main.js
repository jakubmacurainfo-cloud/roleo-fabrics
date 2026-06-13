document.querySelectorAll('form[data-contact]').forEach(form => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent('Roleo Fabrics - enquiry');
    const body = encodeURIComponent(
      `Company: ${data.get('company') || ''}\n` +
      `Country: ${data.get('country') || ''}\n` +
      `Email: ${data.get('email') || ''}\n` +
      `Product: ${data.get('product') || ''}\n\n` +
      `${data.get('message') || ''}`
    );
    window.location.href = `mailto:kontakt@roleo.pl?subject=${subject}&body=${body}`;
  });
});
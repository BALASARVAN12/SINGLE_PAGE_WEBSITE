const script_contact_url = 'https://script.google.com/macros/s/AKfycbzkviM0ilKd6AVw15RN0YbZLSNU7ba1YMPElvGOzbU2YpT42qo8YQl6dLeYU75tzYzWZw/exec'
    const form_contact = document.forms['contactdata']
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form_contact)})
        .then(response => alert("Thank you! your form is submitted successfully." ))
        .then(() => {  window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
    })


    <script>
    const scriptURL_cc = 'https://script.google.com/macros/s/AKfycbxpDLx-dnSasnkKSy8MPPjh2nrGenoQXXyrHVB18CqepExO99EumJ7O7MUjZ6V_Wxrtog/exec'
    const form_cc = document.forms['contactform']
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form_cc)})
        .then(response => alert("Thank you! your form is submitted successfully." ))
        .then(() => {  window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
    })
  </script>
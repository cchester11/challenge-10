//create an html as a string (template literal)
//place prompt input in html 

const returnHTML =  function(employees) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <title>Document</title>
  </head>
  <body>
  <div class="col">
      ${employees.map(employee => (
        `<div class="card h-100">
      <div class="card-body">
      <h4 class="card-title">${employee.name}</h4>
      <h5 class="card-text">Title: Manager</h5>
    </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employee.id}</li>
        <li class="list-group-item">Email: <a href="email:${employee.email}" class="card-link">${employee.email}</a></li>
        <li class="list-group-item">Office Number: ${employee.officeNumber || employee.github || employee.school}</li>
      </ul>
  </div>`))}
  </div>
  </body>
  </html>`
};

module.exports = returnHTML
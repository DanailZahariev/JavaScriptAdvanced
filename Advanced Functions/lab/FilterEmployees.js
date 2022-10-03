function filterEmployees(input, criteria) {
    let emp = JSON.parse(input);
    let [key, value] = criteria.split('-');

    emp.filter(emp => emp[key] === value)
        .map((emp, i) => `${i}. ${emp.first_name} ${emp.last_name} - ${emp.email}`)
        .forEach(emp => console.log(emp));
}

 filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female');
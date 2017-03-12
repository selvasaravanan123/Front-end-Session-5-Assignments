
var employee = { 
	name: "SanthoshKumar P", age: 21, salary: 75000, 
	address: { 
		city: "Coimbatore", 
		state: "TamilNadu", 
		pin: 641004 },
	}

console.log("Name : "+ employee['name'] + ", Age : "+ employee['age'] +", Salary : " + employee['salary'] );
console.log("Address:: " );
console.log("City : " + employee.address.city);
console.log("State : " + employee.address.state);
console.log("Pincode : " + employee.address.pin);
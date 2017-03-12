
var employee = { 
	name: "Selvasaravanan", age: 24, salary: 175000, 
	address: { 
		city: "Cuddalore", 
		state: "TamilNadu", 
		pin: 607108},
	}

console.log("Name : "+ employee['name'] + ", Age : "+ employee['age'] +", Salary : " + employee['salary'] );
console.log("Address:: " );
console.log("City : " + employee.address.city);
console.log("State : " + employee.address.state);
console.log("Pincode : " + employee.address.pin);
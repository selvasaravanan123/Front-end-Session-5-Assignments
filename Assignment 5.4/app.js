var Employees = [{
	name : "Selva",
	age : 24,
	salary : 10000,
	address : {
		city : "chennai",
		State : "TamilNadu",
		pincode : "600078"
	}
},
{
	name : "Dhivya",
	age : 28,
	salary : 10000,
	address : {
		city : "chennai",
		State : "TamilNadu",
		pincode : "600078"
	}
},
{
	name : "Ashok",
	age : 29,
	salary : 10000,
	address : {
		city : "chennai",
		State : "TamilNadu",
		pincode : "600078"
	}
},
{
	name : "Manoj",
	age : 30,
	salary : 10000,
	address : {
		city : "chennai",
		State : "TamilNadu",
		pincode : "600078"
	}
},
{
	name : "Ramesh",
	age : 34,
	salary : 10000,
	address : {
		city : "chennai",
		State : "TamilNadu",
		pincode : "600078"
	}
},]

for(var i=0;i<Employees.length;i++){

	console.log("***********Employee " +(i+1) +" Details ************")

	console.log("Name : " +Employees[i].name);
	console.log("age : " +Employees[i].age);
	console.log("salary : " +Employees[i].salary);
	console.log("city : " +Employees[i].address.city);
	console.log("state : " +Employees[i].address.State);
	console.log("pincode : " +Employees[i].address.pincode);

}
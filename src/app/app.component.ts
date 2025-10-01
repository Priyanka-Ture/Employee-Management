import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first';
  employees = [
    { name: "Priya", designation: "Frontend Developer", department: "IT"},
    { name: "Bob", designation: "Backend Developer", department: "IT"}, 
    { name: "Pratham", designation: "Manager", department: "HR"},
  ];

  newEmployee = {name:"", designation:"", department:""};
  searchText = "";

  addEmployee() {
    if (this.newEmployee.name && this.newEmployee.designation && this.newEmployee.department) {
      this.employees.push({...this.newEmployee});
      this.newEmployee = {name:"", designation:"", department:""};
    }
  }
  deleteEmployee(index: number) {
    this.employees.splice(index, 1);
  }
  get filteredEmployees() {
    return this.employees.filter(emp =>
      emp.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}

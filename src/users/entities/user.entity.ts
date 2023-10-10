export class User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  age: number;

  constructor(id, email, password, firstName, lastName, age) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

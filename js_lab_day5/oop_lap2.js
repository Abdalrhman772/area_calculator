class Person {
  constructor(fName, salary, sleepMode, healthRate) {
    this.fName = fName;
    this.salary = salary < 1000 ? (this.salary = 1000) : (this.salary = salary);
    this.sleepMode = sleepMode;
    this.healthRate = healthRate;
  }
  sleep(hours) {
    if (hours == 7) {
      return (this.sleepMode = "happy");
    } else if (hours < 7) {
      return (this.sleepMode = "tired");
    } else if (hours > 7) {
      return (this.sleepMode = "lazy");
    }
  }

  eat(meals) {
    if (meals == 3) {
      return (this.healthRate = `${100}%`);
    } else if (meals == 2) {
      return (this.healthRate = `${75}%`);
    } else if (meals == 1) {
      return (this.healthRate = `${50}%`);
    }
  }

  buy(items) {
    this.salary -= items * 10;
    if (this.salary < 0) {
      this.salary = 0;
    }
    return this.salary;
  }
}

// const personClass = new Person("ahmed", 200, "happy", 75);
// console.log(personClass.fName);
// console.log(personClass.buy(3));
// console.log(personClass.sleep(10));
// console.log(personClass.eat(2));
// console.log(personClass);

class Employee extends Person {
  constructor(
    id,
    fName,
    email,
    workMode,
    sleepMode,
    healthRate,
    salary,
    isManger
  ) {
    super(fName, salary, sleepMode, healthRate);
    this.id = id;
    this.email = email;
    this.workMode = workMode;
    this.isManger = isManger;
  }

  work(hours) {
    if (hours == 8) {
      return (this.workMode = "happy");
    } else if (hours > 8) {
      return (this.workMode = "tired");
    } else if (hours < 8) {
      return (this.workMode = "lazy");
    }
  }
}

class Office {
  constructor(officeName, employees) {
    this.officeName = officeName;
    this.employees = employees;
  }
  getAllEmployees() {
    console.log(`office name is :`);
    console.log(this);
    console.log(`employees list is : `);
    console.log(this.employees);
    return this.employees;
  }

  getEmployee(empEmail) {
    let employee = this.employees.find((item) => item.email == empEmail);
    // console.log(employee);

    if (employee.isManger) {
      employee = { ...employee, salary: null };
    }
    console.log(`one employee is :`);
    console.log(employee);
    return employee;
  }

  hireEmployee() {
    let id = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    };
    let fName = prompt(`enter name`);
    let email = prompt(`enter email`);
    let workMode = "happy";
    let sleepMode = "happy";
    let healthRate = 100;
    let salary = prompt(`enter salary`);
    let mgr = prompt("is this employee is a manger ? (y/n)");
    let isManger = mgr === "y";

    const emp = new Employee(
      id,
      fName,
      email,
      workMode,
      sleepMode,
      healthRate,
      salary,
      isManger
    );
    this.employees.push(emp);
  }

  fireEmployee(empEmail) {
    let employee = this.removeObjectWithId(empEmail);
    console.log(`employees list after fired one :`);
    console.log(employee);
  }

  removeObjectWithId(empEmail) {
    const objWithIdIndex = this.employees.findIndex(
      (obj) => obj.email == empEmail
    );

    if (objWithIdIndex > -1) {
      this.employees.splice(objWithIdIndex, 1);
    }
    // console.log(objWithIdIndex);
    return this.employees;
  }
}

const office1 = new Office("ITI Office", []);
let stop = false;
while (!stop) {
  userType = prompt(
    "enter 'normal' if you are normal employee OR 'manger' if you are a manger OR 'q' to quit"
  );
  if (userType === "q") {
    userType = null;
    stop = true;
    alert("canceled");
  } else if (userType === "normal") {
    nrlInput = prompt(`what do you want to do ? \n 
  "get all" --> display all employees \n 
  "get one" --> display a specific employee \n 
  "q" to quit`);
    switch (nrlInput) {
      case "q":
        mgrInput = null;
        stop = true;
        alert("canceled");

        break;
      case "get all":
        office1.getAllEmployees();
        break;
      case "get one":
        empEmail = prompt(`enter email`);
        office1.getEmployee(empEmail);
        break;
    }
  } else if (userType === "manger") {
    mgrInput = prompt(`what do you want to do ? \n 
  "get all" --> display all employees \n 
  "get one" --> display a specific employee \n 
  "hire" --> hire a new employee \n 
  "fire" --> fire an employee \n
  "q" to quit`);
    switch (mgrInput) {
      case "q":
        mgrInput = null;
        stop = true;
        alert("canceled");
        break;
      case "get all":
        office1.getAllEmployees();
        break;
      case "get one":
        empEmail = prompt(`enter email`);
        office1.getEmployee(empEmail);
        break;
      case "hire":
        office1.hireEmployee();
        alert("hired successfully");
        break;
      case "fire":
        empEmail = prompt(`enter email for this employee`);
        office1.fireEmployee(empEmail);
        break;
    }
  }
}

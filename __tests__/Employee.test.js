const Employee = require("../lib/Employee");

test("Testing employee object creation", () => {
    const newEmployee = new Employee("Bob Marley", 1, "bob@marley.com");

    expect(newEmployee.getName()).toBe("Bob Marley");
    expect(newEmployee.getRole()).toBe("Employee");
    expect(newEmployee.getId()).toBe(1);
    expect(newEmployee.getEmail()).toBe("bob@marley.com");


});
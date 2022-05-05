const Manager = require("../lib/Manager");

test("Testing manager object creation", () => {
    const newManager = new Manager("Peter Tosh", 2, "peter@tosh.com");

    expect(newManager.getName()).toBe("Peter Tosh");
    expect(newManager.getRole()).toBe("Manager");
    expect(newManager.getId()).toBe(2);
    expect(newManager.getEmail()).toBe("peter@tosh.com");

})
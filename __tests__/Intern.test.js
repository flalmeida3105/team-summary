const Intern = require("../lib/Intern");

test("Testing Intern object creation", () => {
    const newIntern = new Intern("Jack Johnson", 2, "jack@johnson.com");

    expect(newIntern.getName()).toBe("Jack Johnson");
    expect(newIntern.getRole()).toBe("Intern");
    expect(newIntern.getId()).toBe(2);
    expect(newIntern.getEmail()).toBe("jack@johnson.com");
})
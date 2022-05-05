const Engineer = require("../lib/Engineer");

test("Testing engineer object creation", () => {
    const newEngineer = new Engineer("Ziggy Marley", 3, "ziggy@marley.com", "github")

    expect(newEngineer.getName()).toBe("Ziggy Marley");
    expect(newEngineer.getId()).toBe(3);
    expect(newEngineer.getRole()).toBe("Engineer");
    expect(newEngineer.getEmail()).toBe("ziggy@marley.com");
    expect(newEngineer.getGithub()).toBe("github");



})
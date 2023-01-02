const Intern = require("../roles/Intern");

test("School", () => {
    const testValue = "UCLA";
    const e = new Intern("Jane Doe", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() test should return Intern", ()=> {
    const testValue = "Intern";
    const e = new Intern("Jane Doe", 1, "test@test.com", "UCLA");
    expect(e.getRole()).toBe(testValue);
});

test("getSchool() test", () => {
    const testValue = "UCLA";
    const e = new Intern("Jane Doe", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});
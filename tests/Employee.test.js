const Employee = require("../roles/Employee");

test("New Employee Constructor", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Employee Name", () => {
    const name = "John Doe";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Employee ID", () => {
    const testValue = 100;
    const e = new Employee("Jane Doe", testValue);
    expect(e.id).toBe(testValue);
});

test("Employee Email", () => {
    const testValue = "test@test.com";
    const e = new Employee("Jane Doe", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("GetName Test", () => {
    const testValue = "John Doe";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("GetID Test", () => {
    const testValue = 100;
    const e = new Employee("Jane Doe", testValue);
    expect(e.getId()).toBe(testValue);
});

test("GetEmail Test", () => {
    const testValue = "test@test.com";
    const e = new Employee("Jane Doe", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() test should return Employee", ()=> {
    const testValue = "Employee";
    const e = new Employee("Jane Doe", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});

test("getGithub() test", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Jane Doe", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});
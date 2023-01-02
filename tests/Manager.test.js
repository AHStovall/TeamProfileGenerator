const Manager = require("../roles/Manager");
const Employee = require("../roles/Employee");

test("Office Number", () => {
    const testValue = 100;
    const e = new Manager("Jane Doe", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("getRole() test should return Manager", ()=> {
    const testValue = "Manager";
    const e = new Manager("Jane Doe", 1, "test@test.com", 100);
    expect(e.getRole()).toBe(testValue);
});

test("getOffice() test", () => {
    const testValue = 100;
    const e = new Manager("Jane Doe", 1, "test@test.com", testValue);
    expect(e.getOffice()).toBe(testValue);
});
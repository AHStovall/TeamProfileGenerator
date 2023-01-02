const Engineer = require("../roles/Engineer");

test("GitHub Account", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Jane Doe", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() test should return Engineer", ()=> {
    const testValue = "Engineer";
    const e = new Engineer("Jane Doe", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("getGithub() test", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Jane Doe", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});
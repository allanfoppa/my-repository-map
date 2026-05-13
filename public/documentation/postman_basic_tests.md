# TESTS IN POSTMAN

[Postman learning center](https://learning.postman.com/docs/writing-scripts/test-scripts/)

Basic endpoint validation based on studies and POCs.

```javascript
// RESPONSE BODY
const jsonData = pm.response.json();
// RESPONSE STATUS CODE
const statusCode = pm.response.code;
// GET ONLY FIRST OBJECT TO ASSERT
const first = jsonData[0];

// STATUS 200
const validate200 = () => {
  pm.test("Status code is 200", () => {
    pm.response.to.have.status(200);
  });

  pm.test("Response asserts keys", () =>  {
    pm.expect(first).to.have.all.keys(
      "id",
      "name",
      "age",
    )
  });

  pm.test("Test data type of the response", () => {
    pm.expect(first.id).to.be.a("number");
    pm.expect(first.name).to.be.a("string");
    pm.expect(first.age).to.be.a("string");
  });
}

// STATUS 400
const validate400 = () => {
  pm.test("Status code is 400", () => {
    pm.response.to.have.status(400);
  });

  pm.test("Test data type of the response", () => {
    pm.response.to.be.an("object");
  });

  pm.test("Response asserts keys", () =>  {
    pm.expect(jsonData.errors).to.be.an('array');
  });
}

// COMMON
const isLessThan200ms = () => { // Test suggested by Postman himself
  pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
  });
}

const validateIsJSON = () => {
  pm.test("Response has a JSON body", () =>  {
    pm.response.to.be.json;
  });
}

// ASSERT STATUS AND TEST
switch (statusCode) {
  case 200:
    isLessThan200ms()
    validateIsJSON()
    validate200()
    break;
  case 400:
    isLessThan200ms()
    validateIsJSON()
    validate400()
    break;
  default:
      break;
}

```

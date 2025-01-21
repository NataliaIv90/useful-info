const results = await Promise.all([asyncFunction1(), asyncFunction2(), asyncFunction3()]);

// Create three async functions using setTimeout

function asyncFunction1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("output----1");
      resolve(1); // Return 1
    }, 1000); // 1 second delay
  });
}

function asyncFunction2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("output----2");
      resolve(2); // Return 2
    }, 2000); // 2 second delay
  });
}

function asyncFunction3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("output----3");
      resolve(3); // Return 3
    }, 3000); // 3 second delay
  });
}

// Call the functions and measure execution time
async function executeAsyncFunctions() {
  console.time("Execution Time (Sequential)");
  const startTime = Date.now();

  const result1 = await asyncFunction1();
  const result2 = await asyncFunction2();
  const result3 = await asyncFunction3();

  const endTime = Date.now();
  console.timeEnd("Execution Time (Sequential)");

  console.log("Time Taken (Sequential):", endTime - startTime, "ms");
  console.log("Results:", result1, result2, result3);
}

async function executeAsyncFunctionsConcurrently() {
  console.time("Execution Time (Concurrent)");
  const startTime = Date.now();

  const results = await Promise.all([asyncFunction1(), asyncFunction2(), asyncFunction3()]);

  const endTime = Date.now();
  console.timeEnd("Execution Time (Concurrent)");

  console.log("Time Taken (Concurrent):", endTime - startTime, "ms");
  console.log("Results:", results);
}

executeAsyncFunctions();
executeAsyncFunctionsConcurrently();
function delay(ms, label) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`  [Macrotask fired] → resolving: "${label}"`);
      resolve(label);
    }, ms);
  });
}

function log(step, detail) {
  console.log(`\n[${step}] ${detail}`);
}

async function runPipeline() {
  log("SYNC START", "runPipeline() added to call stack");

  // Step A : sequential dependency
  log("A", "Starting Step A (300ms)");

  const resultA = await delay(300, "A-complete");

  log("A-done", `Received: ${resultA} — Call stack: [runPipeline]`);

  // Step B : depends on A
  log("B", "Starting Step B (depends on A result) (500ms)");
  const resultB = await delay(500, "B-complete");
  log("B-done", `Received: ${resultB}`);

  // Steps C & D :  can run in parallel (both launched before either await)
  log("C+D", "Launching C and D in parallel (no await before both)");

  const promiseC = delay(400, "C-complete");
  const promiseD = delay(200, "D-complete");

  const [resultC, resultD] = await Promise.all([promiseC, promiseD]);
  log("C+D-done", `C: ${resultC}, D: ${resultD}`);

  // Step E : error handling demonstration
  log("E", "Starting Step E — this will reject");
  const promiseE = new Promise((_, reject) => {
    setTimeout(() => {
      console.log("  [Macrotask fired] → rejecting E");
      reject(new Error("Step E failed — kitchen fire!"));
    }, 100);
  });

  try {
    await promiseE;
  } catch (err) {
    log("E-catch", `Caught error: ${err.message}`);
    log("E-recover", "Continuing with fallback value");
  }

  log("PIPELINE DONE", "All steps complete");
  return { resultA, resultB, resultC, resultD };
}

function demonstrateEventLoop() {
  console.log("\n===== EVENT LOOP ORDER DEMO =====");

  console.log("1 - sync: logged immediately (call stack)");

  setTimeout(() => console.log("2 - setTimeout(0): macrotask queue"), 0);

  Promise.resolve()
    .then(() => {
      console.log("3 - Promise.then: microtask queue (first)");

      return Promise.resolve();
    })
    .then(() => console.log("4 - chained .then: microtask queue (second)"));

  queueMicrotask(() =>
    console.log("5 - queueMicrotask: microtask queue (third)"),
  );

  console.log("6 - sync: logged before any async (still on call stack)");
}

demonstrateEventLoop();

setTimeout(() => {
  console.log("\n===== ASYNC PIPELINE =====");
  runPipeline()
    .then((results) => {
      console.log("\nFinal results:", results);
    })
    .catch((err) => {
      console.error("Unhandled pipeline error:", err);
    });
}, 50);

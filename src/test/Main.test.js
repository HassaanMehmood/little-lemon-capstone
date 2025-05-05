import { initializeTimes, updateTimes } from "../Main";

test("initializeTimes returns the correct default times", () => {
  const times = initializeTimes();
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});

test("updateTimes returns the same times when called", () => {
  const before = ["17:00", "18:00", "19:00"];
  const after = updateTimes("2025-05-06", before);
  expect(after).toEqual(before);
  // And importantly, not the same array reference:
  expect(after).not.toBe(before);
});

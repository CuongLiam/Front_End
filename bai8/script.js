for (let i = 100; i <= 999; i++) {
  if (
    Math.pow(Math.floor(i / 100), 3) +
      Math.pow(Math.floor((i % 100) / 10), 3) +
      Math.pow(i % 10, 3) ===
    i
  ) {
    console.log(i);
  }
}

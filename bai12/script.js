for (let i = 0; i < 10; i++) {
  let randomColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${
    Math.random() * 256
  })`;

  console.log(
    `%cMàu sắc đã được thay đổi`,
    `color: ${randomColor}; font-weight: bold; font-size: 14px`
  );
}

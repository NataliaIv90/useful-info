const range = {
  start: 1,
  end: 5,

  [Symbol.iterator]() {
    let current = this.start;
    const end = this.end;

    // Повертаємо ітератор-обʼєкт з методом next()
    return {
      next() {
        if (current <= end) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

// Тепер можна використовувати for...of
for (const num of range) {
  console.log(num);
}

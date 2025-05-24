// 📌 Що таке Promise?
// Promise — це обʼєкт, який представляє результат асинхронної операції. Він може бути в одному з трьох станів:
// pending (очікування) — початковий стан, операція ще триває.
// fulfilled (успішно виконано) — операція завершилася успішно.
// rejected (відхилено) — операція завершилася з помилкою.

// 📌 Створення проміса

const myPromise = new Promise((resolve, reject) => {
  // Тут асинхронна операція
  const success = true;

  if (success) {
    resolve("Все добре!");
  } else {
    reject("Щось пішло не так.");
  }
});

// 📌 Обробка результату
// У проміса є методи:
// .then() — виконується, якщо Promise виконався успішно.
// .catch() — якщо виникла помилка.
// .finally() — виконується в будь-якому випадку (успіх чи помилка).

myPromise
  .then(result => {
    console.log("Результат:", result);
  })
  .catch(error => {
    console.error("Помилка:", error);
  })
  .finally(() => {
    console.log("Операція завершена.");
  });

// 📌 Асинхронна операція з setTimeout

const timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Пройшла 1 секунда!");
  }, 1000);
});

timeoutPromise.then(message => {
  console.log(message);
});

// 📌 Promise chaining (ланцюжок промісів)

new Promise((resolve, reject) => {
  setTimeout(() => resolve(10), 1000);
})
  .then(result => {
    console.log(result); // 10
    return result * 2;
  })
  .then(result => {
    console.log(result); // 20
    return result * 2;
  })
  .then(result => {
    console.log(result); // 40
  });

// 📌 Promise.all / Promise.race / Promise.allSettled
// Promise.all — очікує виконання всіх промісів, повертає масив результатів.
// Promise.race — спрацьовує, коли перший проміс виконався.
// Promise.allSettled — повертає результати всіх промісів незалежно від їхнього стану.

Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
]).then(results => {
  console.log(results); // [1, 2, 3]
});

// 📌 Сучасний async/await (працює поверх промісів)

const fetchData = async () => {
  try {
    const result = await timeoutPromise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

fetchData();

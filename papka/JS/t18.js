const readline = require("node:readline/promises");
const { stdin, stdout } = require("node:process");

const rl = readline.createInterface({ input: stdin, output: stdout });

const cat = {
  name: "Пончик",
  mood: 5,
  snacks: 3,
};

console.log(`🐈 Ты встретил кота по имени ${cat.name}.`);
console.log("Команды: погладить, покормить, статус, выход");

async function main() {
  try {
    while (true) {
      let command;

      try {
        command = (await rl.question("> ")).trim().toLowerCase();
      } catch {
        // Ввод завершён, например, пользователь нажал Ctrl+D.
        break;
      }

      if (command === "выход") {
        break;
      } else if (command === "погладить") {
        cat.mood = Math.min(10, cat.mood + 1);
        console.log(`🐈 ${cat.name} довольно мурчит. Настроение: ${cat.mood}/10`);
      } else if (command === "покормить") {
        if (cat.snacks > 0) {
          cat.snacks--;
          cat.mood = Math.min(10, cat.mood + 2);
          console.log(`🐈 ${cat.name} съел вкусняшку. Осталось: ${cat.snacks}`);
        } else {
          console.log("🐈 Вкусняшек нет. Кот выразительно смотрит на тебя.");
        }
      } else if (command === "статус") {
        console.log(
          `🐈 ${cat.name}: настроение ${cat.mood}/10, вкусняшек ${cat.snacks}`
        );
      } else {
        console.log("🐈 Не понимаю. Попробуй: погладить, покормить, статус или выход.");
      }
    }
  } finally {
    rl.close();
    console.log("🐈 Кот свернулся клубочком. Пока!");
  }
}

main();

type Message = { text: string; emoji: string };
const msg: Message = { text: "Hi from TypeScript!", emoji: "🧠" };

document.getElementById("main-ts")!.innerText = `${msg.text} ${msg.emoji}`;

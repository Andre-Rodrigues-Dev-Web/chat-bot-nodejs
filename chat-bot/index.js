const venom = require("venom-bot");

venom
  .create({
    session: "session-name",
    multidevice: true,
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.body === "Olá" && message.isGroupMsg === false) {
      client
        .sendText(message.from, "Como posso ajudar?")
        .then((result) => {
          console.log("Resultado: ", result);
        })
        .catch((erro) => {
          console.error("Error when sending: ", erro);
        });
    }
  });
}

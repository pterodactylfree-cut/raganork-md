const { Module } = require("../main");

Module(
  {
    pattern: "reload",
    fromMe: true,
    excludeFromCommands: true,
  },
  async (m) => {
    await m.sendReply("_SOURAJIT-Reloading bot..._");
    process.exit(0);
  }
);

Module(
  {
    pattern: "reboot",
    fromMe: true,
    excludeFromCommands: true,
  },
  async (m) => {
    await m.sendReply("_SOURAJIT-Reloading bot..._");
    process.exit(0);
  }
);

Module(
  {
    pattern: "restart",
    fromMe: true,
    desc: "Restarts the bot",
    use: "system",
  },
  async (m) => {
    await m.sendReply("_SOURAJIT-Restarting bot..._");
    process.exit(0);
  }
);


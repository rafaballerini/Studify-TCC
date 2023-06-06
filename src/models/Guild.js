const mongoose = require("mongoose");

const guildSchema = new mongoose.Schema(
    {
        _id: {type: mongoose.Schema.Types.ObjectId},
        guildId: {type: String, required: true},
        guildName: {type: String, required: true},
        guildIcon: {type: String, required: false}
    }
);

const guilds = mongoose.model("guilds", guildSchema);

module.exports = guilds;
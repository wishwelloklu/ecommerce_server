const { Schema, model } = require("mongoose");

const tokenSchema = Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  refreshToken: { type: String, required: true },
  accessToken: String,
  createdAt: { type: String, expires: 60 * 86400, default: Date.now  },
});

exports.Token = model("Token", tokenSchema);

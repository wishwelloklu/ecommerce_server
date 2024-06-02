const { Schema, model } = require("mongoose");
const userSchema = Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  passwordHash: { type: String, required: true },
  street: String,
  houseAddress: String,
  city: String,
  phone: { type: String, required: true, trim: true },
  isAdmin: { type: Boolean, default: false },
  passwordOtp: Number,
  passwordResetOtp: Date,
  wishList: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      productName: { type: String, required: true },
      productImage: { type: String, required: true },
      productPrice: { type: Number, required: true },
    },
  ],
});

userSchema.index({ email: 1 }, { unique: true });

exports.User = model("User", userSchema);

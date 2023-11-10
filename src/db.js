import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("Connecting to the database...");
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/merndb",
      {
        useNewUrlParser: true,   // Opcional, pero recomendado para evitar advertencias.
        useUnifiedTopology: true,  // Opcional, pero recomendado para evitar advertencias.
      }
    );
    console.log(">>>>> Database is connected");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("Connecting to the database...");
    await mongoose.connect(
      "mongodb+srv://freddyalfonzo01:josuealfonzo123@cluster0.5s4wcy2.mongodb.net/merndb?retryWrites=true&w=majority",
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

import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./db";

async function main() {
  try {
    await AppDataSource.initialize(); // * metodo inicialize para crear la conexion con postgres
    console.log("Database connected");

    app.listen(3000, () => {
      console.log("Server listening on port ", 3000);
    });
  } catch (error: any) {
    console.log(error.message);
  }
}

main();

import { DataSource } from "typeorm";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  username: "luisvasquez",
  password: "mysecretpassword",
  port: 5432,
  database: "typeormdb",
  entities: [User],
  logging: true,
  synchronize: true
});

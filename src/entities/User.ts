import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from "typeorm";

/**
 * ? las entidades se defines con clases
 * ? las entidades son tablas en la base de datos
 */

@Entity() // ! se le puede pasar un nombre, pero por defecto toma el nombre de la clase
export class User extends BaseEntity {
  // ? BaseEntity es para poder usar el modelo en otros archivos y hacer consultas

  @PrimaryGeneratedColumn() // * decir que no solo son propiedades, si no columnas
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: true }) // * valor por defecto
  active: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

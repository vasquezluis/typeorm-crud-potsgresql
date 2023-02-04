import { Request, Response } from "express";
import { User } from "../entities/User";

export const getUser = async (req: Request, res: Response) => {
  try {
    const {
      params: { id },
    } = req;

    const userFound = await User.findOneBy({ id: parseInt(id) }); // * buscar usuario

    if (userFound) {
      res.json(userFound);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find(); // ! obtener los datos con el metodo find()

    res.json(users);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email } = req.body;

    const user = new User();

    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;

    // ! guardar en la BdD
    await user.save();

    res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const {
      params: { id },
    } = req;

    // * buscar existencia de usuario
    const userFound = await User.findOneBy({ id: parseInt(id) });

    if (userFound) {
      // * actualizar usuario encontrado
      await User.update({ id: parseInt(id) }, req.body); // ? parametros de busqueda y nuevos campos

      res.sendStatus(204);
    } else {
      res.status(404).json({ message: "User not Found" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const {
      params: { id },
    } = req;

    // * buscar existencia de usuario
    const userFound = await User.findOneBy({ id: parseInt(id) });

    if (userFound) {
      // ! eliminar usuario encontrado
      User.delete({ id: parseInt(id) });

      res.sendStatus(204);
    } else {
      res.status(404).json({ message: "User not Found" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

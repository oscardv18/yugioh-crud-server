import express, { Router, Request, Response } from "express";
import User from "../../../../db/models/user";
// import bcrypt from "bcrypt";

const router: Router = express.Router();
// Register
router.post("/signup", (_req: Request, res: Response) => {
  try {
    const newUser = new User({
      username: "oscardv18",
      fname: "Oscar",
      lname: "Diaz",
      password: "18os-123$$$M",
      phone_number: 231234124,
      email: "mail@mail.com",
      profile_photo: "owquoqwieuoquwe.jpg",
    });

    newUser
      .save()
      .then((coll) => {
        console.log("User created successfully", coll);
      })
      .catch((err) => {
        console.error("Error to create collection: ", err);
      });
    res.status(201).json({
      name: newUser.fname,
      mail: newUser.email,
    });
  } catch (err) {
    res.status(500).json({ err: "Error al crear la coleccion" });
  }
});

export default router;

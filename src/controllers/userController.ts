import {Request, Response} from "express"
import * as userService from "../service/userService";
import {PrismaClientKnownRequestError} from "@prisma/client/runtime";
import {toCapitalizeCase} from "../functions/toCapitalizeCase";

export const getUser = async (req: Request, res: Response) => {
    try{
        const users = await userService.getAllUsers()
        res.status(200).json( users )
    }catch (e) {
        res.status(500).json(
            {
                message: "Une erreur c'est produite."
            }
        )
    }
}

export const getUserById = async (req: Request, res: Response) => {
    try{
        const users = await userService.getUserById(req.params.id)
        res.status(200).json( users )
    }catch (e) {
        res.status(500).json(
            {
                message: "Une erreur c'est produite."
            }
        )
    }
}

export const createUser = async (req: Request, res: Response) => {
    try{
        const user = await userService.createUser(req.body)
        res.status(200).json(
            {
                message: `L'utilisateur ${toCapitalizeCase(user.username)} à bien été crée!`
            }
        )
    }catch (e) {
        res.status(500).json(
            {
                message: "L'utilisateur n'a pas été crée."
            }
        )
    }
}

export const deleteUser = async (req: Request, res: Response) => {
  try{
      const user = await userService.deleteUser(req.params.id)
      res.status(200).json({
          message:`L'utilisateur ${user.username} à bien été supprimé!`
      })
  }catch (e) {
      res.status(500).json(
          {
              message: "L'utilisateur n'a pas été supprimé."
          }
      )
  }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await userService.updateUserById(req.params.id, req.body)
        res.status(200).json({
            message: `L'utilisateur ${user.id} (${user.username}) a été modifié.`
        })
    } catch (e) {
        if( e instanceof PrismaClientKnownRequestError){
            res.status(404).json(e.meta)
        }else{
            res.status(500).json(
                {
                    message: "une erreur c'est produite."
                }
            )
        }
    }
}
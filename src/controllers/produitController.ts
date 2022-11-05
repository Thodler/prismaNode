import {Request, Response} from "express"
import * as produitService from "../service/produitService"

export const getAllProduit = async (req: Request, res: Response) => {
    try{
        const produits = await produitService.getAllProduits()
        res.status(200).json( produits )
    }catch (e) {
        res.status(500).json({
            message: "Une erreur c'est produite."
        })
    }
}

export const getProductById = async (req: Request, res: Response) => {
    try {
        const produit = await produitService.getProduitById(req.params.id)
        res.status(200).json( produit )
    } catch (e) {
        res.status(500).json({
            message: "Une erreur c'est produite."
        })
    }
}
export const createProduit = async (req: Request, res: Response) => {
  try {
      const produit = await produitService.createProduit(req.body)
      res.status(200).json({
          message:`Le produit ${produit.name} a été crée.`
        })
  } catch (e) {
      res.status(500).json({
          message: "Une erreur c'est produite."
      })
  }
}
//TODO: CRUD
// - Modifier un produit
// - Supprimer un produit par son id
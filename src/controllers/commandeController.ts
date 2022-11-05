import {Request, Response} from "express";
import * as commandeService from "../service/commandeService"

export const getAllCommandes = async (req: Request, res: Response) => {
    try {
        const commande = await commandeService.getAllCommandes()
        res.status(200).json(commande)
    } catch (e) {
        res.status(500).json({
            message: "Une erreur c'est produite."
        })
    }
}

export const createCommande = async (req: Request, res: Response) => {
    try {
        const commande = await commandeService.createCommande(req.body)
        res.status(200).json({
            message: `La commande n°${commande.id} à été crée!`
        })
    } catch (e) {
        res.status(500).json({
            message: "Une erreur c'est produite."
        })
    }
}

export const deleteCommande = async (req: Request, res: Response) => {
    try {
        const commande = await commandeService.deleteCommande(req.params.id)
        res.status(200).json({
            message: `La commande n°${commande.id} à été supprimé!`
        })
    } catch (e) {
        res.status(500).json({
            message: "Une erreur c'est produite."
        })
    }
}
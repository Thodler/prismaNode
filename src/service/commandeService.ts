import {prisma} from "../prisma";
import {Commande} from "@prisma/client"

export const getAllCommandes = () => {
    return prisma.commande.findMany()
}

export const createCommande = (data: Commande) => {
    return prisma.commande.create({
        data:data
    })
}

export const deleteCommande = (id: string) => {
    return prisma.commande.delete({
        where:{
            id: parseInt(id)
        }
    })
}

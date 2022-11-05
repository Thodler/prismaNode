import {prisma} from "../prisma"
import {Produit} from "@prisma/client"

export const getAllProduits = () => {
    return prisma.produit.findMany()
}

export const getProduitById = (id: string) => {
    return prisma.produit.findUnique({
        where:{
            id: parseInt(id)
        }
    })
}

export const createProduit = (data: Produit) => {
    return prisma.produit.create({
        data: data
    })
}
// TODO: CRUD
//  - Modifier un produit
//  - Supprimer un produit par son id
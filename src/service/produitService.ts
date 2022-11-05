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

export const updateProduit = (id: string, data: Produit) => {
    return prisma.produit.update({
        where:{
            id: parseInt(id)
        },
        data: data
    })
}

export const deleteProduit = (id: string) => {
    return prisma.produit.delete({
        where:{
            id: parseInt(id)
        }
    })
}

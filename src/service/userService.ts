import {prisma} from "../prisma"
import {User} from '@prisma/client'

/**
 * Récupere tout les utilisateurs
 */
export const getAllUsers = () => {
    return prisma.user.findMany();
}

export const getUserById = (id: string) => {
    return prisma.user.findUnique({
        where:{
            id: parseInt(id)
        }
    })
}

/**
 * Crée un utilisateur
 * @param data
 */
export const createUser = (data: User) => {
    const {email, username} = data;
    return prisma.user.create({
        data: {
            email: email.toLowerCase(),
            username: username?.toLowerCase()
        }
    })
}

/**
 * Supprime un utilisateur par son ID
 * @param id
 */
export const deleteUser = (id: string) => {
    return prisma.user.delete({
        where:{
            id: parseInt(id)
        }
    })
}

/**
 * Modifie un utilisateur par son ID
 * @param id
 * @param data
 */
export const updateUserById = (id: string, data: User) => {
    return prisma.user.update({
        where:{
            id: parseInt(id)
        },
        data: data
    })
}
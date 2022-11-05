/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Commande` table. All the data in the column will be lost.
  - Added the required column `clientId` to the `Commande` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "CommandeOnProduit" (
    "commandeId" INTEGER NOT NULL,
    "produitId" INTEGER NOT NULL,
    "commandeAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("commandeId", "produitId"),
    CONSTRAINT "CommandeOnProduit_commandeId_fkey" FOREIGN KEY ("commandeId") REFERENCES "Commande" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CommandeOnProduit_produitId_fkey" FOREIGN KEY ("produitId") REFERENCES "Produit" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Commande" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clientId" INTEGER NOT NULL,
    CONSTRAINT "Commande_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Commande" ("id") SELECT "id" FROM "Commande";
DROP TABLE "Commande";
ALTER TABLE "new_Commande" RENAME TO "Commande";
CREATE TABLE "new_Produit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "prix" INTEGER NOT NULL DEFAULT 0,
    "stock" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Produit" ("description", "id", "name", "prix") SELECT "description", "id", "name", "prix" FROM "Produit";
DROP TABLE "Produit";
ALTER TABLE "new_Produit" RENAME TO "Produit";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

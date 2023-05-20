/*
  Warnings:

  - You are about to drop the column `sectionId` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the column `amount` on the `RecipeIngredient` table. All the data in the column will be lost.
  - You are about to drop the column `ingredientId` on the `RecipeIngredient` table. All the data in the column will be lost.
  - You are about to drop the column `unitId` on the `RecipeIngredient` table. All the data in the column will be lost.
  - You are about to drop the `Ingredient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Section` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Unit` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cookbookId` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ingredient` to the `RecipeIngredient` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Ingredient" DROP CONSTRAINT "Ingredient_userId_fkey";

-- DropForeignKey
ALTER TABLE "Recipe" DROP CONSTRAINT "Recipe_sectionId_fkey";

-- DropForeignKey
ALTER TABLE "RecipeIngredient" DROP CONSTRAINT "RecipeIngredient_ingredientId_fkey";

-- DropForeignKey
ALTER TABLE "RecipeIngredient" DROP CONSTRAINT "RecipeIngredient_unitId_fkey";

-- DropForeignKey
ALTER TABLE "Section" DROP CONSTRAINT "Section_cookbookId_fkey";

-- DropForeignKey
ALTER TABLE "Unit" DROP CONSTRAINT "Unit_userId_fkey";

-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "sectionId",
ADD COLUMN     "cookbookId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "RecipeIngredient" DROP COLUMN "amount",
DROP COLUMN "ingredientId",
DROP COLUMN "unitId",
ADD COLUMN     "ingredient" TEXT NOT NULL;

-- DropTable
DROP TABLE "Ingredient";

-- DropTable
DROP TABLE "Section";

-- DropTable
DROP TABLE "Unit";

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_cookbookId_fkey" FOREIGN KEY ("cookbookId") REFERENCES "Cookbook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

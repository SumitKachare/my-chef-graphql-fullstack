/*
  Warnings:

  - A unique constraint covering the columns `[ingredient,userId]` on the table `Ingredient` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[unit,userId]` on the table `Unit` will be added. If there are existing duplicate values, this will fail.
  - Made the column `amount` on table `RecipeIngredient` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "RecipeIngredient" DROP CONSTRAINT "RecipeIngredient_unitId_fkey";

-- AlterTable
ALTER TABLE "RecipeIngredient" ALTER COLUMN "amount" SET NOT NULL,
ALTER COLUMN "unitId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Ingredient_ingredient_userId_key" ON "Ingredient"("ingredient", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "Unit_unit_userId_key" ON "Unit"("unit", "userId");

-- AddForeignKey
ALTER TABLE "RecipeIngredient" ADD CONSTRAINT "RecipeIngredient_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `custom_price` on the `platforms` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "platforms" DROP COLUMN "custom_price";

-- AlterTable
ALTER TABLE "subscriptions" ADD COLUMN     "custom_price" INTEGER;

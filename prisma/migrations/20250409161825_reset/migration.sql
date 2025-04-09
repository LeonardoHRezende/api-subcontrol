/*
  Warnings:

  - You are about to drop the column `company_id` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `company_name` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the `companies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "accounts" DROP CONSTRAINT "accounts_company_id_fkey";

-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "company_id",
DROP COLUMN "company_name",
DROP COLUMN "role";

-- DropTable
DROP TABLE "companies";

-- DropEnum
DROP TYPE "Role";

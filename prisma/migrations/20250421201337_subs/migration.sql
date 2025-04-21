/*
  Warnings:

  - Changed the type of `status` on the `subscriptions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "STATUS" AS ENUM ('ACTIVE', 'WARNING', 'CANCELED');

-- AlterTable
ALTER TABLE "subscriptions" DROP COLUMN "status",
ADD COLUMN     "status" "STATUS" NOT NULL;

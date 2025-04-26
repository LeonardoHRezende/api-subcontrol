-- AlterTable
ALTER TABLE "accounts" ADD COLUMN     "terms_accepted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "terms_accepted_at" TIMESTAMPTZ(6);

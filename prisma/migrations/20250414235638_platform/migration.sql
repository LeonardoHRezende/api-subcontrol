-- CreateEnum
CREATE TYPE "RECURRENCE" AS ENUM ('MONTHLY', 'YEARLY');

-- CreateEnum
CREATE TYPE "CATEGORIES" AS ENUM ('SOCIAL', 'STREAMING', 'GAMING', 'PRODUCTIVITY', 'MUSIC', 'NEWS', 'FITNESS', 'EDUCATION', 'TRAVEL', 'FOOD', 'SHOPPING', 'SECURITY', 'INVESTMENT', 'ENTERTAINMENT', 'HEALTH', 'ADULT', 'OTHER');

-- CreateTable
CREATE TABLE "subscriptions" (
    "id" UUID NOT NULL,
    "plan" TEXT NOT NULL,
    "recurrence" "RECURRENCE" NOT NULL,
    "status" TEXT NOT NULL,
    "start_date" TIMESTAMPTZ(6) NOT NULL,
    "tag" VARCHAR(100),
    "canceled_at" TIMESTAMPTZ(6),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    "account_id" UUID NOT NULL,
    "platformsId" UUID,

    CONSTRAINT "subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "platforms" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "category" "CATEGORIES" NOT NULL,
    "image_url" TEXT NOT NULL,
    "website_url" TEXT NOT NULL,
    "custom_price" INTEGER,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    "canceled_at" TIMESTAMPTZ(6),

    CONSTRAINT "platforms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "platforms_history_prices" (
    "id" UUID NOT NULL,
    "monthly_price" INTEGER,
    "yearly_price" INTEGER,
    "date" TIMESTAMPTZ(6) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    "platform_id" UUID NOT NULL,

    CONSTRAINT "platforms_history_prices_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_platformsId_fkey" FOREIGN KEY ("platformsId") REFERENCES "platforms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "platforms_history_prices" ADD CONSTRAINT "platforms_history_prices_platform_id_fkey" FOREIGN KEY ("platform_id") REFERENCES "platforms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

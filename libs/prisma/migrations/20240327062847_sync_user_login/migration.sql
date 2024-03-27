/*
  Warnings:

  - Added the required column `nonce` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('USER', 'REFERRAL_PROVIDER', 'AFFILIATE', 'ADMIN');

-- CreateEnum
CREATE TYPE "STATUS" AS ENUM ('ACTIVE', 'INACTIVE', 'DELETE');

-- CreateEnum
CREATE TYPE "SUPPORTED_NETWORK" AS ENUM ('NONE', 'SEPOLIA_TESTNET');

-- CreateEnum
CREATE TYPE "EVENT_TYPE" AS ENUM ('NON_TRANSACTION', 'TRANSACTION');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "nonce" TEXT NOT NULL,
ADD COLUMN     "role" "ROLE" NOT NULL DEFAULT 'USER',
ADD COLUMN     "status" "STATUS" NOT NULL DEFAULT 'ACTIVE';

-- CreateTable
CREATE TABLE "AuthToken" (
    "userId" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "encryptedRefreshToken" TEXT,

    CONSTRAINT "AuthToken_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "UserReferral" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "referralId" TEXT NOT NULL,
    "claimed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserReferral_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Referral" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Referral_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "webLink" VARCHAR(1024) NOT NULL,
    "twitterLink" VARCHAR(1024),
    "description" TEXT NOT NULL,
    "apiKey" TEXT NOT NULL,
    "isSdkIntegrated" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IncentivePool" (
    "productId" TEXT NOT NULL,
    "poolAddress" VARCHAR(42) NOT NULL,
    "poolNetwork" "SUPPORTED_NETWORK" NOT NULL,
    "incentiveAddress" VARCHAR(42) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IncentivePool_pkey" PRIMARY KEY ("productId")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "type" "EVENT_TYPE" NOT NULL DEFAULT 'NON_TRANSACTION',
    "providerAmountPerEvent" TEXT NOT NULL,
    "userAmountPerEvent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "targetAddress" VARCHAR(42) NOT NULL,
    "methodId" VARCHAR(10) NOT NULL,
    "eventId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AuthToken_userId_key" ON "AuthToken"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Referral_eventId_key" ON "Referral"("eventId");

-- CreateIndex
CREATE UNIQUE INDEX "IncentivePool_poolAddress_key" ON "IncentivePool"("poolAddress");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_eventId_key" ON "Transaction"("eventId");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_targetAddress_methodId_key" ON "Transaction"("targetAddress", "methodId");

-- AddForeignKey
ALTER TABLE "AuthToken" ADD CONSTRAINT "AuthToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserReferral" ADD CONSTRAINT "UserReferral_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserReferral" ADD CONSTRAINT "UserReferral_referralId_fkey" FOREIGN KEY ("referralId") REFERENCES "Referral"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Referral" ADD CONSTRAINT "Referral_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IncentivePool" ADD CONSTRAINT "IncentivePool_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

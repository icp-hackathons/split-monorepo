/*
  Warnings:

  - Added the required column `userReferralType` to the `UserReferral` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "USER_REFERRAL_TYPE" AS ENUM ('USER', 'REFERRAL_PROVIDER');

-- AlterTable
ALTER TABLE "UserReferral" ADD COLUMN     "userReferralType" "USER_REFERRAL_TYPE" NOT NULL;

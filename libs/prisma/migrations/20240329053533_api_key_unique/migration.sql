/*
  Warnings:

  - A unique constraint covering the columns `[apiKey]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Product_apiKey_key" ON "Product"("apiKey");

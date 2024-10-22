/*
  Warnings:

  - You are about to drop the `Contact` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Contact";

-- CreateTable
CREATE TABLE "User" (
    "email" TEXT NOT NULL,
    "pswd" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

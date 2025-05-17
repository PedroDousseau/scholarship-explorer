/*
  Warnings:

  - Added the required column `message` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studentEmail` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studentName` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `utm` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Application" ADD COLUMN     "message" TEXT NOT NULL,
ADD COLUMN     "studentEmail" TEXT NOT NULL,
ADD COLUMN     "studentName" TEXT NOT NULL,
ADD COLUMN     "utm" TEXT NOT NULL;

/*
  Warnings:

  - You are about to drop the `sp` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `sp` DROP FOREIGN KEY `sp_applicantUserId_fkey`;

-- DropTable
DROP TABLE `sp`;

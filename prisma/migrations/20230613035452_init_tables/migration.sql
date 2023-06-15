/*
  Warnings:

  - You are about to drop the column `suspended_at` on the `query` table. All the data in the column will be lost.
  - You are about to drop the column `suspended_by` on the `query` table. All the data in the column will be lost.
  - You are about to drop the column `suspended_at` on the `sp` table. All the data in the column will be lost.
  - You are about to drop the column `suspended_by` on the `sp` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[mobile]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `queryStatus` to the `query` table without a default value. This is not possible if the table is not empty.
  - Added the required column `illegalSqMtr` to the `sp` table without a default value. This is not possible if the table is not empty.
  - Added the required column `landAreaSqrMtr` to the `sp` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `sp` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalAssessment` to the `sp` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalConversionFee` to the `sp` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalIrrigationFee` to the `sp` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalUnauthorizedPenalty` to the `sp` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `user_number_key` ON `user`;

-- AlterTable
ALTER TABLE `query` DROP COLUMN `suspended_at`,
    DROP COLUMN `suspended_by`,
    ADD COLUMN `documentUrl` VARCHAR(191) NULL,
    ADD COLUMN `formRefId` INTEGER NULL,
    ADD COLUMN `formUserId` INTEGER NULL,
    ADD COLUMN `queryStatus` ENUM('NONE', 'INACTIVE', 'ACTIVE') NOT NULL,
    ADD COLUMN `queryType` ENUM('NONE', 'UTS', 'STU', 'QUERY') NULL,
    ADD COLUMN `remarkComment` VARCHAR(191) NULL,
    ADD COLUMN `retFormActionID` INTEGER NULL,
    ADD COLUMN `stageId` INTEGER NULL,
    ADD COLUMN `toUserId` INTEGER NULL;

-- AlterTable
ALTER TABLE `sp` DROP COLUMN `suspended_at`,
    DROP COLUMN `suspended_by`,
    ADD COLUMN `adjointRoadAccess` MEDIUMTEXT NULL,
    ADD COLUMN `agenda1` MEDIUMTEXT NULL,
    ADD COLUMN `agenda2` MEDIUMTEXT NULL,
    ADD COLUMN `agenda3` MEDIUMTEXT NULL,
    ADD COLUMN `agenda4` MEDIUMTEXT NULL,
    ADD COLUMN `agenda5` MEDIUMTEXT NULL,
    ADD COLUMN `agenda6` MEDIUMTEXT NULL,
    ADD COLUMN `agenda7` MEDIUMTEXT NULL,
    ADD COLUMN `anyBesideLandOccupied` MEDIUMTEXT NULL,
    ADD COLUMN `anyElectricCanalPassWay` MEDIUMTEXT NULL,
    ADD COLUMN `applicantCommunity` VARCHAR(191) NULL,
    ADD COLUMN `applicantFullAddress` MEDIUMTEXT NULL,
    ADD COLUMN `applicantOccupation` VARCHAR(191) NULL,
    ADD COLUMN `applicantUid` VARCHAR(191) NULL,
    ADD COLUMN `applicantUserId` INTEGER NULL,
    ADD COLUMN `authUserId` VARCHAR(191) NULL,
    ADD COLUMN `certRefNo` VARCHAR(191) NULL,
    ADD COLUMN `email` VARCHAR(191) NULL,
    ADD COLUMN `fileNo` VARCHAR(191) NULL,
    ADD COLUMN `focalUserID` VARCHAR(191) NULL,
    ADD COLUMN `fromNoIUrl` MEDIUMTEXT NULL,
    ADD COLUMN `gramPanchayat` VARCHAR(191) NULL,
    ADD COLUMN `hearingSchedule` DATETIME(3) NULL,
    ADD COLUMN `iagree` TINYINT NULL,
    ADD COLUMN `illegalSqMtr` DECIMAL(23, 2) NOT NULL,
    ADD COLUMN `isAppllicantPersent` MEDIUMTEXT NULL,
    ADD COLUMN `landAreaSqrMtr` DECIMAL(23, 2) NOT NULL,
    ADD COLUMN `landCurrentUsage` MEDIUMTEXT NULL,
    ADD COLUMN `landSitePlanUrl` MEDIUMTEXT NULL,
    ADD COLUMN `landUnderAcquisition` MEDIUMTEXT NULL,
    ADD COLUMN `mobileNo` VARCHAR(191) NULL,
    ADD COLUMN `naType` INTEGER NULL,
    ADD COLUMN `name` VARCHAR(191) NULL,
    ADD COLUMN `noting1` MEDIUMTEXT NULL,
    ADD COLUMN `noting2` MEDIUMTEXT NULL,
    ADD COLUMN `noting3` MEDIUMTEXT NULL,
    ADD COLUMN `noting4` MEDIUMTEXT NULL,
    ADD COLUMN `noting5` MEDIUMTEXT NULL,
    ADD COLUMN `noting6` MEDIUMTEXT NULL,
    ADD COLUMN `noting7` MEDIUMTEXT NULL,
    ADD COLUMN `orderAction` TINYINT NULL,
    ADD COLUMN `orderRemark` MEDIUMTEXT NULL,
    ADD COLUMN `othrAppNames` MEDIUMTEXT NULL,
    ADD COLUMN `partition1` MEDIUMTEXT NULL,
    ADD COLUMN `partition2` MEDIUMTEXT NULL,
    ADD COLUMN `partition3` MEDIUMTEXT NULL,
    ADD COLUMN `partition4` MEDIUMTEXT NULL,
    ADD COLUMN `partition5` MEDIUMTEXT NULL,
    ADD COLUMN `partition6` MEDIUMTEXT NULL,
    ADD COLUMN `partition7` MEDIUMTEXT NULL,
    ADD COLUMN `previousRejectionReason` MEDIUMTEXT NULL,
    ADD COLUMN `profilePicUrl` MEDIUMTEXT NULL,
    ADD COLUMN `purchaseReason` MEDIUMTEXT NULL,
    ADD COLUMN `purchaserAgriculturistUrl` MEDIUMTEXT NULL,
    ADD COLUMN `purchaserFullAddress` MEDIUMTEXT NULL,
    ADD COLUMN `purchaserFullName` MEDIUMTEXT NULL,
    ADD COLUMN `purchaserGovtServantUrl` MEDIUMTEXT NULL,
    ADD COLUMN `remark` TINYINT NULL,
    ADD COLUMN `rrNakalUrl` MEDIUMTEXT NULL,
    ADD COLUMN `salePurposeReason` MEDIUMTEXT NULL,
    ADD COLUMN `signUrl` MEDIUMTEXT NULL,
    ADD COLUMN `soughtInterReport` VARCHAR(191) NULL,
    ADD COLUMN `soughtIntraReport` VARCHAR(191) NULL,
    ADD COLUMN `stageId` INTEGER NULL,
    ADD COLUMN `status` ENUM('NONE', 'INACTIVE', 'ACTIVE') NOT NULL,
    ADD COLUMN `surveyHissaNo` VARCHAR(191) NULL,
    ADD COLUMN `totalAssessment` DECIMAL(23, 2) NOT NULL,
    ADD COLUMN `totalConversionFee` DECIMAL(23, 2) NOT NULL,
    ADD COLUMN `totalIrrigationFee` DECIMAL(23, 2) NOT NULL,
    ADD COLUMN `totalUnauthorizedPenalty` DECIMAL(23, 2) NOT NULL,
    ADD COLUMN `uidaiUrl` MEDIUMTEXT NULL,
    ADD COLUMN `villageId` INTEGER NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `number`,
    ADD COLUMN `dob` DATETIME(3) NULL,
    ADD COLUMN `gender` ENUM('MALE', 'GEMALE', 'OTHER') NULL,
    ADD COLUMN `mobile` VARCHAR(191) NULL,
    ADD COLUMN `password` VARCHAR(191) NULL,
    ADD COLUMN `role` ENUM('SYSTEM', 'ADMIN', 'USER', 'COLLECTOR', 'LDC', 'SUPTD', 'DYCOLLECTOR') NULL,
    MODIFY `email` VARCHAR(191) NULL,
    MODIFY `name` VARCHAR(191) NULL,
    MODIFY `created_by` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `user_mobile_key` ON `user`(`mobile`);

-- AddForeignKey
ALTER TABLE `query` ADD CONSTRAINT `query_formUserId_fkey` FOREIGN KEY (`formUserId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `query` ADD CONSTRAINT `query_toUserId_fkey` FOREIGN KEY (`toUserId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

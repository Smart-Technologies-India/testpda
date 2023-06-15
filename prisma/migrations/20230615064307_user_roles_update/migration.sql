-- DropIndex
DROP INDEX `query_formUserId_fkey` ON `query`;

-- DropIndex
DROP INDEX `query_toUserId_fkey` ON `query`;

-- AlterTable
ALTER TABLE `user` MODIFY `role` ENUM('SYSTEM', 'ADMIN', 'USER', 'COLLECTOR', 'DYCOLLECTOR', 'ATP', 'HEADCLERK', 'CITYSURVEY', 'COURTCLERK', 'LDC', 'SUPTD') NULL;

-- AddForeignKey
ALTER TABLE `query` ADD CONSTRAINT `query_formUserId_fkey` FOREIGN KEY (`formUserId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `query` ADD CONSTRAINT `query_toUserId_fkey` FOREIGN KEY (`toUserId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

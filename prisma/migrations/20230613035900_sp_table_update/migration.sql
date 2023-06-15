-- AddForeignKey
ALTER TABLE `sp` ADD CONSTRAINT `sp_applicantUserId_fkey` FOREIGN KEY (`applicantUserId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

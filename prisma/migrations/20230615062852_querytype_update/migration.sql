/*
  Warnings:

  - The values [UTS,STU,QUERY] on the enum `query_queryType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `query` MODIFY `queryType` ENUM('NONE', 'IntraDepartment', 'InterDepartment', 'PublicApplicant') NULL;

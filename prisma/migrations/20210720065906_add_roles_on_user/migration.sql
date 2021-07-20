-- AlterTable
ALTER TABLE "User" ADD COLUMN     "roles" JSONB NOT NULL DEFAULT E'[]';

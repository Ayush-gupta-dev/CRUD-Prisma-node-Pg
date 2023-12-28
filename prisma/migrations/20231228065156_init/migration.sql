-- CreateTable
CREATE TABLE "tutorial" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL,

    CONSTRAINT "tutorial_pkey" PRIMARY KEY ("id")
);

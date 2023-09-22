generator client {
    provider = "prisma-client-js"
  }
  
  datasource db {
    provider = "cockroachdb"
    url      = env("DATABASE_URL")
  }
  
  model User {
    id             String    @id @default(uuid())
    name           String
    image          String?
    email          String?   @unique
    emailVerified  DateTime?
    hashedPassword String?
    createdAt      DateTime  @default(now())
    updatedAt      DateTime  @updatedAt
    posts          Post[]
    sessions       Session[]
    accounts       Account[]
  }
  
  model Account {
    id                String  @id @default(uuid())
    userId            String
    type              String
    provider          String
    providerAccountId String
    refresh_token     String? @db.String
    access_token      String? @db.String
    expires_at        Int?
    token_type        String?
    scope             String?
    id_token          String? @db.String
    session_state     String?
  
    user User @relation(fields: [userId], references: [id], onDelete: Cascade)
  
    @@unique([provider, providerAccountId])
  }
  
  model Session {
    id           String   @id @default(uuid())
    sessionToken String   @unique
    userId       String
    expires      DateTime
    user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  }
  
  model VerificationToken {
    id         String   @id @default(uuid())
    identifier String
    token      String   @unique
    expires    DateTime
  
    @@unique([identifier, token])
  }
  
  model Post {
    id        String   @id @default(uuid())
    title     String
    content   String?
    published Boolean  @default(false)
    userId    String
    user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
  }
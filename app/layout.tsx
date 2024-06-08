import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/app/ui/header";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { auth } from "@/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GCP Wizard",
  description: "GCP Wizard helps you to enable GCP product",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Box
          sx={{
            display: "flex",
            paddingTop: 7,
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {children}
          </Container>
        </Box>
      </body>
    </html>
  );
}

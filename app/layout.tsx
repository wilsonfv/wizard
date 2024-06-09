import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import AppBar from "@/app/ui/app-bar-header";

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppBar />
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

import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";

export default async function Page() {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <Typography paragraph>Overview page</Typography>
    </Container>
  );
}

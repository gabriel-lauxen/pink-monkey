import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
export default function BuyButton() {

  const BuyButton = styled(Button)({
    borderRadius: '50px',
    backgroundColor: '#FBEAD0',
    color: '#AC7E46'
  })

  return (
    <BuyButton className="button" variant="contained" disableElevation>
      Comprar agora
    </BuyButton>
  );
}

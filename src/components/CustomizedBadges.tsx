import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAppStore } from '../stores/useAppStore';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    border: `2px solid ${theme.palette.background.paper}`,
    fontSize: '0.7rem',
    padding: '4px 6px',
  },
}));

const ShoppingCartIconStyled = styled(ShoppingCartIcon)({
  color: 'white',
  fontSize: '1.6rem',
});

export const CustomizedBadges = () => {
  const productCart = useAppStore((state) => state.productCart);

  const result = productCart.reduce((acc, elem) => {
    if (elem?.amount) {
      return acc + elem?.amount;
    }
    return acc;
  }, 0);

  return (
    <IconButton aria-label='cart'>
      <StyledBadge badgeContent={result} color='secondary'>
        <ShoppingCartIconStyled />
      </StyledBadge>
    </IconButton>
  );
};

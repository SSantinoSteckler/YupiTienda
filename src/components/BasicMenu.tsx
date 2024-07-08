import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useAppStore } from '../stores/useAppStore';
import { useNavigate } from 'react-router-dom';
import { CategoryName } from '../types';

type BasicMenuProps = {
  closeModal: () => void;
};

export default function BasicMenu({ closeModal }: BasicMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const categoryName = useAppStore((state) => state.productsCategoryName);
  const getProductsByCategory = useAppStore(
    (state) => state.getProductsByCategory
  );
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const handleClickNav = async (category: CategoryName) => {
    await getProductsByCategory(category);
    navigate(`/category/${category.slug}`);
    handleClose();
    closeModal();
  };

  return (
    <div>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          fontFamily: 'poppins',
          color: 'white',
          fontSize: { xs: '18px', sm: '24px' },
          textTransform: 'capitalize',
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'transparent',
          },
          padding: { xs: '6px 12px', sm: '8px 16px' },
        }}
      >
        Category
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        PaperProps={{
          sx: {
            maxHeight: '80vh', // Limitando la altura máxima del menú para permitir el scroll
            width: { xs: '100%', sm: 'auto' },
            maxWidth: '400px',
            backgroundColor: 'white',
            color: 'black',
            padding: { xs: '0.5rem', sm: '1rem' },
          },
        }}
      >
        <div className='grid grid-cols-2 gap-2 flex-wrap'>
          {categoryName.map((elem) => (
            <MenuItem
              key={elem.slug}
              onClick={() => handleClickNav(elem)}
              sx={{
                fontSize: { xs: '0.875rem', sm: '1rem' },
                textTransform: 'capitalize',
                padding: { xs: '0.5rem 1rem', sm: '0.75rem 1.5rem' },
                fontFamily: 'poppins',
              }}
            >
              {elem.name}
            </MenuItem>
          ))}
        </div>
      </Menu>
    </div>
  );
}

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useBasicMenu } from './useBasicMenu';

export type BasicMenuProps = {
  closeModal: () => void;
};

export default function BasicMenu({ closeModal }: BasicMenuProps) {
  const {
    handleClick,
    handleClickNav,
    handleClose,
    categoryName,
    open,
    anchorEl,
  } = useBasicMenu({ closeModal });

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
          fontSize: { xs: '18px', sm: '22px', lg: '20px' },
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
            maxHeight: '80vh',
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
                fontSize: { xs: '0.875rem', sm: '0.9375rem', lg: '0.875rem' },
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

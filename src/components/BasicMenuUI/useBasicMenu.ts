import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../stores/useAppStore';
import * as React from 'react';
import { BasicMenuProps } from './BasicMenu';
import { CategoryName } from '../../types';

export const useBasicMenu = ({ closeModal }: BasicMenuProps) => {
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

  return {
    handleClick,
    handleClickNav,
    handleClose,
    categoryName,
    open,
    anchorEl,
  };
};

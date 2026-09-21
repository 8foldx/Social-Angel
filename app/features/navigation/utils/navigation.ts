export type NavigationMenu =
  | 'about'
  | 'fundraise'
  | 'donate'
  | 'join'
  | 'resources'

/**
 * Check whether a menu is currently active.
 */
export const isClicked = (
  activeMenu: NavigationMenu | null,
  menu: NavigationMenu,
) => {
  return activeMenu === menu
}

/**
 * Open a menu when hovering.
 */
export const handleHover = (
  menu: NavigationMenu,
) => {
  return menu
}

/**
 * Toggle menu when clicking.
 */
export const handleClick = (
  activeMenu: NavigationMenu | null,
  menu: NavigationMenu,
) => {
  return activeMenu === menu ? null : menu
}

/**
 * Close the navigation menu.
 */
export const closeMenu = () => {
  return null
}
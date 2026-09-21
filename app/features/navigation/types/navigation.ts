export interface MenuItem {
  label: string
  to?: string
  description?: string
  image?: string
  children?: MenuItem[]
}

export interface MegaMenuGroup {
  heading?: string
  items: MenuItem[]
}

export interface NavigationMenu {
  label: string
  to?: string
  menu?: string
  dropdown?: boolean
}
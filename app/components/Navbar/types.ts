/**
 * Represents a single item within a dropdown menu.
 */
export interface DropdownItem {
  name: string;
  path: string;
}

/**
 * Represents a top-level navigation item, which might contain a dropdown.
 */
export interface NavItemType {
  name: string;
  path: string; // Main path, can be '#' or a category page for dropdowns
  dropdown?: DropdownItem[];
}

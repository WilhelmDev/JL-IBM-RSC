import { MenuWithSubmenu, NavItem, SubMenu } from "@/core/domain/navItems";

/**
 * Get the second segment of a path.
 * @param {string} path - The path to split.
 * @returns {string} The second segment of the path.
 */
const getSecondPathSegment = (path:  NavItem['href']): string => path?.split('/')[1];

/**
 * Check if the second segment of two paths match.
 * @param {string} itemPath - The first path to compare.
 * @param {string} path - The second path to compare.
 * @returns {boolean} True if the second segments match, false otherwise.
 */
const isPathMatch = (itemPath: NavItem['href'], path: NavItem['href']): boolean => getSecondPathSegment(itemPath) === getSecondPathSegment(path);

/**
 * Check if a parent is active based on a path.
 * @param {SubMenu[]} children - The children to check.
 * @param {string} path - The path to check.
 * @returns {boolean} True if the parent is active, false otherwise.
 */
export const isParentActive = (children: SubMenu[], path: string): boolean => {
    if (!children || !path) {
        return false;
    }
    return children.some((item: SubMenu)=>
        isPathMatch(item.path, path) || item?.submenu?.some((item2) => isPathMatch(item2.path, path))
    );
}
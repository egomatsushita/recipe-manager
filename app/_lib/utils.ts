/**
 * Determines if the border should be primary for a given pathname and link.
 * @param pathname - The current pathname.
 * @param href - The link href to compare with the pathname.
 * @returns True if the border should be primary, false otherwise.
 */
export function isBorderPrimary(pathname: string, href: string) {
  const isRecipeLink = href.startsWith('/recipes')
  const isRecipePathname = pathname.startsWith('/recipes')

  if (isRecipeLink && isRecipePathname) return true
  if (!isRecipeLink && pathname === href) return true
  if (isRecipeLink && !isRecipePathname) return false
  if (!isRecipeLink && pathname !== href) return false

  return false
}

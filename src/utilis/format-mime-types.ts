export function formatMimeTypes(
  mimeTypes: string[],
  separator: string = ", ",
  formatter?: (mimeType: string) => string[]
) {
  if (formatter) {
    return mimeTypes.map(formatter).join(separator);
  }
  return mimeTypes.join(separator);
}

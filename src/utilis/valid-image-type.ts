export function validImageType(file: File, validMimeTypes: string[]) {
  return validMimeTypes.includes(file.type);
}

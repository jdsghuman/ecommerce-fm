export const truncateText = (text: string, maxLength: number) => {
  return text && text.length > maxLength ? `${text.substring(0, maxLength)}...` : text
}

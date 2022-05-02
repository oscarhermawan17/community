export const checkCharEmail = (value: string): boolean => {
  // const regex = /^[a-zA-Z0-9&@.$%\-,():;` ]+$/
  const regex = /^[a-zA-Z0-9@.-]+$/
  return regex.test(value);
}

export const checkCharPassword = (value: string): boolean => {
  const regex = /^[a-zA-Z0-9&@.$%\-,():;=+#*!]+$/
  return regex.test(value);
}
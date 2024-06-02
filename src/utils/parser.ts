export const getLastValue = function (data: string): string {
  if (data === '') {
    return '';
  }
  const lines = data.split('\n');
  const lastLine = lines[lines.length - 2];
  const match = lastLine.match(/="([^"]+)"/);
  if (match) {
    const values = match[1].split('_');
    return values[0];
  }
  return '';
};

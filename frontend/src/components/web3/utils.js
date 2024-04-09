export function formatAddress(address) {
  return `${address.slice(0, 8)}…${address.slice(36, 42)}`;
}

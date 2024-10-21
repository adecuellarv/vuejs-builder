export const getUrlBackend = (backendType) => {
  switch (backendType) {
    case 'java':
      return import.meta.env.VITE_JAVA;
    case 'net':
      return import.meta.env.VITE_NET;
    case 'node':
      return import.meta.env.VITE_NODE;
    case 'php':
      return import.meta.env.VITE_PHP;
    default:
      break;
  }
}

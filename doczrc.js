export default {
  typescript: true,
  title: 'RN Mobile App',
  src: './src',
  port: 8888,
  filterComponents: (files) => files.filter((filepath) => /[w-]*.(js|jsx|ts|tsx)$/.test(filepath)),
  debug: true,
};

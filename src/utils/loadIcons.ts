export const loadIconsFromFolder = (folderName: string): Record<string, string> => {
  const modules = import.meta.glob('/src/assets/**/*.{png,jpg,jpeg,svg}', {
    eager: true,
    import: 'default',
  });

  const folderPrefix = `/src/assets/${folderName}/`;

  return Object.entries(modules).reduce(
    (icons, [path, mod]) => {
      if (path.startsWith(folderPrefix)) {
        const filename = path
          .split('/')
          .pop()
          ?.replace(/\.(png|jpe?g|svg)$/, '');

        if (filename) {
          icons[filename] = mod as string;
        }
      }

      return icons;
    },
    {} as Record<string, string>
  );
};

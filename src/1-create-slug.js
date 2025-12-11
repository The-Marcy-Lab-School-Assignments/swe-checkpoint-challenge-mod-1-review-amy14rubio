// Return a URL-friendly "slug": lowercase with hyphens instead of spaces.
// Return null if the title contains banned characters: "!", "#", "?"
const createSlug = (title) => {
  if (title.includes('!') || title.includes('#') || title.includes('?')) return null;

  const words = title.toLowerCase().split(' ');

  const hyphens = words.map((word, i) => {
    if (i < words.length - 1) return (word += '-');
    return word;
  });

  return hyphens.join('');
};

module.exports = {
  createSlug,
};

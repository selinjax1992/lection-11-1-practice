export const createGalleryCard = ({
  alt_description: alt,
  urls: { regular: src },
}) => {
  return `
  <li class="gallery-card">
    <img class="gallery-img" src="${src}" alt="${alt}" />
  </li>
  `;
};

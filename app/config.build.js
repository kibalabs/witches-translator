/* eslint-disable */
const InjectSeoPlugin = require('@kibalabs/build/scripts/plugins/injectSeoPlugin');

const title = 'WTCHS Translator';
const description = 'The un-official translator for WTCHS NFT <> ኲኑኪ የኡ-ጤሢሢሀሣሀሃኒ ኲጣሃኡኴኒሃኲጤጣ ሢጤጣ የየኲሣኑኴ ኡሢኲ';
const url = 'https://wtchs.tokenpage.xyz'
const imageUrl = `${url}/assets/banner.png`;

const seoTags = [
  new InjectSeoPlugin.MetaTag('description', description),
  new InjectSeoPlugin.Tag('meta', {property: 'og:title', content: title}),
  new InjectSeoPlugin.Tag('meta', {property: 'og:description', content: description}),
  new InjectSeoPlugin.Tag('meta', {property: 'og:image', content: imageUrl}),
  new InjectSeoPlugin.Tag('meta', {property: 'og:url', content: url}),
  new InjectSeoPlugin.MetaTag('twitter:card', 'summary_large_image'),
  // new InjectSeoPlugin.MetaTag('twitter:site', '@mdtp_app'),
  new InjectSeoPlugin.Tag('link', {rel: 'canonical', href: url}),
  new InjectSeoPlugin.Tag('link', {rel: 'icon', type: 'image/png', href: '/assets/icon.png'}),
];

module.exports = (config) => {
  config.seoTags = seoTags;
  config.title = title;
  return config;
};

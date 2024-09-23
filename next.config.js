const { withAtlasConfig } = require("@wpengine/atlas-next");
const { i18n } = require('./i18nConfig')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing Next.js config
  i18n,
};

module.exports = withAtlasConfig(nextConfig);

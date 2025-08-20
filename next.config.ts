/*import type { NextConfig } from 'next';
import { i18n } from './next-i18next.config';

const nextConfig: NextConfig = {
  /* config options here */
/*  reactStrictMode: true,
  i18n,
};

export default nextConfig;*/
const { i18n } = require('./next-i18next.config');

module.exports = {
  reactStrictMode: true,
  i18n,
};
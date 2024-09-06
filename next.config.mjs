/** @type {import('next').NextConfig} */
import runtimeCaching from "next-pwa/cache.js";
import nextPWA from 'next-pwa';

const withPWA = nextPWA({
    dest: 'public',
    cacheOnFrontEndNav: true,
    register: true,
    skipWaiting: true,
    reloadOnOnline: true,
    runtimeCaching,
});

const nextConfig = {};

export default withPWA(nextConfig);
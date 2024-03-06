import withPWAInit from "@ducanh2912/next-pwa";

const isDevelopmentEnvironment = process.env.NODE_ENV === "development"

const withPWA = withPWAInit({
    dest: "public",
    disable: isDevelopmentEnvironment, // Disable PWA in development mode
    register: !isDevelopmentEnvironment, // Register the PWA service worker
    skipWaiting: !isDevelopmentEnvironment, // Skip waiting for service worker activation
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        removeConsole: !isDevelopmentEnvironment, // Remove console.log in production
    },
    // images: {
    //     remotePatterns: [
    //         {
    //             protocol: 'https',
    //             hostname: 'firebasestorage.googleapis.com',
    //             port: '',
    //         }

    //     ],
    // }
};

export default isDevelopmentEnvironment ? nextConfig : withPWA(nextConfig);

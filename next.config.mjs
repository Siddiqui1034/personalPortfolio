/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
       
    images:{
        remotePatterns: [
            {
                protocol: "http",
                hostname: "images.pexel.com"
            }
        ]
    }
};

export default nextConfig;

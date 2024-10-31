/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 静的エクスポート
  images: {
    unoptimized: true, // 画像最適化を無効化
  },
  // リポジトリ名に応じて調整
  basePath: '/business-card',
  assetPrefix: '/business-card',
}

export default nextConfig;

module.exports = {
  apps: [
    {
      name: 'account-vite-h5',
      script: 'account-vite-h5-server.js'
    },
  ],
  deploy: {
    production: {
      user: 'root',
      host: '47.103.140.189',
      ref: 'origin/main',
      repo: 'git@github.com:momoknight/account-vite-h5.git',
      path: '/root/account-vite-h5',
      'post-deploy': 'git reset --hard && git checkout main && git pull && npm i --production=false && pm2 startOrReload ecosystem.config.js', // -production=false 下载全量包
      env: {
        NODE_ENV: 'production'
      }
    }
  }
}
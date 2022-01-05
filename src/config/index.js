const MODE = import.meta.env.MODE // 环境变量

export const baseUrl = MODE == 'development' ? '/api' : 'http://47.103.140.189:7001/'
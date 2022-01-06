import React from 'react'
import Header from '@/components/Header'

import s from './style.module.less'

const About = () => {
  return <>
    <Header title='关于我们' />
    <div className={s.about}>
      <h2>关于项目</h2>
      <article>
        EasyJI是一款极简记账App，采用前后端分离开发。
        <ul>
          <li>服务端接口选用Egg.js框架进行开发</li>
          <li>前端选用React框架进行开发</li>
          <li>组件库选用ZarmUI</li>
          <li>脚手架选用Vite2.0</li>
        </ul>
      </article>
      <h2>关于作者</h2>
      <article>
        <ul>
          <li>姓名：陶银程</li>
          <li>毕业学校：东北大学</li>
          <li>应聘岗位：前端开发</li>
        </ul>
      </article>
      {/* <h2>关于小册</h2>
      <article>这是一本全栈小册，服务端采用 Node 上层架构 Egg.js，前端采用 React 框架 + Zarm 移动端组件库。本小册致力于让同学们学会服务端的开发流程，从设计数据库到接口的编写，前端的接口数据对接和页面制作，再到线上环境的部署。由于本人用的是 Mac，为了照顾到 Windows 系统的同学，全程关键步骤都会有 Windows 部分的讲解。</article> */}
    </div>
  </>
};

export default About;
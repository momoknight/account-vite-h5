import React, { useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { Cell, Button } from 'zarm';
import { get } from '@/utils';

import s from './style.module.less';

const User = () => {
  const [user, setUser] = useState({});
  const [avatar, setAvatar] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const {data} = await get('/api/user/get_userinfo');
    setUser(data);
    setAvatar(data.avatar);
  };

  // 退出登录
  const logout = async () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return <div className={s.user}>
    <div className={s.head}>
      <div className={s.info}>
        <span>昵称：{user.username || '--'}</span>
        <span>
          <img style={{ width: 30, height: 30, verticalAlign: '-10px' }} src="//s.yezgea02.com/1615973630132/geqian.png" alt="" />
          <b>{user.signature || '这个人什么也没留下'}</b>
        </span>
      </div>
      <img className={s.avatar} style={{ width: 60, height: 60, borderRadius: 8 }} src={avatar} alt="" />
   </div>
   <div className={s.content}>
      <Cell
        hasArrow
        title="用户信息修改"
        onClick={() => navigate('/userinfo')}
        icon={<img style={{ width: 20, verticalAlign: '-7px' }} src="//s.yezgea02.com/1615974766264/gxqm.png" alt="" />}
      />
      <Cell
        hasArrow
        title="重制密码"
        onClick={() => navigate('/account')}
        icon={<img style={{ width: 20, verticalAlign: '-7px' }} src="//s.yezgea02.com/1615974766264/zhaq.png" alt="" />}
      />
      <Cell
        hasArrow
        title="关于我们"
        onClick={() => navigate('/about')}
        icon={<img style={{ width: 20, verticalAlign: '-7px' }} src="//s.yezgea02.com/1615975178434/lianxi.png" alt="" />}
      />
    </div>
    <Button className={s.logout} block theme="danger" onClick={logout}>退出登录</Button>
  </div>
}

export default User
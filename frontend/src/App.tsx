import './App.css'

function App() {
  return (
    <div className="admin-layout">
      <header className="admin-header">
        <div className="header-logo">
          <span className="logo-icon">☁</span>
          <span className="logo-text">如意管理系统</span>
        </div>
        <nav className="header-nav">
          <span className="nav-item active">首页</span>
          <span className="nav-item">消息</span>
          <span className="nav-item">设置</span>
        </nav>
        <div className="header-user">
          <span className="user-avatar">管</span>
          <span className="user-name">管理员</span>
        </div>
      </header>
      <div className="admin-body">
        <aside className="admin-sidebar">
          <ul className="sidebar-menu">
            <li className="menu-item active">
              <span className="menu-icon">◈</span>
              <span>控制台</span>
            </li>
            <li className="menu-item">
              <span className="menu-icon">◇</span>
              <span>用户管理</span>
            </li>
            <li className="menu-item">
              <span className="menu-icon">◆</span>
              <span>角色管理</span>
            </li>
            <li className="menu-item">
              <span className="menu-icon">□</span>
              <span>菜单管理</span>
            </li>
            <li className="menu-item">
              <span className="menu-icon">○</span>
              <span>系统监控</span>
            </li>
            <li className="menu-item">
              <span className="menu-icon">△</span>
              <span>日志管理</span>
            </li>
          </ul>
        </aside>
        <main className="admin-content">
          <div className="content-header">
            <h2>控制台</h2>
            <span className="breadcrumb">首页 / 控制台</span>
          </div>
          <div className="dashboard-cards">
            <div className="card">
              <div className="card-title">用户总数</div>
              <div className="card-value">1,286</div>
              <div className="card-footer">较昨日 <span className="up">↑ 12%</span></div>
            </div>
            <div className="card">
              <div className="card-title">今日访问</div>
              <div className="card-value">3,542</div>
              <div className="card-footer">较昨日 <span className="up">↑ 8%</span></div>
            </div>
            <div className="card">
              <div className="card-title">订单数量</div>
              <div className="card-value">896</div>
              <div className="card-footer">较昨日 <span className="down">↓ 3%</span></div>
            </div>
            <div className="card">
              <div className="card-title">系统消息</div>
              <div className="card-value">28</div>
              <div className="card-footer">未读消息</div>
            </div>
          </div>
          <div className="dashboard-section">
            <h3>最近操作</h3>
            <table className="data-table">
              <thead>
                <tr>
                  <th>操作人</th>
                  <th>操作类型</th>
                  <th>描述</th>
                  <th>时间</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>管理员</td><td>登录</td><td>系统登录成功</td><td>2026-07-14 10:30</td></tr>
                <tr><td>张三</td><td>新增</td><td>新增用户「李四」</td><td>2026-07-14 09:15</td></tr>
                <tr><td>王五</td><td>修改</td><td>修改角色权限</td><td>2026-07-14 08:42</td></tr>
                <tr><td>管理员</td><td>删除</td><td>删除过期日志</td><td>2026-07-13 18:00</td></tr>
                <tr><td>张三</td><td>导出</td><td>导出用户列表</td><td>2026-07-13 16:30</td></tr>
              </tbody>
            </table>
          </div>
          <div className="dashboard-section">
            <h3>系统信息</h3>
            <div className="info-grid">
              <div className="info-item"><span className="info-label">操作系统</span><span className="info-value">Windows 11</span></div>
              <div className="info-item"><span className="info-label">服务器</span><span className="info-value">Gin v1.9</span></div>
              <div className="info-item"><span className="info-label">数据库</span><span className="info-value">MySQL 8.0</span></div>
              <div className="info-item"><span className="info-label">前端框架</span><span className="info-value">React 19</span></div>
              <div className="info-item"><span className="info-label">缓存</span><span className="info-value">Redis 7.0</span></div>
              <div className="info-item"><span className="info-label">运行时长</span><span className="info-value">15 天 3 小时</span></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App

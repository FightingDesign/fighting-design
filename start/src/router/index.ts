// import type { RouteRecordRaw } from 'vue-router'
// import { createRouter, createWebHashHistory } from 'vue-router'

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes
// })

// export default router

export const accessRoutes = [
  {
    path: '/app/chainBrowser',
    redirect: '/app/chainBrowser/index',
    name: 'explorer',
    meta: { title: '浏览器', icon: 'left_laq', prefix: 'icon-', auth: ['explorer'] },
    props: { default: false },
    instances: {},
    leaveGuards: {},
    updateGuards: {},
    enterCallbacks: {},
    components: { default: {} }
  },
  {
    path: '/app/node',
    redirect: '/app/node/nodeManage',
    name: 'node',
    meta: { title: '节点管理', keepAlive: true, icon: 'left_jd', prefix: 'icon-' },
    props: { default: false },
    children: [
      {
        path: '/app/node/nodeManage',
        name: 'node_nodeManage',
        meta: { title: '节点列表', auth: ['node-list'] }
      },
      {
        path: '/app/node/votingManage',
        name: 'node_votingManage',
        meta: { title: '节点入网投票', auth: ['node-vote'] }
      },
      {
        path: '/app/node/consensusManage',
        name: 'node_consensusManage',
        meta: { title: '节点共识投票', auth: ['node-consensus'] }
      }
    ],
    instances: {},
    leaveGuards: {},
    updateGuards: {},
    enterCallbacks: {},
    components: { default: {} }
  },
  {
    path: '/app/contract',
    redirect: '/app/contract/index',
    name: 'contract',
    meta: { title: '合约管理', keepAlive: true, icon: 'left_jd', prefix: 'icon-' },
    props: { default: false },
    children: [
      { path: '/app/contract/index', name: 'contract_index', meta: { title: '合约列表' } }
    ],
    instances: {},
    leaveGuards: {},
    updateGuards: {},
    enterCallbacks: {},
    components: { default: {} }
  },
  {
    path: '/app/cross-chain-routing',
    redirect: '/app/cross-chain-routing/index',
    name: 'cross-chain-routing',
    meta: { title: '跨链路由', keepAlive: true, icon: 'left_jd', prefix: 'icon-' },
    props: { default: false },
    children: [
      {
        path: '/app/cross-chain-routing/index',
        name: 'cross-chain-routing_index',
        meta: { title: '路由信息' }
      }
    ],
    instances: {},
    leaveGuards: {},
    updateGuards: {},
    enterCallbacks: {},
    components: { default: {} }
  },
  {
    path: '/app/among/data',
    redirect: '/app/among/data/index',
    name: 'monitor',
    meta: { title: '数链管理', keepAlive: true, icon: 'left_jd', prefix: 'icon-' },
    props: { default: false },
    children: [
      {
        path: '/app/among/data/index',
        name: 'monitor_index',
        meta: { title: '上链数据查询' }
      }
    ],
    instances: {},
    leaveGuards: {},
    updateGuards: {},
    enterCallbacks: {},
    components: { default: {} }
  }
]

// [
//   {
//     path: '/app',
//     name: 'app',
//     redirect: '/app/chainBrowser', // 在 BasicLayout 中动态处理
//     meta: { title: '管理平台' },
//     children: [
//       // 浏览器 ok
//       {
//         path: '/app/chainBrowser',
//         name: 'explorer',
//         redirect: '/app/chainBrowser/index',
//         meta: {
//           title: '浏览器',
//           icon: 'left_laq',
//           prefix: 'icon-',
//           auth: ['explorer']
//         },
//         children: [
//           {
//             path: '/app/chainBrowser/index',
//             name: 'chainBrowser_index',
//             meta: {
//               keepAlive: true,
//               hideInMenu: true,
//               hiddenWrap: true
//             }
//           },
//           {
//             path: '/app/chainBrowser/blockMore',
//             name: 'chainBrowser_blockMore',
//             meta: {
//               title: '区块信息',
//               breadcrumb: true,
//               hideInMenu: true
//             }
//           },
//           {
//             path: '/app/chainBrowser/tradingMore',
//             name: 'chainBrowser_tradingMore',
//             meta: {
//               title: '交易信息',
//               breadcrumb: true,
//               hideInMenu: true
//             }
//           },
//           {
//             path: '/app/chainBrowser/nodeInfo',
//             name: 'chainBrowser_nodeInfo',
//             meta: {
//               title: '节点信息',
//               breadcrumb: true,
//               hideInMenu: true
//             }
//           },
//           {
//             path: '/app/chainBrowser/blockDetail/:hash',
//             name: 'blockDetail',
//             meta: {
//               title: '区块信息',
//               breadcrumb: true,
//               hideInMenu: true,
//               hiddenWrap: true
//             }
//           },
//           {
//             path: '/app/chainBrowser/tradingDetail/:hash',
//             name: 'tradingDetail',
//             meta: {
//               title: '交易信息',
//               breadcrumb: true,
//               hideInMenu: true,
//               hiddenWrap: true
//             }
//           },
//           {
//             path: '/app/chainBrowser/accountDetail/:hash',
//             name: 'accountDetail',
//             meta: {
//               title: '账户详情',
//               breadcrumb: true,
//               hideInMenu: true,
//               hiddenWrap: true
//             }
//           }
//         ]
//       },
//       // 节点管理 ok
//       {
//         path: '/app/node',
//         name: 'node',
//         redirect: '/app/node/nodeManage',
//         meta: {
//           title: '节点管理',
//           keepAlive: true,
//           icon: 'left_jd',
//           prefix: 'icon-'
//         },
//         children: [
//           // 节点列表
//           {
//             path: '/app/node/nodeManage',
//             name: 'node_nodeManage',
//             meta: {
//               title: '节点列表',
//               auth: ['node-list']
//             }
//           },
//           // 节点入网投票
//           {
//             path: '/app/node/votingManage',
//             name: 'node_votingManage',
//             meta: {
//               title: '节点入网投票',
//               auth: ['node-vote']
//             }
//           },
//           // 节点共识投票
//           {
//             path: '/app/node/consensusManage',
//             name: 'node_consensusManage',
//             meta: {
//               title: '节点共识投票',
//               auth: ['node-consensus']
//             }
//           },
//           // 新增节点
//           {
//             path: '/app/node/add',
//             name: 'node_add',
//             meta: { title: '新增节点', hideInMenu: true, hiddenWrap: true }
//           }
//         ]
//       },
//       // 合约管理 ok
//       {
//         path: '/app/contract',
//         name: 'contract',
//         redirect: '/app/contract/index',
//         meta: {
//           title: '合约管理',
//           keepAlive: true,
//           icon: 'left_jd',
//           prefix: 'icon-'
//         },
//         children: [
//           {
//             path: '/app/contract/index',
//             name: 'contract_index',
//             meta: {
//               title: '合约列表'
//               // auth: ['node-vote'],
//             }
//           }
//         ]
//       },
//       // 跨链路由 ok
//       {
//         path: '/app/cross-chain-routing',
//         name: 'cross-chain-routing',
//         redirect: '/app/cross-chain-routing/index',
//         meta: {
//           title: '跨链路由',
//           keepAlive: true,
//           icon: 'left_jd',
//           prefix: 'icon-'
//         },
//         children: [
//           {
//             path: '/app/cross-chain-routing/index',
//             name: 'cross-chain-routing_index',
//             meta: {
//               title: '路由信息'
//               // auth: ['node-vote'],
//             }
//           }
//         ]
//       },
//       // 运维监控 ok
//       {
//         path: '/app/monitor',
//         name: 'monitor',
//         redirect: '/app/monitor/index',
//         meta: {
//           title: '运维监控',
//           keepAlive: true,
//           icon: 'left_jd',
//           prefix: 'icon-'
//         },
//         children: [
//           {
//             path: '/app/monitor/index',
//             name: 'monitor_index',
//             meta: {
//               title: '区块链监测'
//               // auth: ['node-vote'],
//             }
//           },
//           {
//             path: '/app/monitor/system-resource',
//             name: 'system-resource_index',
//             meta: {
//               title: '系统资源监测'
//               // auth: ['node-vote'],
//             }
//           },
//           {
//             path: '/app/monitor/warning',
//             name: 'warning_index',
//             meta: {
//               title: '告警配置'
//               // auth: ['node-vote'],
//             }
//           }
//         ]
//       },
//       // 系统设置
//       {
//         path: '/sys',
//         name: 'sys',
//         redirect: '/sys',
//         meta: { title: '系统设置' },
//         children: [
//           {
//             path: '/sys/institutions',
//             name: 'institutions',
//             meta: {
//               title: '机构管理',
//               keepAlive: true,
//               breadcrumb: true,
//               role: 1,
//               auth: ['organization']
//             }
//           },
//           {
//             path: '/sys/user',
//             name: 'user',
//             meta: { title: '用户管理', keepAlive: true, breadcrumb: true, auth: ['user'] }
//           },
//           {
//             path: '/sys/role',
//             name: 'role',
//             meta: { title: '角色管理', auth: ['role'] },
//             children: [
//               {
//                 path: '/sys/role',
//                 name: 'role',
//                 meta: { breadcrumb: true }
//               },
//               {
//                 path: '/sys/role/setting',
//                 name: 'roleSetting',
//                 meta: { title: '新增角色', breadcrumb: true, hiddenWrap: true }
//               }
//             ]
//           },
//           {
//             path: '/sys/logs',
//             name: 'logs',
//             meta: { title: '系统日志', keepAlive: true, breadcrumb: true, auth: ['log'] }
//           },
//           {
//             path: '/sys/account',
//             name: 'account',
//             meta: { title: '账号中心', keepAlive: true, breadcrumb: true }
//           },
//           {
//             path: '/sys/mechanism',
//             name: 'mechanism',
//             meta: { title: '机构设置', keepAlive: true, breadcrumb: true }
//           }
//         ]
//       },
//       // 数链中间件
//       {
//         path: '/app/among/data',
//         name: 'monitor',
//         redirect: '/app/among/data/index',
//         meta: {
//           title: '数链管理',
//           keepAlive: true,
//           icon: 'left_jd',
//           prefix: 'icon-'
//         },
//         children: [
//           {
//             path: '/app/among/data/index',
//             name: 'monitor_index',
//             meta: {
//               title: '上链数据查询'
//               // auth: ['node-vote'],
//             }
//           }
//         ]
//       }
//     ]
//   }
// ];

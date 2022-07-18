import { Home, Circle, User } from 'react-feather'

export default [
  
  {
    id: 'dashboards',
    title: 'Dashboards',
    icon: <Home size={20} />,
    badge: 'light-warning',
    badgeText: '2',
    children: [
      {
        id: 'ProjectDash',
        title: 'Project',
        icon: <Circle size={12} />,
        navLink: '/dashboard/project'
      },
      {
        id: 'analyticsDash',
        title: 'Analytics',
        icon: <Circle size={12} />,
        navLink: '/dashboard/analytics'
      },
      {
        id: 'eCommerceDash',
        title: 'eCommerce',
        icon: <Circle size={12} />,
        navLink: '/dashboard/ecommerce'
      },
      {
        id: 'users2',
        title: 'User',
        icon: <User size={20} />,
        children: [
          {
            id: 'list',
            title: 'List',
            icon: <Circle size={12} />,
            navLink: '/apps/user2/list'
          },
          {
            id: 'view',
            title: 'View',
            icon: <Circle size={12} />,
            navLink: '/apps/user2/view'
          },
          {
            id: 'edit',
            title: 'Edit',
            icon: <Circle size={12} />,
            navLink: '/apps/user2/edit'
          }
        ]
      },
      {
        id: 'kanban',
        title: 'Kanban Boards',
        icon: <Circle size={12} />,
        navLink: '/dashboard/kanbanboards'
      }
    ]
  }
]

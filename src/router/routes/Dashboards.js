import { lazy } from 'react'

const DashboardRoutes = [
  // Dashboards
  {
    path: '/dashboard/analytics',
    component: lazy(() => import('../../views/dashboard/analytics'))
  },
  {
    path: '/dashboard/ecommerce',
    component: lazy(() => import('../../views/dashboard/ecommerce')),
    exact: true
  },
  {
    path: '/dashboard/project',
    component: lazy(() => import('../../views/dashboard/project')),
    exact: true
  },
  {
    path: '/dashboard/kanbanboards',
    component: lazy(() => import('../../views/extensions/drag-and-drop/kanban')),
    exact: true
  },
  {
    path: '/dashboard/tasks',
    exact: true,
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/task'))
  }
]

export default DashboardRoutes

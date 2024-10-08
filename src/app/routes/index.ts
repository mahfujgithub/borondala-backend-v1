import express from 'express'
import { UserRoutes } from '../modules/users/common/user.route'
import { CustomerRoutes } from '../modules/users/customer/customer.route'
import { DalaRoutes } from '../modules/products/ProductItems/GiftDala/dala.route'
const router = express.Router()

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/customers',
    route: CustomerRoutes,
  },
  {
    path: '/products',
    route: DalaRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router

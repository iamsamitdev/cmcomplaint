import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

// Import Layouts
// Frontend
import FrontendLayout from '@/layouts/Frontend.vue'
// Backend
import BackendLayout from '@/layouts/Backend.vue'

// Import Views
// Frontend
import Home from '@/views/frontend/Home.vue'
import About from '@/views/frontend/About.vue'
import Portfolio from '@/views/frontend/Portfolio.vue'
import Service from '@/views/frontend/Service.vue'
import Contact from '@/views/frontend/Contact.vue'
import Register from '@/views/frontend/Register.vue'
import Login from '@/views/frontend/Login.vue'
import ForgotPassword from '@/views/frontend/ForgotPassword.vue'
import NotFound404 from '@/views/frontend/NotFound404.vue'

// Backend
import Dashboard from '@/views/backend/Dashboard.vue'
import Product from '@/views/backend/Product.vue'

// ตัวแปรสำหรับทดสอบกำหนดสถานะการล็อกอิน
const state = true

// สร้างฟังก์ชันสำหรับ Route Guard
function authGuard(to, from, next){
  // let isAuthenticated = false

  if(state){
    // isAuthenticated = true
    next()
  }else{
    // isAuthenticated = false
    next({name: 'Login'})
  }

}

const routes = [

  // ---------------  Frontend Routing -----------------
  {
    path: '/',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Home',        
        component: Home
      }
    ],
    meta: {
      title: 'หน้าหลัก'
    }
  },
  {
    path: '/about',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'About',        
        component: About
      }
    ],
    meta: {
      title: 'เกี่ยวกับเรา'
    }
  },
  {
    path: '/portfolio',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Portfolio',
        component: Portfolio
      }
    ],
    meta: {
      title: 'ผลงานของเรา'
    }
  },
  {
    path: '/service',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Service',
        component: Service
      }
    ],
    meta: {
      title: 'บริการของเรา'
    }
  },
  {
    path: '/contact',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Contact',
        component: Contact
      }
    ],
    meta: {
      title: 'ติดต่อเรา'
    }
  },
  {
    path: '/register',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Register',
        component: Register
      }
    ],
    meta: {
      title: 'สมัครสมาชิกใหม่'
    }
  },
  {
    path: '/login',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Login',
        component: Login
      }
    ],
    meta: {
      title: 'เข้าสู่ระบบ'
    }
  },
  {
    path: '/forgotpassword',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'ForgotPassword',
        component: ForgotPassword
      }
    ],
    meta: {
      title: 'ลืมรหัสผ่าน'
    }
  },

  // Error 404 
  {
    path: "/:catchAll(.*)",
    component: NotFound404,
    meta: {
      title: '404 ไม่พบหน้านี้'
    }
  },

  // ---------------  Backend Routing -----------------
  {
    path: '/backend',
    component: BackendLayout,
    children: [
      {
        path: '',
        name:'Dashboard',
        component: Dashboard,
        beforeEnter: authGuard
      }
    ],
    meta:{
      title: 'Dashboard'
    }
  },
  {
    path: '/backend',
    component: BackendLayout,
    children: [
      {
        path: 'products',
        name:'Products',
        component: Product,
        beforeEnter: authGuard
      }
    ],
    meta:{
      title: 'Products'
    }
  }

]

const router = createRouter({
  // history: createWebHashHistory(process.env.BASE_URL),
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

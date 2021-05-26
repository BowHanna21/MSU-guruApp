import MainLayout from "src/layouts/MainLayout.vue";
import LoginPage from "src/pages/LoginPage.vue";
import HomeUserPage from "src/pages/HomeUserPage.vue";
import HomeAdminPage from "src/pages/HomeAdminPage.vue";
import HomeStudentPage from "src/pages/HomeStudentPage.vue";
import ProfilePage from "src/pages/ProfilePage.vue";

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: "login",
        component: LoginPage
      },
      {
        path: 'home-user',
        name: 'homeuser-page',
        component: HomeUserPage
      },
      {
        path: 'home-admin',
        name: 'homeadmin-page',
        component: HomeAdminPage
      },
      {
        path: 'home-student',
        name: 'homestudent-page',
        component: HomeStudentPage
      },
      {
        path: 'profile',
        name: 'profile-page',
        component: ProfilePage
      }
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

const authRouteList = [
  '/auth/login',
  '/auth/forgot-password',
  '/auth/change-password',
];

export function validAuthRoutes() {
  return authRouteList.includes(window.location.pathname);
}

function dashboardApi($resource) {
  return $resource('dashboard')
}

dashboardApi.$inject = ['$resource'];

export default dashboardApi;

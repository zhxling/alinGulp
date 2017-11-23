function appLoadingConfig(cfpLoadingBarProvider) {
  // 加载进度条配置 https://github.com/chieffancypants/angular-loading-bar
  cfpLoadingBarProvider.includeSpinner = true;
  cfpLoadingBarProvider.includeBar = true;

  cfpLoadingBarProvider.spinnerTemplate = '<div class="base-loading-layer">' +
                                            '<div class="loader-outer">' +
                                            '<div class="loader-inner line-scale-pulse-out-rapid">' +
                                            '<div></div>' +
                                            '<div></div>' +
                                            '<div></div>' +
                                            '<div></div>' +
                                            '<div></div>' +
                                            '</div>' +
                                            '</div>' +
                                            '</div>';
}

appLoadingConfig.$inject = ['cfpLoadingBarProvider'];

export default appLoadingConfig;

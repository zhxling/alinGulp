import layoutHtml from './layout.html';
import { headerHtml } from './header';
import { footerHtml } from './footer';
import { sidebarHtml } from './sidebar';
import { breadcrumbHtml } from './breadcrumb';
import { historyTabHtml } from './historyTab';

// eslint
// import { headerHtml, headerCtrl } from './header';
// import { footerHtml, footerCtrl } from './footer';
// import { sidebarHtml, sidebarCtrl } from './sidebar';
// import { breadcrumbHtml, breadcrumbCtrl } from './breadcrumb';
// import { historyTabHtml, historyTabCtrl } from './historyTab';

function appLayoutRun(RouterHelper) {
    RouterHelper.configureStates(getStates());
}

appLayoutRun.$inject = ['RouterHelper'];

function getStates() {
    return [
        {
            state: 'root',
            config: {
                abstract: true,
                url: '',
                template: layoutHtml
            }
        },
        {
            state: 'root.layout',
            config: {
                abstract: true,
                url: '',
                views: {
                    sidebar: {
                        template: sidebarHtml,
                        controller: 'sidebarCtrl as vm'
                    },
                    header: {
                        template: headerHtml,
                        controller: 'headerCtrl as vm'
                    },
                    breadcrumb: {
                        template: breadcrumbHtml,
                        controller: 'breadcrumbCtrl as vm'
                    },
                    // historyTab: {
                    //     template: historyTabHtml,
                    //     controller: 'historyTabCtrl as vm'
                    // },
                    footer: {
                        template: footerHtml,
                        controller: 'footerCtrl as vm'
                    },
                }
            }
        }
    ];
}

export default appLayoutRun;

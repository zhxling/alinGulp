import movie from '../../../assets/video/movie.ogg'
import demo from '../../../assets/video/demo.mp4'

class playVideoCtrl {
    constructor($state, $timeout, toaster) {
        Object.assign(this, { $state, $timeout, toaster })

  }

    back() {
        const self = this;
        self.$state.go('alarmList');
    }


}

playVideoCtrl.$inject = ['$state', '$timeout', 'toaster'];

export default playVideoCtrl;

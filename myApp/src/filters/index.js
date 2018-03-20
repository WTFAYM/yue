export default {
  install(Vue) {
    Vue.filter('DateTran', function (value) {
      if (value) {
        let tmp_month = value.getMonth() + 1;
        let month = tmp_month > 10 ? '' + tmp_month : '0' + tmp_month;
        let day = value.getDate() > 10 ? '' + value.getDate() : '0' + value.getDate();
        let temp_h = value.getHours();
        let h = temp_h > 10 ? '' + temp_h : '0' + temp_h;
        let temp_m = value.getMinutes();
        let m = temp_m > 10 ? '' + temp_m : '0' + temp_m;
        return value.getFullYear() + '-' + month + '-' + day + ' ' + h + ':' + m;
      } else {
        return value
      }
    });
    Vue.filter('DateTranDay', function (value) {
      if (value) {
        let tmp_month = value.getMonth() + 1;
        let month = tmp_month > 10 ? '' + tmp_month : '0' + tmp_month;
        let day = value.getDate() > 10 ? '' + value.getDate() : '0' + value.getDate();
        return value.getFullYear() + '-' + month + '-' + day;
      } else {
        return value
      }
    });
  }
};


function demo() {
  return function (value) {
    if (value) {
      return `${value} alin`;
    } else {
      return value;
    }
  };
}

demo.$inject = [];

export default demo;

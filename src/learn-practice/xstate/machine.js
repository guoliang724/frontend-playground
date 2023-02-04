function machine(config) {
  return new StateNode(config);
}

class StateNode {
  constructor(config, machine, value) {
    this.config = config;
    this.initial = config.initial;
    this.value = value || config.initial;
    this.machine = machine || this;
  }
}
export default machine;

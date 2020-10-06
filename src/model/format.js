export default class Foramt {
    constructor() {
     this.newForm={};
    }
    formatFrom(form) {
        Object.keys(form).forEach((k) => {
            this.newForm[k] = null;
        });
        return this.newForm;
    }

}

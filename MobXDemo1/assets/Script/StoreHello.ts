import { observable, action } from "mobx";

export class StoreHello {

    private static instance: StoreHello = null;
    public static getInstance() {
        if (this.instance == null) {
            this.instance = new StoreHello();
        }
        return this.instance;
    }

    @observable
    public count: number = 0;

    @action
    public addCount() {
        this.count = this.count || 0;
        this.count++;
    }
}

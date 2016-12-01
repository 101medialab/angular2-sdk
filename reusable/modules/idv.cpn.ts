import {Component}  from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BaseResourceComponent} from "../../HbComponent/BaseResourceComponent";
import {DummyDIContainer} from "./DummyDIContainer";
import {Config} from "./Config";

export class IdvComponent extends BaseResourceComponent {
    protected data: {} = {};

    constructor(diContainer: DummyDIContainer, activatedRoute: ActivatedRoute) {
        super(diContainer, activatedRoute);

        this.routeType = diContainer.config.ROUTE_TYPE_VIEW;

        this.reset();
    }

    reset() {}

    onInit() {
        this.reset();

        this.status.resource.isCancelIfLoading = false;
    }

    setupData(data) {
        // Be careful not to pollute caches stored in Resource. Avoid it by cloning data with Object.assign({}, data) or JSON.parse(JSON.stringify(data));
        this.onSetupData(data);

        return data;
    }

    onSetupData(data) {}
}

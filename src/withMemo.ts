import { FunctionComponent, memo, NamedExoticComponent } from "react";
import deepEqual from "./deepEqual";

function withMemo<P extends Record<string, unknown>>(
    Component: FunctionComponent<P>,
    checkedProps: ReadonlyArray<string> = []
): NamedExoticComponent<P> {
    function areEqual(prevProps: P, nextProps: P): boolean {
        let isEqual = true;
        for (let i = 0; i < checkedProps.length; i++) {
            const checkedProp: string = checkedProps[i];
            if (!deepEqual(prevProps[checkedProp], nextProps[checkedProp])) {
                isEqual = false;
                break;
            }
        }
        return isEqual;
    }

    if (checkedProps.length === 0) {
        return memo<P>(Component, deepEqual);
    } else {
        return memo<P>(Component, areEqual);
    }
}

export default withMemo;

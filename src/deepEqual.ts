function getCircularReplacer(): (key: string, value: any) => any | undefined {
    const seen = new WeakSet();
    return (key: string, value: any): any | undefined => {
        if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        return value;
    };
}

function deepEqual(prevProps: any, nextProps: any): boolean {
    const circularReplacer = getCircularReplacer();
    const stringifyLeft = JSON.stringify(prevProps, circularReplacer);
    const stringifyRight = JSON.stringify(nextProps, circularReplacer);
    return stringifyLeft === stringifyRight;
}

export default deepEqual;

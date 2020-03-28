import deepEqual from "../deepEqual";

describe("DeepEqual Function", () => {
    test("should return true for the same objects", () => {
        expect(deepEqual({ key: "test" }, { key: "test" })).toBeTruthy();
    });

    test("should return true for the same arrays", () => {
        expect(deepEqual([{ key: "test" }], [{ key: "test" }])).toBeTruthy();
    });

    test("should return true for undefined values", () => {
        expect(deepEqual(undefined, undefined)).toBeTruthy();
    });

    test("should return true for nullable values", () => {
        expect(deepEqual(null, null)).toBeTruthy();
    });

    test("should return false for different types with the same values", () => {
        expect(deepEqual(1, "1")).not.toBeTruthy();
    });

    test("should return true for the same objects with circular structure", () => {
        const prevProps = { key: "test", cir: {} };
        prevProps.cir = prevProps;
        const nextProps = { key: "test", cir: {} };
        nextProps.cir = nextProps;
        expect(deepEqual(prevProps, nextProps)).toBeTruthy();
    });
});

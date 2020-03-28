import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React, { FC } from "react";
import withMemo from "../withMemo";

const Test: FC<{ name: string; count: number }> = ({ name, count }) => (
    <span>
        <span>{name}</span>
        <span>{count}</span>
    </span>
);

describe("WithMemo Function", () => {
    test("should render Component with checked props", () => {
        const MemoTest = withMemo(Test, ["name"]);
        const { queryByText, rerender } = render(<MemoTest name={"OLD"} count={1} />);
        expect(queryByText("OLD")).toBeInTheDocument();
        expect(queryByText("1")).toBeInTheDocument();

        rerender(<MemoTest name={"OLD"} count={2} />);
        expect(queryByText("OLD")).toBeInTheDocument();
        expect(queryByText("1")).toBeInTheDocument();
        expect(queryByText("2")).not.toBeInTheDocument();

        rerender(<MemoTest name={"NEW"} count={2} />);
        expect(queryByText("NEW")).toBeInTheDocument();
        expect(queryByText("2")).toBeInTheDocument();
        expect(queryByText("1")).not.toBeInTheDocument();
    });

    test("should render Component without checked props", () => {
        const MemoTest = withMemo(Test);
        const { queryByText, rerender } = render(<MemoTest name={"TEST"} count={1} />);
        expect(queryByText("TEST")).toBeInTheDocument();
        expect(queryByText("1")).toBeInTheDocument();

        rerender(<MemoTest name={"TEST"} count={2} />);
        expect(queryByText("TEST")).toBeInTheDocument();
        expect(queryByText("2")).toBeInTheDocument();
    });
});

# React withMemo

[![Build Status](https://travis-ci.org/aleksashyn/with-memo.svg?branch=master)](https://travis-ci.org/aleksashyn/with-memo)
[![codecov](https://codecov.io/gh/aleksashyn/with-memo/branch/master/graph/badge.svg)](https://codecov.io/gh/aleksashyn/with-memo)
![npm](https://img.shields.io/npm/v/with-memo)
![NPM](https://img.shields.io/npm/l/with-memo)

HOC wrapper around [React.memo](https://reactjs.org/docs/react-api.html#reactmemo) with in-depth property comparison.

## Install

```bash
yarn add with-memo
# or
npm install with-memo --save
```

## Usage

Example:

```tsx
import { FC } from "react"; 
import withMemo from "with-memo";

const Example: FC<{ name: string; count: number }> = ({ name, count }) => (
    <div>
      {name}
      <div>{count}</div>
    </div>
);

export default withMemo(Example, ["name"]);
```

`with-memo` returns the memoized Component using `React.memo` and uses the function to deeply compare the properties of the Component.

### API documentation

The `withMemo` function is a simple wrapper that needs to compare a specific set of Component's props with a deep comparison.

The `withMemo` function accepts the properties `Component` and `checkedProps`.

```tsx
function withMemo<P extends object>(Component: FunctionComponent<P>, checkedProps: ReadonlyArray<string>): NamedExoticComponent<P>
```

#### `checkedProps`
A readonly array with a list of props name to be checked in `React.memo`.

If the array is empty, then all props will be checked.

## TypeScript types

This library is built using TypeScript.

You can find the exported TypeScript definitions in `withMemo.d.ts`.

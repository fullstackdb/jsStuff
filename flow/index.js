// @flow

function foo(x: boolean): string {
  if (x) {
    return 'boolean string';
  }
  return "default string";
}

foo(true);

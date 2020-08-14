//turns an array of strings into a single string separated by a

export function concatenateStrings(...args: string[]) {
  return args.join(",");
}

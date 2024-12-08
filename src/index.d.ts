declare module '*.png' {
  const value: string;
  export = value;
}

declare module '*.jpg' {
  const value: string;
  export = value;
}

declare module '*.svg?react' {
  const value: string;
  export = value;
}

declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

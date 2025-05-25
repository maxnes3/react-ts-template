declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  import React from 'react';

  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default ReactComponent;
}

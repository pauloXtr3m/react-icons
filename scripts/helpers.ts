import { Idims } from './types';

export const extractViewBox = (svgStr: string): string => {
  const viewBoxRegex = /<svg .*?viewBox=["'](-?[\d\.]+[, ]+-?[\d\.]+[, ][\d\.]+[, ][\d\.]+)["']/;
  const matches = svgStr.match(viewBoxRegex);
  return matches && matches.length >= 2 ? matches[1] : '0 0 10000 10000';
};

export const viewBox2dims = (svgStr: string): Idims => {
  const viewBox = extractViewBox(svgStr);
  const list = viewBox.split(' ');
  if (list.length === 4) {
    return { width: list[2], height: list[3] };
  } else {
    return { width: '10000', height: '10000' };
  }
};

export const getSvgDims = (svgInfo: object, svgStr: string): Idims => {
  if (
    svgInfo.hasOwnProperty('width') &&
    svgInfo.hasOwnProperty('height') &&
    typeof (svgInfo as any).width === 'string' &&
    typeof (svgInfo as any).height === 'string'
  ) {
    return {
      width: (svgInfo as any).width,
      height: (svgInfo as any).height,
    };
  }
  return viewBox2dims(svgStr);
};

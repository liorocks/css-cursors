import faChrome from '@fortawesome/fontawesome-free-brands/faChrome';
import faFirefox from '@fortawesome/fontawesome-free-brands/faFirefox';
import faSafari from '@fortawesome/fontawesome-free-brands/faSafari';
import faOpera from '@fortawesome/fontawesome-free-brands/faOpera';
import faExplorer from '@fortawesome/fontawesome-free-brands/faInternetExplorer';
import faEdge from '@fortawesome/fontawesome-free-brands/faEdge';

export const getBrowserIcon = name => {
  if (name === 'firefox') return faFirefox;
  if (name === 'safari') return faSafari;
  if (name === 'opera') return faOpera;
  if (name === 'ie') return faExplorer;
  if (name === 'edge') return faEdge;
  return faChrome;
};

export const toCode = (name, prefixes = []) => {
  let code = `cursor: ${name};`;
  const prefixed = prefixes.map(prefix => {
    return `cursor: ${prefix}-${name};`;
  });
  return [...prefixed, code].join('\n');
};

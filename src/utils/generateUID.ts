export interface UidProps {
  prefix?: string;
  suffix?: string;
  radix?: number;
  start?: number;
}
export function generateUID(props: UidProps = {}): string {
  const { prefix, suffix, radix = 16, start = 2 } = props;
  const parts: string[] = [
    Math.random()
      .toString(radix)
      .slice(start, start + 8),
    Math.random()
      .toString(radix)
      .slice(start, start + 4),
    Math.random()
      .toString(radix)
      .slice(start, start + 4),
    Math.random()
      .toString(radix)
      .slice(start, start + 4),
    Math.random().toString(radix).slice(start),
  ];
  if (prefix) parts.unshift(prefix);
  if (suffix) parts.push(suffix);
  return parts.join("-");
}

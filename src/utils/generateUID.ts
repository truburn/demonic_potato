export interface UidProps {
  prefix?: string;
  suffix?: string;
  radix?: number;
  start?: number;
  length?: number;
}
export function generateUID(props: UidProps = {}): string {
  const { prefix, suffix, radix = 16, start = 2, length = 4 } = props;
  const parts: string[] = Array(length)
    .fill(radix)
    .map((rad) =>
      Math.random()
        .toString(rad)
        .slice(start, start + 4)
    );
  if (prefix) parts.unshift(prefix);
  if (suffix) parts.push(suffix);
  return parts.join("-");
}

import { generateUID } from "@utils/generateUID";

describe("generateUID", () => {
  it("has no prefix or suffix by default and only 5 segments", () => {
    const uid = generateUID();
    expect(uid).toBeDefined();
    expect(uid.split("-")).toHaveLength(5);
  });

  it("has a passed prefix", () => {
    const uid = generateUID({ prefix: "uid" });
    expect(uid).toBeDefined();
    const uidParts = uid.split("-");
    expect(uidParts.indexOf("uid")).toEqual(0);
    expect(uidParts).toHaveLength(6);
  });

  it("has a passed suffix", () => {
    const uid = generateUID({ suffix: "uid" });
    expect(uid).toBeDefined();
    const uidParts = uid.split("-");
    expect(uidParts.indexOf("uid")).toEqual(uidParts.length - 1);
    expect(uidParts).toHaveLength(6);
  });

  it("has both a prefix and a suffix", () => {
    const uid = generateUID({ prefix: "prefix", suffix: "suffix" });
    expect(uid).toBeDefined();
    const uidParts = uid.split("-");
    expect(uidParts.indexOf("prefix")).toEqual(0);
    expect(uidParts.indexOf("suffix")).toEqual(uidParts.length - 1);
    expect(uidParts).toHaveLength(7);
  });

  it("has custom radix and start", () => {
    const uid = generateUID({ radix: 32, start: 4 });
    expect(uid).toBeDefined();
    expect(uid.split("-")).toHaveLength(5);
  });
});

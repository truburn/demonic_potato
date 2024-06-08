import { reduceBookProps, reduceBookResponse } from "@utils/bookTransformers";
import bookResponseData from "@tests/testData/book-response-data.json";
import bookProps from "@tests/testData/book-props.json";
import { BookProps, BookResponse } from "@pages/Book";

describe("bookTransformers", () => {
  it("converts a response from the API into the frontend type", () => {
    const actual = reduceBookProps(bookResponseData as BookResponse);
    expect(actual).toStrictEqual(bookProps);
  });

  it("converts a frontend book into the API response type", () => {
    const actual = reduceBookResponse(bookProps as BookProps);
    expect(actual).toStrictEqual(bookResponseData);
  });
});

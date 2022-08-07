import { act, renderHook } from "@testing-library/react-hooks";

import { rawRepos } from "../../test-utils/mocks";
import { getRepos } from "../../services/repos-service";
import { useRepos } from "../use-repos";

jest.mock("../../services/repos-service");

const AUGUST_FIFTH = new Date(2022, 7, 5, 14, 40, 15, 0);

describe("useRepos", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(AUGUST_FIFTH);
    getRepos.mockResolvedValue(rawRepos);
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.useRealTimers();
  });

  it("returns proper state", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useRepos({ sinceDate: AUGUST_FIFTH })
    );

    expect(result.current.repos).toEqual([]);
    expect(result.current.isDone).toBe(false);
    expect(result.current.isError).toBe(false);
    expect(result.current.isLoading).toBe(true);
    expect(typeof result.current.fetchRepos).toBe("function");

    await waitForNextUpdate();

    expect(result.current.repos).toEqual(rawRepos);
    expect(result.current.isDone).toBe(true);
    expect(result.current.isError).toBe(false);
    expect(result.current.isLoading).toBe(false);
  });

  it("calls API with right data", async () => {
    const { waitForNextUpdate } = renderHook(() =>
      useRepos({ sinceDate: AUGUST_FIFTH })
    );

    expect(getRepos).toBeCalledTimes(1);
    expect(getRepos).toBeCalledWith(AUGUST_FIFTH);

    // just to get rid of noise in console
    await waitForNextUpdate();
  });

  it("fetches repos again", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useRepos({ sinceDate: AUGUST_FIFTH })
    );

    expect(getRepos).toBeCalledTimes(1);
    expect(getRepos).toBeCalledWith(AUGUST_FIFTH);

    await waitForNextUpdate();

    act(() => {
      result.current.fetchRepos();
    });

    expect(getRepos).toBeCalledTimes(2);
    expect(getRepos).toBeCalledWith(AUGUST_FIFTH);

    // just to get rid of noise in console
    await waitForNextUpdate();
  });

  describe("when API throws error", () => {
    beforeEach(() => {
      getRepos.mockRejectedValue(null);
    });

    it("returns proper state", async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useRepos({ sinceDate: AUGUST_FIFTH })
      );

      expect(result.current.repos).toEqual([]);
      expect(result.current.isDone).toBe(false);
      expect(result.current.isError).toBe(false);
      expect(result.current.isLoading).toBe(true);
      expect(typeof result.current.fetchRepos).toBe("function");

      await waitForNextUpdate();

      expect(result.current.repos).toEqual([]);
      expect(result.current.isDone).toBe(true);
      expect(result.current.isError).toBe(true);
      expect(result.current.isLoading).toBe(false);
    });
  });
});

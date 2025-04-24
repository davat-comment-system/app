import useSWRInfinite from 'swr/infinite';
const PAGE_SIZE = 10;


export const usePaginatedComments = () => {
    const getKey = (pageIndex: number, previousPageData: any) => {
        if (previousPageData && previousPageData.length === 0) return null; // No more data
        return `/comment?page=${pageIndex + 1}&limit=${PAGE_SIZE}`;
    };

    const { data, error, size, setSize, isValidating } = useSWRInfinite(getKey);

    const comments = data ? data.flat() : [];
    const isLoadingInitialData = !data && !error;
    const isLoadingMore = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');
    const isReachingEnd = data && data[data.length - 1]?.length < PAGE_SIZE;

    return {
        comments,
        error,
        isLoadingMore,
        isReachingEnd,
        loadMore: () => setSize(size + 1),
        isValidating
    };
};

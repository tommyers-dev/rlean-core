export default function useEntity(key: string): {
    add: (value: any) => void;
    select: (exp: any) => any;
    selectAll: () => any;
    remove: () => void;
    clear: () => void;
    get: () => void;
    post: () => void;
    put: () => void;
    patch: () => void;
    del: () => void;
};

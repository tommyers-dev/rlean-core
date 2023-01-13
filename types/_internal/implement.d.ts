export declare const implement: (testableClass: Object, rules: {
    methods: string[];
}) => {
    rules: {
        methods: string[];
    };
    given: {
        ClassName: string;
        Methods: any[];
        Attributes: {};
    };
    error: {
        type: string;
        message: string;
        invalidMethods: any[];
        methodsNotIncluded: any[];
    };
    passed: boolean;
};

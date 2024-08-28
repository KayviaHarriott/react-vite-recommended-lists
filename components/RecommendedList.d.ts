import React from "react";
interface RecommendedListProps {
    title?: string;
    items: {
        subheading?: string;
        title: string;
        subtitle?: string;
        thumbnail?: string;
    }[];
    buttonText: string;
    buttonAction?: () => void;
}
export declare const RecommendedList: React.FC<RecommendedListProps>;
export default RecommendedList;

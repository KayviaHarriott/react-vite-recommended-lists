import React from "react";
interface ItemBoxProps {
    subheading?: string;
    title: string;
    subtitle?: string;
    buttonText: string;
    index: number;
    thumbnail?: string;
    onRemove: () => void;
    onAction?: () => void;
}
export declare const ItemBox: React.FC<ItemBoxProps>;
export default ItemBox;

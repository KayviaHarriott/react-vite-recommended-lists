import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import { IoClose } from "react-icons/io5";
export const ItemBox = ({ subheading, title, subtitle, buttonText, index, thumbnail, onRemove, onAction, }) => {
    return (_jsx("div", { children: _jsx(Box, { sx: {
                border: "1px solid #E6E6E6",
                padding: "10px 12px",
                borderRadius: (index == 3 && "0px 0px 5px 5px") ||
                    (index == 0 && "5px 5px 0px 0px") ||
                    "",
            }, children: _jsxs(Box, { sx: { display: "flex", justifyContent: "space-between" }, children: [_jsxs(Box, { sx: {
                            display: "flex",
                            gap: "12px",
                            alignItems: "center",
                        }, children: [thumbnail && (_jsx(Box, { sx: { width: "70px", height: "70px" }, children: _jsx("img", { src: thumbnail, alt: "text", style: { borderRadius: "5px", width: "70px", height: "70px" } }) })), !thumbnail && (_jsx(Skeleton, { variant: "rounded", width: 70, height: 70 })), _jsxs("div", { children: [subheading && _jsx("h6", { style: { color: "#6F6F6F" }, children: subheading }), _jsxs(Box, { sx: { paddingTop: "1px" }, children: [_jsx("h4", { style: { fontWeight: "bold" }, children: title }), subtitle && _jsx("h6", { style: { color: "#6F6F6F" }, children: subtitle })] })] })] }), _jsxs(Box, { sx: { display: "flex", gap: "12px" }, children: [_jsx(Box, { sx: {
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    paddingTop: "10%",
                                }, children: _jsx(Button, { sx: {
                                        boxShadow: "none",
                                        textTransform: "none",
                                        height: "fit-content",
                                        fontSize: "14px",
                                        padding: "4px 16px",
                                        backgroundColor: "#37ABEB",
                                        color: "white",
                                        "&:hover": {
                                            boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.2)"
                                        }
                                    }, variant: "contained", onClick: onAction, children: buttonText }) }), _jsx(IoClose, { onClick: onRemove, style: {
                                    width: "15px",
                                    height: "15px",
                                    cursor: "pointer",
                                    color: "gray",
                                } })] })] }) }) }));
};
export default ItemBox;
//# sourceMappingURL=ItemBox.js.map
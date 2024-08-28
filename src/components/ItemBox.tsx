import { Box, Button } from "@mui/material";
import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { IoClose } from "react-icons/io5";

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

export const ItemBox: React.FC<ItemBoxProps> = ({
  subheading,
  title,
  subtitle,
  buttonText,
  index,
  thumbnail,
  onRemove,
  onAction,
}) => {
  return (
    <div>
      <Box
        sx={{
          border: "1px solid #E6E6E6",
          padding: "10px 12px",
          borderRadius:
            (index == 3 && "0px 0px 5px 5px") ||
            (index == 0 && "5px 5px 0px 0px") ||
            "",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}
          >
            {thumbnail && (
              <Box sx={{ width: "70px", height: "70px" }}>
                <img
                  src={thumbnail}
                  alt="text"
                  style={{ borderRadius: "5px", width: "70px", height: "70px" }}
                />
              </Box>
            )}
            {!thumbnail && (
              <Skeleton variant="rounded" width={70} height={70} />
            )}
            <div>
              {subheading && <h6 style={{ color: "#6F6F6F" }}>{subheading}</h6>}
              <Box sx={{ paddingTop: "1px" }}>
                <h4 style={{ fontWeight: "bold" }}>{title}</h4>
                {subtitle && <h6 style={{ color: "#6F6F6F" }}>{subtitle}</h6>}
              </Box>
            </div>
          </Box>
          <Box sx={{ display: "flex", gap: "12px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "10%",
              }}
            >
              <Button
                sx={{
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
                }}
                variant="contained"
                onClick={onAction}
              >
                {buttonText}
              </Button>
            </Box>
            <IoClose
              onClick={onRemove}
              style={{
                width: "15px",
                height: "15px",
                cursor: "pointer",
                color: "gray",
              }}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ItemBox;

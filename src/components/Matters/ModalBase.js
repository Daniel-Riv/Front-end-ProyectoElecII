import * as React from "react";
import { styled, ThemeProvider } from "@mui/material/styles";
import {
  Modal,
  Box,
  Grid,
  Button,
  Typography,
  IconButton,
  Divider
} from "@mui/material/";
import CloseIcon from "@mui/icons-material/Close";
import theme from "../theme/theme";
const ModalFrame = styled(Modal)(({ theme }) => ({
  ".modalHeader": {
    "&.pb0": {
      paddingBottom: "0!important"
    }
  },
  ".modalChildren": {
    padding: "0 20px 20px 20px",
    ".MuiFormGroup-row": {
      marginBottom: 20
    },
    ".MuiTypography-overline": {
      marginTop: 10
    }
  },
  [theme.breakpoints.down("lg")]: {
    ".modalContainer": {
      ".modalChildren": {
        overflowY: "scroll",
        height: "calc(60vh - 200px)"
      }
    }
  },
  [theme.breakpoints.down("md")]: {
    ".modalContainer": {
      minWidth: "90vw!important",
      width: "90vw!important",
      minHeight: "auto",
      height: "250px",
      left: "50%",
      transform: "translate(-50%, -50%)",
      ".MuiTypography-h3": {
        width: "50%"
      },
      ".modalHeader": {
        padding: "12px 16px 16px 16px ",
        ".closeButton": {
          right: 16
        }
      },
      ".modalFooter": {
        padding: 16
      }
    }
  }
}));

/* const ModalContentLeftProps = {
  titleText,
  subTitleText,
  isOpen,
  buttonText1,
  buttonText2,
  onClose,
  typeModal: 1 | 2;
  children?: React.ReactNode;
};
 */
export const ModalBase = ({
  titleText,
  subTitleText,
  isOpen,
  buttonText1,
  buttonText2,
  onClose,
  children,
  actionButton2,
}) => (
 <ThemeProvider theme={theme}>
    <>
      <ModalFrame
        open={isOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modalBox"
      >
          <Grid className="modalContainer">
          <Box className="modalHeader pb0">
            <IconButton
              color="secondary"
              onClick={onClose}
              className="closeButton"
              size="small"
            >
              <CloseIcon />
            </IconButton>
            <Typography id="modal-modal-title" variant="h3" color="primary">
              {titleText || "Ingrese un texto"}
            </Typography>
            <Typography variant="body1" color="text.dark">
              {subTitleText}
            </Typography>
          </Box>
          <Divider className="dividerHeader" />
          <Box className="modalChildren">{children}</Box>
          <Box className="modalFooter">
            <Button
              size="small"
              variant="contained"
              onClick={onClose}
              color="error"
            >
              {buttonText1 || "Ingrese un texto"}
            </Button>
            <Button size="small" variant="contained" color="primary"
              onClick={actionButton2 }
            >
              {buttonText2 || "Ingrese un texto"}
            </Button>
          </Box>
        </Grid>
      </ModalFrame>
    </>
    </ThemeProvider>
);

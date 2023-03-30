import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TranslateIcon from "@mui/icons-material/Translate";
import { IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";
import langHelper from "../../../helpers/langHelper";

export default function LanguageSelect() {
  const [open, setOpen] = React.useState(false);
  const [lang, setLang] = React.useState<string>("pl-PL");
  const { t } = useTranslation(["common"]);

  const handleChange = (event: SelectChangeEvent<typeof lang>) => {
    setLang(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
    setLang(langHelper.currentLanguage());
  };

  const handleClose = (save: boolean) => {
    setOpen(false);
    if (save) langHelper.saveCurrentLanguage(lang);
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <TranslateIcon />
      </IconButton>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>{t("select_lang")}</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                native
                value={lang}
                onChange={handleChange}
                input={<OutlinedInput />}
              >
                <option value={"pl-PL"}>{t("pl")}</option>
                <option value={"en-EN"}>{t("en")}</option>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)}>{t("cancel")}</Button>
          <Button onClick={() => handleClose(true)}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

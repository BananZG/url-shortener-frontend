import type { FC, ReactElement } from 'react';
import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
} from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons';

import type { URL } from '../../redux/url/url.models';
import { deleteUrl } from '../../redux/url/url.actions';
import { useAppDispatch } from '../../redux/hook';

export interface DeleteDialogProps {
  url: URL;
}

export const DeleteDialog: FC<DeleteDialogProps> = ({
  url: { _id, longUrl },
}): ReactElement => {
  const [open, setOpen] = useState(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);
  const dispatch = useAppDispatch();
  const onDelete = () => {
    handleClose();
    dispatch(deleteUrl(_id));
  };
  return (
    <>
      <IconButton data-testid="delete-dialog-btn" onClick={handleOpen}>
        <DeleteForever />
      </IconButton>
      <Dialog
        data-testid="delete-dialog-main"
        onClose={handleClose}
        open={open}
      >
        <DialogTitle>Do you want to delete {longUrl}?</DialogTitle>
        <DialogActions>
          <Button
            data-testid="delete-dialog-cancel-btn"
            onClick={handleClose}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            data-testid="delete-dialog-ok-btn"
            onClick={onDelete}
            color="primary"
            autoFocus
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};


export function BasicModal({ open, children, onClose, width, maskCloseable }: { open: boolean, children: React.ReactNode, onClose: () => void, width?: number, maskCloseable?: boolean }) {
    return (
        <div>
            <Modal
                open={open}
                onClose={(e, reason) => {
                    if (maskCloseable !== false || reason !== "backdropClick") {
                        onClose()
                    }
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ ...style, width: width || 400 }}>
                    {children}
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="contained" onClick={onClose} style={{ marginTop: '12px' }}>确定</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

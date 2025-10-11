import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};


export function BasicModal({ open, children, onClose, onConfirm, confirmText, closeableDelay, showCancelButton, maskCloseable }: {
    open: boolean, children: React.ReactNode, onClose: () => void, onConfirm?: () => void, confirmText?: string, closeableDelay?: number, showCancelButton?: boolean, maskCloseable?: boolean
}) {

    const [countdown, setCurrentCountdown] = React.useState<number>(closeableDelay || 0);
    React.useEffect(() => {
        setCurrentCountdown(closeableDelay || 0);
        if (closeableDelay && open) {
            const interval = setInterval(() => {
                setCurrentCountdown((prev) => {
                    if (prev <= 1) {
                        clearInterval(interval);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
            return () => {
                clearInterval(interval);
            };
        }
    }, [open]);



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
                <Box sx={{ ...style, width: 'auto' }}>
                    {children}
                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                        {showCancelButton && <Button variant="outlined" onClick={onClose} style={{ marginTop: '12px' }}>取消</Button>}
                        <Button
                            disabled={countdown > 0}
                            variant="contained"
                            onClick={() => {
                                onConfirm?.();
                                onClose();
                            }}
                            style={{ marginTop: '12px', marginLeft: '12px' }}> {confirmText || '确认'}  {countdown > 0 && <span style={{ marginLeft: '4px' }}> ({countdown}秒后可关闭)</span>}</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
